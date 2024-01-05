#{.".}:>--------------------------------------------------------
#{.".}:> Archetype balanced deployement
#{.".}:> CreatedBy mArKitos ~ SngularDevopsTeam
#{.".}:>--------------------------------------------------------

#{.".}:>--------------------------------------------------------
#{.".}:> La configuracion del provider debera ser ademas de 
#{.".}:> los ficheros de configuracion, el entorno debes exportar
#{.".}:> 
#{.".}:> export AWS_PROFILE="xxxxxxxxx"
#{.".}:> export AWS_REGION="eu-west-1"
#{.".}:> 
#{.".}:> Este proyecto funciona todo con el profile y la region
#{.".}:> no esta preparadao para usarlo con credenciales.
#{.".}:> -------------------------------------------------------
#{.".}:> Siempre version fija, no usamos constrain que puedan
#{.".}:> dar al traste por versionado el proyecto
#{.".}:>--------------------------------------------------------
terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
  }

  backend "s3" {
  }
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}
#{.".}:>--------------------------------------------------------


#{.".}:>--------------------------------------------------------
#{.".}:> Este primer modulo nos va a proveer de los siguientes
#{.".}:> recursos, primero para la parte publica para internet
#{.".}:> y por ultimo un NAT para que la red privada tenga
#{.".}:> acceso al exterior a traves de la red publica
#{.".}:>--------------------------------------------------------
#{.".}:> INVENTARIO
#{.".}:>--------------------------------------------------------
#{.".}:> 1 VPC
#{.".}:> 1 SUBNET PUBLICA (map_public_ip_on_launch = true)
#{.".}:> 1 INET GATEWAY asociado a la VPC
#{.".}:> 1 ROUTE TABLE asociado a la VPC
#{.".}:> 1 ROUTE asociando gateway y ROUTE TABLE 
#{.".}:>   destination_cidr_block = "0.0.0.0/0"
#{.".}:>********************************************************
#{.".}:> 1 SUBNET PRIVADA (map_public_ip_on_launch = false)
#{.".}:> 1 AWS_EIP para la salida publica
#{.".}:> 1 NAT GATEWAY con la EIP y a la primera SUBNET publica
#{.".}:> 1 ROUTE TABLE asociado a la VPC
#{.".}:> 1 ROUTE asociando gateway y ROUTE TABLE 
#{.".}:>--------------------------------------------------------
#{.".}:> REQUERIMIENTOS
#{.".}:>--------------------------------------------------------
#{.".}:> No tiene requerimiento alguno al ser la base la vpc
#{.".}:> con las subnets
#{.".}:>--------------------------------------------------------
module "aws_igw_network" {
  source               = "../../modules/aws_igw_network"
  common_tags          = var.common_tags
  vpc_cidr_block       = var.main_cidr_block
  company_name         = var.company_name
  project_name         = var.project_name
  azs                  = var.azs
  environment          = var.environment
  aws_profile          = var.aws_profile
  aws_region           = var.aws_region
  private_subnet_cidrs = var.private_subnet_cidr_blocks
  public_subnet_cidrs  = var.public_subnet_cidr_blocks
}
#{.".}:>--------------------------------------------------------


#{.".}:>--------------------------------------------------------
#{.".}:> Este modulo nos proporciona una SECURITY GROUP ya 
#{.".}:> configurados para la entrada abierta puertos
#{.".}:> 
#{.".}:> 80,443,22
#{.".}:> 
#{.".}:> y con una entrada abierta
#{.".}:>--------------------------------------------------------
#{.".}:> INVENTARIO
#{.".}:>--------------------------------------------------------
#{.".}:> 1 SECURITY GROUP con entrada 80,443,22 y salida ALL
#{.".}:>--------------------------------------------------------
#{.".}:> REQUERIMIENTOS
#{.".}:>--------------------------------------------------------
#{.".}:> 1 VPC ID
#{.".}:>--------------------------------------------------------
module "aws_sg_web" {
  source       = "../../modules/aws_sg_web"
  common_tags  = var.common_tags
  aws_profile  = var.aws_profile
  aws_region   = var.aws_region
  project_name = var.project_name
  environment  = var.environment
  company_name = var.company_name
  vpc_id       = module.aws_igw_network.vpc_id
}


#{.".}:>--------------------------------------------------------
#{.".}:> Este modulo nos proporciona un balanceador de aplicacion
#{.".}:> que estara pegado al internet gateway y que tendra los
#{.".}:> 2 target groups de destino de trafico (blue/green)
#{.".}:>--------------------------------------------------------
#{.".}:> INVENTARIO
#{.".}:>--------------------------------------------------------
#{.".}:> 1 LB del tipo APPLICATION a las 3 SUBNETS publicas
#{.".}:> 1 TARGET GROUP GREEN al puerto 80 y a la VPC
#{.".}:> 1 TARGET GROUP BLUE al puerto 80 y a la VPC
#{.".}:> 1 LISTENER LB que por weight(peso %) tiene como 
#{.".}:>   action un forward por ese peso a los TARGET GROUP
#{.".}:>--------------------------------------------------------
#{.".}:> REQUERIMIENTOS
#{.".}:>--------------------------------------------------------
#{.".}:> 1 VPC ID
#{.".}:> 3 SUBNETS IDS - de las publicas
#{.".}:> 1 SECURITY GROUP - usamos el unico que tenemos como set
#{.".}:>--------------------------------------------------------
module "aws_lb_blue_green" {
  source               = "../../modules/aws_lb_blue_green"
  common_tags          = var.common_tags
  aws_profile          = var.aws_profile
  aws_region           = var.aws_region
  project_name         = var.project_name
  environment          = var.environment
  company_name         = var.company_name
  vpc_id               = module.aws_igw_network.vpc_id
  subnets_ids          = module.aws_igw_network.public_subnets_ids
  security_groups_ids  = toset([module.aws_sg_web.aws_group_id])
  traffic_dist_map     = var.traffic_distribution_map
  traffic_distribution = var.traffic_distribution
}


#{.".}:>--------------------------------------------------------
#{.".}:> A traves de este modulo vamos a crear 2 grupos de targets
#{.".}:> para el balanceador, uno sera el green y el otro el blue,
#{.".}:> cada uno con su respectivo user_data y como van por
#{.".}:> separado cada uno puede tener su propia AMI sizes etc...
#{.".}:>--------------------------------------------------------
#{.".}:> INVENTARIO
#{.".}:>--------------------------------------------------------
#{.".}:> 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
#{.".}:> 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
#{.".}:> 1 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
#{.".}:>--------------------------------------------------------
#{.".}:> REQUERIMIENTOS
#{.".}:>--------------------------------------------------------
#{.".}:> 1 VPC ID
#{.".}:> 3 SUBNETS IDS - de las publicas
#{.".}:> 1 SECURITY GROUP - usamos el unico que tenemos como set
#{.".}:> 2 TARGET GROUP - los 2 del LB - green y blue target
#{.".}:>--------------------------------------------------------
module "aws_asg_blue" {
  source              = "../../modules/aws_asg"
  prefix_name         = "BLUE"
  common_tags         = var.common_tags
  aws_profile         = var.aws_profile
  aws_region          = var.aws_region
  project_name        = var.project_name
  environment         = var.environment
  company_name        = var.company_name
  instance_max_size   = var.instance_max_size
  instance_min_size   = var.instance_min_size
  desired_size        = var.desired_size
  user_data_filepath  = var.user_data_filepath_blue
  image_id            = var.image_id
  instance_type       = var.instance_type
  security_groups_ids = toset([module.aws_sg_web.aws_group_id])
  subnets_ids         = module.aws_igw_network.public_subnets_ids
  target_group_arns   = toset([module.aws_lb_blue_green.aws_lb_target_group_blue_arn, module.aws_lb_blue_green.aws_lb_target_group_green_arn])
}
module "aws_asg_green" {
  source              = "../../modules/aws_asg"
  prefix_name         = "GREEN"
  common_tags         = var.common_tags
  aws_profile         = var.aws_profile
  aws_region          = var.aws_region
  project_name        = var.project_name
  environment         = var.environment
  company_name        = var.company_name
  instance_max_size   = var.instance_max_size
  instance_min_size   = var.instance_min_size
  desired_size        = var.desired_size
  user_data_filepath  = var.user_data_filepath_green
  image_id            = var.image_id
  instance_type       = var.instance_type
  security_groups_ids = toset([module.aws_sg_web.aws_group_id])
  subnets_ids         = module.aws_igw_network.public_subnets_ids
  target_group_arns   = toset([module.aws_lb_blue_green.aws_lb_target_group_blue_arn, module.aws_lb_blue_green.aws_lb_target_group_green_arn])
}
