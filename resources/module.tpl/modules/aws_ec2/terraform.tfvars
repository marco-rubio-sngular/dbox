ami           = "ami-0aef57767f5404a3c"
instance_type = "t2.micro"
project_name  = "dbox"
company_name  = "sngular"
environment   = "test"

common_tags = {
  Project     = var.project_name
  Environment = var.environment
  CreatedBy   = var.company_name
}