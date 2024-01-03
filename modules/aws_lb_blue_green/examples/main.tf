module "aws_lb_blue_green" {
  source               = "../"
  environment          = var.environment
  project_name         = var.project_name
  company_name         = var.company_name
  common_tags          = var.common_tags
  aws_profile          = var.aws_profile
  aws_region           = var.aws_region
  security_groups_ids  = var.security_groups_ids
  traffic_dist_map     = var.traffic_dist_map
  traffic_distribution = var.traffic_distribution
  subnets_ids          = var.subnets_ids
  vpc_id               = var.vpc_id

}
