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
how_many = 1
port_mapping = [
  {
    ingress = [{
      description = "http"
      protocol    = "tcp"
      from_port   = 80
      to_port     = 80
      cidr_blocks = ["0.0.0.0/0"]
      }, {
      protocol    = "tcp"
      from_port   = 22
      to_port     = 22
      cidr_blocks = ["0.0.0.0/0"]
      description = "ssh"
    }],
    egress = [{
      protocol    = "tcp"
      from_port   = 0
      to_port     = 65535
      cidr_blocks = ["0.0.0.0/0"]
      description = "all"
    }]
  }
]
#:{'..'}>----------------------------------------------
