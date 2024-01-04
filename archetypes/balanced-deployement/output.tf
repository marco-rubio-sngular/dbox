
#:{.".}> ------------------------------------------------------------------------------
output "ami_blue" {
  value = var.aws_ami_blue
}
output "ami_green" {
  value = var.aws_ami_green
}
output "vpc_id" {
  value = module.aws_igw_network.vpc_id
}

output "vpc_cdir_blocks" {
  value = module.aws_igw_network.vpc_cdir_blocks
}

output "public_subnets" {
  value = { for subnet in module.aws_igw_network.public_subnets : subnet.id => { "cidr_block" : subnet.cidr_block, "id" : subnet.id, "tags" : subnet.tags } }
}

output "private_subnets" {
  value = { for subnet in module.aws_igw_network.private_subnets : subnet.id => { "cidr_block" : subnet.cidr_block, "id" : subnet.id, "tags" : subnet.tags } }
}

output "private_subnets_ids" {
  value = module.aws_igw_network.private_subnets_ids
}

output "public_subnets_ids" {
  value = module.aws_igw_network.public_subnets_ids
}


output "igw_arn" {
  value = module.aws_igw_network.igw_arn
}

output "igw_id" {
  value = module.aws_igw_network.igw_id
}

output "nat_eip" {
  value = module.aws_igw_network.nat_eip
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
