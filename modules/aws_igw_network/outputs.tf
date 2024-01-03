output "vpcs" {
  description = "VPC Outputs for network, ids"
  value       = aws_vpc.this[*].id
}

output "vpc_cdir_blocks" {
  description = "VPC Outputs for network, cidr_block"
  value       = aws_vpc.this[*].cidr_block
}

output "public_subnets" {
  description = "Public Subnets Outputs for network, cidr_block, and ids"
  value       = { for subnet in aws_subnet.public_subnets : subnet.tags.Name => { "cidr_block" : subnet.cidr_block, "id" : subnet.id } }
}

output "private_subnets" {
  description = "Private Subnets Outputs for network, cidr_block, and ids"
  value       = { for subnet in aws_subnet.private_subnets : subnet.tags.Name => { "cidr_block" : subnet.cidr_block, "id" : subnet.id } }
}

output "igw_arn" {
  description = "Internet Gateway ARN"
  value       = aws_internet_gateway.this.arn
}

output "igw_id" {
  description = "Internet Gateway ID"
  value       = aws_internet_gateway.this.id
}

output "nat_eip" {
  description = "NAT Elastic IP"
  value       = aws_eip.nat_eip.public_ip
}
