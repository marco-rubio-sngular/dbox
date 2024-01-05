terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
  }
}

provider "aws" {
  profile = var.aws_profile
  region  = var.aws_region

  default_tags {
    tags = merge(var.common_tags, { "Environment" = var.environment })
  }
}

resource "aws_vpc" "this" {
  cidr_block           = var.vpc_cidr_block
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "VPC-Network-${var.environment}-${var.project_name}"
  }
}

resource "aws_subnet" "public_subnets" {
  count                   = length(var.public_subnet_cidrs)
  vpc_id                  = aws_vpc.this.id
  cidr_block              = element(var.public_subnet_cidrs, count.index)
  availability_zone       = element(var.azs, count.index)
  map_public_ip_on_launch = true

  tags = {
    Name = "Public-Subnet ${count.index + 1}-${var.environment}-${var.project_name}"
  }
}

resource "aws_subnet" "private_subnets" {
  count                   = length(var.private_subnet_cidrs)
  vpc_id                  = aws_vpc.this.id
  cidr_block              = element(var.private_subnet_cidrs, count.index)
  availability_zone       = element(var.azs, count.index)
  map_public_ip_on_launch = false

  tags = {
    Name = "Private-Subnet ${count.index + 1}-${var.environment}-${var.project_name}"
  }
}

#:{'..'}>--------------------------------------------------------------------
#:{'..'}> internet access - internet gateway
#:{'..'}>--------------------------------------------------------------------
resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id

  tags = {
    Name = "Internet-Gateway-${var.environment}-${var.project_name}"
  }
}
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.this.id

  tags = {
    Name = "Public-Route-Table-${var.environment}-${var.project_name}"
  }
}
resource "aws_route" "public_route" {
  route_table_id         = aws_route_table.public_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.this.id
}
resource "aws_route_table_association" "public_route_association" {
  count          = 3
  subnet_id      = element(aws_subnet.public_subnets.*.id, count.index)
  route_table_id = aws_route_table.public_route_table.id
}


#:{'..'}>--------------------------------------------------------------------
#:{'..'}> private network resources, nat route for public outbound
#:{'..'}>--------------------------------------------------------------------
resource "aws_eip" "nat_eip" {
  depends_on = [aws_internet_gateway.this]
}
resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = element(aws_subnet.public_subnets.*.id, 0)

  tags = {
    Name = "Nat-Gateway-${var.environment}-${var.project_name}"
  }
}
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.this.id
  tags = {
    Name = "Private-Route-Table-${var.environment}-${var.project_name}"
  }
}
resource "aws_route" "private_internet_gateway" {
  route_table_id         = aws_route_table.private.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_nat_gateway.nat.id
}
