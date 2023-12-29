terraform {
  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

module "random_key" {
  source = "../../random_key/"
  length = 20
}