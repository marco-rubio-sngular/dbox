provider "aws" {
  default_tags {
    tags = var.common_tags
  }
}

data "aws_availability_zones" "available" {}

module "aws_ec2" {
  source             = "../"
  how_many_instances = var.how_many_instances
  ami                = var.ami
  instance_type      = var.instance_type
  environment        = var.environment
  project_name       = var.project_name
  company_name       = var.company_name
  common_tags        = var.common_tags
}
