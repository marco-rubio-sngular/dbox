output "autoscaling_group_arn" {
  value = aws_autoscaling_group.this.arn
}

output "autoscaling_group_id" {
  value = aws_autoscaling_group.this.id
}

output "launch_template_arn" {
  value = aws_launch_template.this.arn
}

output "launch_template_id" {
  value = aws_launch_template.this.id
}
