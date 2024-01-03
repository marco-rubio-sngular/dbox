#:{'..'}>----------------------------------------------
#:{'..'}> basic required variables
#:{'..'}>----------------------------------------------
aws_profile  = "belike-markitos"
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
bucket_id      = "state-stack-balanced-deployment"
dynamodb_table = "dbox-states-storage"