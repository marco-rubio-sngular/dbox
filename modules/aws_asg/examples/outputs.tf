output "autoscaling_group_arn" {
  value = module.aws_asg.autoscaling_group_arn
}

output "autoscaling_group_id" {
  value = module.aws_asg.autoscaling_group_id
}

output "launch_template_arn" {
  value = module.aws_asg.launch_template_arn
}

output "launch_template_id" {
  value = module.aws_asg.launch_template_id
}
