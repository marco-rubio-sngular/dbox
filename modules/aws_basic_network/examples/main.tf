module "aws_basic_network" {
  source               = "../"
  environment          = var.environment
  project_name         = var.project_name
  company_name         = var.company_name
  common_tags          = var.common_tags
  aws_profile          = var.aws_profile
  aws_region           = var.aws_region
  azs                  = var.azs
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  vpc_cidr_block       = var.vpc_cidr_block
}
