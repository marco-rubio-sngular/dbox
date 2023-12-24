terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
  }
}

provider "aws" {
  region  = local.environment_data.AWS_REGION
  profile = local.environment_data.AWS_PROFILE
}

locals {
  environment_data   = { for tuple in regexall("(.*)=(.*)", file("./.env")) : tuple[0] => tuple[1] }
  configuration_data = yamldecode(file("${path.module}/manifest.yaml"))
}

module "sngular_mod_aws_cloudwatch_metric_alarm" {
  source                 = "../module/"
  module_resource_count  = local.configuration_data.module_resource_count
  module_resource_prefix = local.configuration_data.module_resource_prefix
}

output "sngular_mod_aws_cloudwatch_metric_alarm_configuration_data_output" {
  value = local.configuration_data
}

output "sngular_mod_aws_cloudwatch_metric_alarm_environment_data_output" {
  value = local.environment_data
}
