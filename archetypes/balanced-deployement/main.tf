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

module "aws_sg_web" {
  source       = "../../modules/aws_sg_web"
  common_tags  = var.common_tags
  aws_profile  = var.aws_profile
  aws_region   = var.aws_region
  project_name = var.project_name
  environment  = var.environment
  company_name = var.company_name
}

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

module "aws_asg" {
  source              = "../../modules/aws_asg"
  common_tags         = var.common_tags
  aws_profile         = var.aws_profile
  aws_region          = var.aws_region
  project_name        = var.project_name
  environment         = var.environment
  company_name        = var.company_name
  instance_max_size   = var.instance_max_size
  instance_min_size   = var.instance_min_size
  desired_size        = var.desired_size
  user_data_filepath  = var.user_data_filepath
  image_id            = var.image_id
  instance_type       = var.instance_type
  security_groups_ids = toset([module.aws_sg_web.aws_group_id])
  subnets_ids         = module.aws_igw_network.public_subnets_ids
  target_group_arns   = toset([module.aws_lb_blue_green.aws_lb_target_group_blue_arn, module.aws_lb_blue_green.aws_lb_target_group_green_arn])
}
