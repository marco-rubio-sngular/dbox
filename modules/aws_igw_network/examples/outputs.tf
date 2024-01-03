output "vpc_cdir_blocks" {
  description = "VPC Outputs for network, cidr_block"
  value       = module.aws_basic_network.vpc_cdir_blocks
}

output "vpcs" {
  description = "VPC Outputs for network, cidr_block, and ids"
  value       = module.aws_basic_network.vpcs
}

output "public_subnets" {
  description = "Public Subnets Outputs for network, cidr_block, and ids"
  value       = module.aws_basic_network.public_subnets
}

output "private_subnets" {
  description = "Private Subnets Outputs for network, cidr_block, and ids"
  value       = module.aws_basic_network.private_subnets
}

output "nat_eip" {
  description = "NAT Elastic IP"
  value       = module.aws_basic_network.nat_eip
}
