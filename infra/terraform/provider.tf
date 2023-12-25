terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }

    local = {
      version = "2.1"
    }
  }
}

provider "aws" {
  region  = "eu-west-1"
  profile = "markitos-info"
}
