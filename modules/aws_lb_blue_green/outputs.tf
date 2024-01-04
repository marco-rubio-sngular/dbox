output "lb_arn" {
  value = aws_lb.this.arn
}

output "lb_id" {
  value = aws_lb.this.id
}

output "aws_lb_listener_arn" {
  value = aws_lb_listener.this.arn
}

output "aws_lb_dns_name" {
  value = aws_lb.this.dns_name
}

output "aws_lb_target_group_blue_arn" {
  value = aws_lb_target_group.blue.arn
}

output "aws_lb_target_group_blue_id" {
  value = aws_lb_target_group.blue.id
}

output "aws_lb_target_group_green_arn" {
  value = aws_lb_target_group.green.arn
}

output "aws_lb_target_group_green_id" {
  value = aws_lb_target_group.green.id
}
