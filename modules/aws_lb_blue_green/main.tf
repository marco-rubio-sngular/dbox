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

resource "aws_lb" "this" {
  name               = "Application-LoadBalancer-${var.environment}-${var.project_name}"
  internal           = false
  load_balancer_type = "application"
  subnets            = var.subnets_ids
  security_groups    = var.security_groups_ids

  tags = {
    Name = "Application-LoadBalancer-${var.environment}-${var.project_name}"
  }
}

resource "aws_lb_listener" "this" {
  load_balancer_arn = aws_lb.aws_lb.arn
  port              = "80"
  protocol          = "HTTP"


  default_action {
    type = "forward"
    forward {
      target_group {
        arn    = aws_lb_target_group.blue.arn
        weight = lookup(var.traffic_dist_map[var.traffic_distribution], "blue", 100)
      }

      target_group {
        arn    = aws_lb_target_group.green.arn
        weight = lookup(var.traffic_dist_map[var.traffic_distribution], "green", 0)
      }

      stickiness {
        enabled  = false
        duration = 1
      }
    }
  }
}

resource "aws_lb_target_group" "blue" {
  name     = "Target-Group-Blue-${var.environment}-${var.project_name}"
  port     = 80
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    port     = 80
    protocol = "HTTP"
    timeout  = 5
    interval = 10
  }

  tags = {
    Name = "Target-Group-Blue-${var.environment}-${var.project_name}"
  }
}

resource "aws_lb_target_group" "green" {
  name     = "Target-Group-Green-${var.environment}-${var.project_name}"
  port     = 80
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    port     = 80
    protocol = "HTTP"
    timeout  = 5
    interval = 10
  }

  tags = {
    Name = "Target-Group-Green-${var.environment}-${var.project_name}"
  }
}
