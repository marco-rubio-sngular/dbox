variable "sngular_mod_aws_cloudwatch_metric_alarm_name" {
  type        = string
  description = "name of cloudwatch metric alarm"
  default     = "Cluster_ECS_reportVerifiedByGS1_AUMENTA_UN_NODO"
  nullable    = false
}
variable "sngular_mod_aws_cloudwatch_metric_alarm_comparison_operator" {
  type        = string
  description = "name of cloudwatch metric alarm comparison operator"
  default     = "LessThanOrEqualToThreshold"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_evaluation_periods" {
  type        = number
  description = "period of evaluation of cloudwatch metric alarm"
  default     = 1
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_metric_name" {
  type        = string
  description = "metric name for cloudwatch metric alarm"
  default     = "SchedulableContainersReports"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_metric_description" {
  type        = string
  description = "metric alarm description"
  default     = "# Escalado en el clúster ECS de Pro de una nueva instancia del tipo Activate Reports, para solventar Alarma Cola-SQS-VerifiedByGS1-NO_PROCESA_EVENTOS"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_statistic" {
  type        = string
  description = "metric alarm statistic"
  default     = "Minimum"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_namespace" {
  type        = string
  description = "metric alarm namespace"
  default     = "AWS/EC2"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_treat_missing_data" {
  type        = string
  description = "metric alarm treat missing data"
  default     = "notBreaching"
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_period" {
  type        = number
  description = "metric alarm period at seconds"
  default     = 60
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_threshold" {
  type        = number
  description = "metric alarm threshold at units"
  default     = 1
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_datapoints_to_alarm" {
  type        = number
  description = "metric alarm datapoints to alarm at units"
  default     = 1
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_metric_actions" {
  type        = set(string)
  description = "metric alarm actions"
  default     = []
  nullable    = false
}

variable "sngular_mod_aws_cloudwatch_metric_alarm_insufficient_data_actions" {
  type        = set(string)
  description = "metric alarm insufficient data actions"
  default = [
    "arn:aws:autoscaling:eu-west-1:064549445408:scalingPolicy:e4af2ceb-c220-4c88-b1eb-036195d8d8c4:autoScalingGroupName/asg-reports-sngular-escan-prod:policyName/ecs_reports_scale_in_pro",
    "arn:aws:sns:eu-west-1:064549445408:SNGULAR_WP-PRO_CPU-Alert"
  ]
  nullable = false
}

variable "module_resource_count" {
  type        = number
  description = "how many resources... prefix names with module_resource_prefix"
}

variable "module_resource_prefix" {
  type        = string
  description = "resources prefix"
}
