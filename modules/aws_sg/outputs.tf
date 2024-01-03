output "aws_group_ids" {
  value       = aws_security_group.this.*.id
  description = "value of the security group ids"
}
