#:{.'.}> ----------------------------------------------------------------
#:{.'.}> general default values for all environments
#:{.'.}> ---------------------------------------------------------------- 
common_tags = {
  CreatedBy = "devops team sngular"
  Project   = "project-name"
}

project_name               = "dbox"
company_name               = "sngular"
vpc_enable_dns_support     = true
vpc_enable_dns_hostnames   = true
main_cidr_block            = "172.31.0.0/16"
public_subnet_cidr_blocks  = ["172.31.1.0/24", "172.31.2.0/24", "172.31.3.0/24"]
private_subnet_cidr_blocks = ["172.31.10.0/24", "172.31.20.0/24", "172.31.30.0/24"]
azs                        = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
image_id                   = "ami-0aef57767f5404a3c"
instance_type              = "t2.micro"
desired_size               = 2
instance_max_size          = 4
instance_min_size          = 1
traffic_distribution       = "split"
traffic_distribution_map = {
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

user_data_filepath_green = "userdata_green.sh"
user_data_filepath_blue  = "userdata_blue.sh"
#:{.'.}> ---------------------------------------------------------------- 
