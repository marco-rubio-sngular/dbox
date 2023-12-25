terraform {
  backend "s3" {
    bucket         = "dbox-terraform-states"
    key            = "pro/dbox/network/terraform.tfstate"
    region         = "eu-west-1"
    encrypt        = true
    dynamodb_table = "backend_dynamodb_table_terraform_lock"
  }
}
