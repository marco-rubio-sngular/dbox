#:{.'.}> ----------------------------------------------------------------
#:{.'.}> if CREATE_VPC is false then use this values instance of create vpc
#:{.'.}> if CREATE_VPC is true then ignore this values... create new values
#:{.'.}> ---------------------------------------------------------------- 
CREATE_VPC       = true # yes, create new values and ignore this other values
EXISTING_VPC_ID  = "vpc-7288a114"
EXISTING_SUBNETS = ["subnet-1161fb77", "subnet-e2ed4ab8", "subnet-1e1f6a56"]
#:{.'.}> ----------------------------------------------------------------


#:{.'.}> ----------------------------------------------------------------
#:{.'.}> general default values for all environments
#:{.'.}> ---------------------------------------------------------------- 
MAIN_CIDR_BLOCK           = "172.31.0.0/16"
VPC_ENABLE_DNS_SUPPORT    = true
VPC_ENABLE_DNS_HOSTNAMES  = true
PUBLIC_SUBNET_CIDR_BLOCKS = ["172.31.0.0/20", "172.31.16.0/20", "172.31.32.0/20"]
TRAFFIC_DISTRIBUTION      = "blue"
TRAFFIC_DISTRIBUTION_MAP = {
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
COMMON_TAGS = {
  CREATED_BY    = "devops team sngular"
  PROJECT       = "project-name"
  ENVIRONMENT   = "test"
  INFRA_VERSION = "0.0.1"
}
#:{.'.}> ---------------------------------------------------------------- 
