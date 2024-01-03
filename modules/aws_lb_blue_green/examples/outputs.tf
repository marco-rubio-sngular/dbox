output "lb_arn" {
  value = module.aws_lb_blue_green.lb_arn
}

output "lb_id" {
  value = module.aws_lb_blue_green.lb_id
}

output "aws_lb_listener_arn" {
  value = module.aws_lb_blue_green.aws_lb_listener_arn
}

output "aws_lb_dns_name" {
  value = module.aws_lb_blue_green.aws_lb_dns_name
}

output "aws_lb_target_group_blue_arn" {
  value = module.aws_lb_blue_green.aws_lb_target_group_blue_arn
}

output "aws_lb_target_group_blue_id" {
  value = module.aws_lb_blue_green.aws_lb_target_group_blue_id
}

output "aws_lb_target_group_green_arn" {
  value = module.aws_lb_blue_green.aws_lb_target_group_green_arn
}

output "aws_lb_target_group_green_id" {
  value = module.aws_lb_blue_green.aws_lb_target_group_green_id
}
