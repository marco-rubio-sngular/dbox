terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.30.0"
    }

    local = {
      version = "2.1.0"
    }
  }

  backend "s3" {
    profile = local.environment_data.AWS_PROFILE
    region  = local.environment_data.AWS_REGION
  }
}

provider "aws" {
  region  = local.environment_data.AWS_REGION
  profile = local.environment_data.AWS_PROFILE
}

locals {
  environment_data = { for tuple in regexall("(.*)=(.*)", file("./.env")) : tuple[0] => tuple[1] }
}
