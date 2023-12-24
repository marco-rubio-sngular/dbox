output "sngular_mod_aws_event_bridge_rule_lambda_output_arn" {
  value = aws_cloudwatch_event_rule.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule[*].arn
}

output "sngular_mod_aws_event_bridge_rule_lambda_output_count" {
  value = var.module_resource_count
}

output "sngular_mod_aws_event_bridge_rule_lambda_output_prefix" {
  value = var.module_resource_prefix
}
