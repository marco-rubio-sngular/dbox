terraform {
  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}
resource "random_string" "key" {
  length  = var.length
  special = true
}

