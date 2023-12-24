resource "aws_cloudwatch_event_rule" "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule" {
  count       = var.module_resource_count
  name        = "${var.module_resource_prefix}_aws_cloudwatch_event_rule_${count.index}"
  description = var.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule_description
  event_pattern = jsonencode(
    {
      source : ["aws.cloudwatch"],
      detail-type : ["CloudWatch Alarm Changed ${count.index}"],
      resources : var.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule_event_pattern_resources
    }
  )
  tags = local.tags
}

resource "aws_cloudwatch_event_target" "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_target" {
  count = var.module_resource_count
  rule  = aws_cloudwatch_event_rule.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule[count.index].name
  arn   = var.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_target_rule_arn
}

resource "aws_lambda_permission" "sngular_mod_aws_event_bridge_rule_lambda_lambda_permission" {
  count         = var.module_resource_count
  statement_id  = var.sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_statement_id
  action        = var.sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_action
  function_name = var.sngular_mod_aws_event_bridge_rule_lambda_lambda_function_name
  principal     = var.sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_principal
  source_arn    = aws_cloudwatch_event_rule.sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule[count.index].arn
}
