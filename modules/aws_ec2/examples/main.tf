provider "aws" {
  profile = var.aws_profile
  region  = var.aws_region

  default_tags {
    tags = merge(var.common_tags, { "Environment" = var.environment })
  }
}

module "aws_ec2" {
  source             = "../"
  how_many_instances = var.how_many_instances
  ami                = data.aws_ami.ubuntu.id
  instance_type      = var.instance_type
  environment        = var.environment
  project_name       = var.project_name
  company_name       = var.company_name
  common_tags        = var.common_tags
  aws_profile        = var.aws_profile
  aws_region         = var.aws_region
}
