
#:{.".}> ------------------------------------------------------------------------------
output "ami_blue" {
  value = var.aws_ami_blue
}
output "ami_green" {
  value = var.aws_ami_green
}
output "vpc_id" {
  description = "VPC Outputs for network, ids"
  value       = module.aws_igw_network.vpc_id
}

output "vpc_cdir_blocks" {
  description = "VPC Outputs for network, cidr_block"
  value       = module.aws_igw_network.vpc_cdir_blocks
}

output "public_subnets" {
  description = "Public Subnets Outputs for network, cidr_block, and ids"
  value       = { for subnet in module.aws_igw_network.public_subnets : subnet.id => { "cidr_block" : subnet.cidr_block, "id" : subnet.id, "tags" : subnet.tags } }
}

output "private_subnets" {
  description = "Private Subnets Outputs for network, cidr_block, and ids"
  value       = { for subnet in module.aws_igw_network.private_subnets : subnet.id => { "cidr_block" : subnet.cidr_block, "id" : subnet.id, "tags" : subnet.tags } }
}

output "igw_arn" {
  description = "Internet Gateway ARN"
  value       = module.aws_igw_network.igw_arn
}

output "igw_id" {
  description = "Internet Gateway ID"
  value       = module.aws_igw_network.igw_id
}

output "nat_eip" {
  description = "NAT Elastic IP"
  value       = module.aws_igw_network.nat_eip
}
#:{.".}> ------------------------------------------------------------------------------
output "aws_group_id" {
  value = module.aws_sg_web.aws_group_id
}
#:{.".}> ------------------------------------------------------------------------------
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
#:{.".}> ------------------------------------------------------------------------------
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
