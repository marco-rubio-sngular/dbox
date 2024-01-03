#:{'..'}>----------------------------------------------
#:{'..'}> basic required variables
#:{'..'}>----------------------------------------------
aws_profile  = "markitos-info"
aws_region   = "eu-west-1"
project_name = "dbox"
company_name = "sngular"
environment  = "test"
common_tags = {
  Project   = "dbox"
  CreatedBy = "sngular"
}
#:{'..'}>----------------------------------------------


#:{'..'}>----------------------------------------------
#:{'..'}> other variables and settings
#:{'..'}>----------------------------------------------
security_groups_ids  = ["value"]
subnets_ids          = ["value"]
vpc_id               = "value"
traffic_distribution = "blue"
traffic_dist_map = {
  blue = {
    blue  = 100
    green = 0
  }
  blue-90 = {
    blue  = 90
    green = 10
  }
  split = {
    blue  = 50
    green = 50
  }
  green-90 = {
    blue  = 10
    green = 90
  }
  green = {
    blue  = 0
    green = 100
  }
}