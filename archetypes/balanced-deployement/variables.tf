#:{'..'}>----------------------------------------------
#:{'..'}> basic required variables
#:{'..'}>----------------------------------------------
variable "aws_profile" {
  description = "AWS profile to use"
  type        = string
}

variable "aws_region" {
  description = "AWS region to use"
  type        = string
}

variable "project_name" {
  description = "Project name"
  type        = string
  validation {
    condition     = can(regex("^[a-zA-Z][a-zA-Z0-9]{2,9}$", var.project_name))
    error_message = "The project name must start with a letter, only contain letters and numbers, and be between 3 and 10 characters."
  }
  validation {
    condition     = length(var.project_name) >= 3 && length(var.project_name) <= 10
    error_message = "The project name must be between 3 and 10 characters."
  }
}

variable "company_name" {
  description = "Company short name"
  type        = string
  validation {
    condition     = can(regex("^[a-zA-Z][a-zA-Z0-9]{2,9}$", var.company_name))
    error_message = "The company name must start with a letter, only contain letters and numbers, and be between 3 and 10 characters."
  }
  validation {
    condition     = length(var.company_name) >= 3 && length(var.company_name) <= 10
    error_message = "The company name must be between 3 and 10 characters."
  }
}

variable "environment" {
  description = "Environment where the project is going to be deployede deployed"
  type        = string
  validation {
    condition     = can(regex("^(test|pro)$", var.environment))
    error_message = "The environment must be test or pro"
  }
}

variable "common_tags" {
  description = "Common tags for all resources"
  type = object({
    Project   = string
    CreatedBy = string
  })
}
#:{'..'}>----------------------------------------------


#:{'..'}>----------------------------------------------
#:{'..'}> other variables and settings
#:{'..'}>----------------------------------------------
variable "traffic_distribution_map" {
  type = object({
    blue = object({
      blue  = number
      green = number
    })
    blue-90 = object({
      blue  = number
      green = number
    })
    split = object({
      blue  = number
      green = number
    })
    green-90 = object({
      blue  = number
      green = number
    })
    green = object({
      blue  = number
      green = number
    })
  })

  description = "Traffic Balanced - blue - green - green-90 split blue-90"
}

variable "traffic_distribution" {
  type        = string
  description = "Traffic Balanced - blue - green - green-90 split blue-90"
}

variable "public_subnet_cidr_blocks" {
  type        = set(string)
  description = "Public subnets CIDR Block"
}

variable "private_subnet_cidr_blocks" {
  type        = set(string)
  description = "Private subnets CIDR Block"
}

variable "azs" {
  type        = set(string)
  description = "Availables zones"
}

variable "main_cidr_block" {
  type        = string
  description = "Main CIDR Block for VPC"
}

variable "vpc_enable_dns_support" {
  description = "Enable dns support"
  type        = bool
}

variable "vpc_enable_dns_hostnames" {
  description = "Enable dns support"
  type        = bool
}

variable "aws_ami_green" {
  description = "Green AMI"
  type        = string
}

variable "aws_ami_blue" {
  description = "Green AMI"
  type        = string
}

variable "key" {
  type        = string
  description = "key for bucket - state storage"
}

variable "bucket" {
  type        = string
  description = "Unique id for bucket - state storage"
}

variable "dynamodb_table" {
  description = "Name of database for bucket store"
  type        = string
}

variable "encrypt" {
  description = "Encrypt state or not"
  type        = bool
}

variable "region" {
  description = "Bucket state rergion"
  type        = string
}

variable "profile" {
  description = "Bucket state profile"
  type        = string
}

variable "user_data_filepath" {
  type        = string
  description = "where is the user_data file path"
}

variable "image_id" {
  description = "Image id for aws launch template"
  type        = string
}

variable "desired_size" {
  description = "Number of desired instances in asg"
  type        = number
}

variable "instance_min_size" {
  description = "Number of minimum instances in asg"
  type        = number
}

variable "instance_max_size" {
  description = "Number maximum of instances(ASG)"
  type        = number
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
}
