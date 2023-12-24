output "sngular_mod_aws_cloudwatch_metric_alarm_arn" {
  value = aws_cloudwatch_metric_alarm.sngular_mod_aws_cloudwatch_metric_alarm[*].arn
}

output "sngular_mod_aws_cloudwatch_metric_alarm_id" {
  value = aws_cloudwatch_metric_alarm.sngular_mod_aws_cloudwatch_metric_alarm[*].id
}

output "sngular_mod_aws_cloudwatch_metric_alarm_name" {
  value = aws_cloudwatch_metric_alarm.sngular_mod_aws_cloudwatch_metric_alarm[*].alarm_name
}
