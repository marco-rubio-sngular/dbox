module "aws_ec2_web" {
  source             = "../"
  how_many           = var.how_many
  image_id           = data.aws_ami.ubuntu.id
  instance_type      = var.instance_type
  environment        = var.environment
  project_name       = var.project_name
  company_name       = var.company_name
  common_tags        = var.common_tags
  aws_profile        = var.aws_profile
  aws_region         = var.aws_region
  user_data_filepath = var.user_data_filepath

}
