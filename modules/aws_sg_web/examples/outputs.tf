output "aws_group_id" {
  value       = module.aws_sg_web.aws_group_id
  description = "value of the security group id"
}
