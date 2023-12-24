resource "aws_cloudwatch_metric_alarm" "sngular_mod_aws_cloudwatch_metric_alarm" {
  count                     = var.module_resource_count
  alarm_name                = "${var.module_resource_prefix}_${var.sngular_mod_aws_cloudwatch_metric_alarm_name}_${count.index}"
  comparison_operator       = var.sngular_mod_aws_cloudwatch_metric_alarm_comparison_operator
  evaluation_periods        = var.sngular_mod_aws_cloudwatch_metric_alarm_evaluation_periods
  metric_name               = var.sngular_mod_aws_cloudwatch_metric_alarm_metric_name
  namespace                 = var.sngular_mod_aws_cloudwatch_metric_alarm_namespace
  period                    = var.sngular_mod_aws_cloudwatch_metric_alarm_period
  statistic                 = var.sngular_mod_aws_cloudwatch_metric_alarm_statistic
  threshold                 = var.sngular_mod_aws_cloudwatch_metric_alarm_threshold
  datapoints_to_alarm       = var.sngular_mod_aws_cloudwatch_metric_alarm_datapoints_to_alarm
  treat_missing_data        = var.sngular_mod_aws_cloudwatch_metric_alarm_treat_missing_data
  alarm_description         = var.sngular_mod_aws_cloudwatch_metric_alarm_metric_description
  alarm_actions             = var.sngular_mod_aws_cloudwatch_metric_alarm_metric_actions
  insufficient_data_actions = var.sngular_mod_aws_cloudwatch_metric_alarm_insufficient_data_actions
}
