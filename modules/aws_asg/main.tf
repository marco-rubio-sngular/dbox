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


resource "aws_launch_template" "launch_template_this" {
  name                   = "LTPL_${var.prefix_name}-${var.environment}_${var.project_name}"
  image_id               = var.image_id
  instance_type          = var.instance_type
  vpc_security_group_ids = var.security_groups_ids
  update_default_version = true
  user_data              = filebase64(var.user_data_filepath)

  block_device_mappings {
    device_name = "/dev/sdf"
    ebs {
      volume_size           = 20
      delete_on_termination = true
    }
  }

  lifecycle {
    create_before_destroy = true
  }

  monitoring {
    enabled = true
  }

  tags = {
    Name = "LTPL_${var.prefix_name}-${var.environment}_${var.project_name}"
  }

  tag_specifications {
    resource_type = "instance"
    tags = merge(var.common_tags, {
      Name = "LTPL_${var.prefix_name}-${var.environment}_${var.project_name}"
    })
  }
}
resource "aws_autoscaling_group" "autoscaling_group_this" {
  name                      = "ASG-${var.prefix_name}_${var.environment}_${var.project_name}"
  max_size                  = var.instance_max_size
  min_size                  = var.instance_min_size
  desired_capacity          = var.desired_size
  vpc_zone_identifier       = var.subnets_ids
  target_group_arns         = var.target_group_arns
  health_check_type         = "EC2"
  health_check_grace_period = 300

  launch_template {
    id      = aws_launch_template.launch_template_this.id
    version = "$Latest"
  }
}
