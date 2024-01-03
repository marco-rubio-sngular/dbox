module "aws_sg" {
  source       = "../"
  environment  = var.environment
  project_name = var.project_name
  company_name = var.company_name
  common_tags  = var.common_tags
  aws_profile  = var.aws_profile
  aws_region   = var.aws_region
  how_many     = var.how_many
  port_mapping = var.port_mapping
}
