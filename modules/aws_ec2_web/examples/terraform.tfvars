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
user_data_filepath = <<EOF
#!/bin/bash
sudo apt update && apt install -y apache2
sudo echo "Hello, World!" > /var/www/html/index.html
sudo echo "Hello, World!" > index.html
sudo service apache2 restart
EOF
image_id           = "ami-0aef57767f5404a3c"
instance_type      = "t2.micro"
how_many           = 1
#:{'..'}>----------------------------------------------