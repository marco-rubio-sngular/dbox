variable "sngular_mod_aws_event_bridge_rule_lambda_lambda_function_name" {
  type        = string
  description = "lambda funciona name to execute"
  default     = "escan-restart-ecs-service-activate-reports"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule_name" {
  type        = string
  description = "cloudwatch event target rule name"
  default     = "Escan-SQS-no-procesa-restart-ecs-service-activate-reports"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule_description" {
  type        = string
  description = "cloudwatch event target rule description"
  default     = "Si no se procesan mensages en SQS-Activate-GS1 y ha saltado alarma se tiene que reiniciar el servicio ECS de Activate reports."
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_target_rule_arn" {
  type        = string
  description = "cloudwatch event target rule arn"
  default     = "arn:aws:lambda:eu-west-1:064549445408:function:escan-restart-ecs-service-activate-reports"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_cloudwatch_event_rule_event_pattern_resources" {
  type        = set(string)
  description = "cloudwatch event target rule event pattern resources into json"
  default     = ["arn:aws:cloudwatch:eu-west-1:064549445408:alarm:Cola-SQS-VerifiedByGS1-NO_PROCESA_EVENTOS"]
  nullable    = false
}

variable "sngular_mod_aws_lambda_permission_statement_id" {
  type        = string
  description = "cloudwatch event target rule arn"
  default     = "arn:aws:lambda:eu-west-1:064549445408:function:escan-restart-ecs-service-activate-reports"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_statement_id" {
  type        = string
  description = "lambda permission statement id"
  default     = "AllowExecutionFromCloudWatch"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_action" {
  type        = string
  description = "lambda permission action"
  default     = "lambda:InvokeFunction"
  nullable    = false
}

variable "sngular_mod_aws_event_bridge_rule_lambda_lambda_permission_principal" {
  type        = string
  description = "lambda permission principal"
  default     = "events.amazonaws.com"
  nullable    = false
}

variable "module_resource_count" {
  type        = number
  description = "how many resources... prefix names with module_resource_prefix"
}

variable "module_resource_prefix" {
  type        = string
  description = "resources prefix"
}

locals {
  tags = {
    Project = "ESCANQR"
    env     = "pro"
  }
}
