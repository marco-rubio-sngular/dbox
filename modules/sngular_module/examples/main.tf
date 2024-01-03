module "sngular_module" {
  source       = "../"
  environment  = var.environment
  project_name = var.project_name
  company_name = var.company_name
  common_tags  = var.common_tags
  aws_profile  = var.aws_profile
  aws_region   = var.aws_region
}
