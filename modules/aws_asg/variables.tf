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
variable "prefix_name" {
  type        = string
  description = "Prefix to use at name"
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

variable "security_groups_ids" {
  description = "Set of subnesecurity groups ids for our ASG aws_launch_template"
  type        = set(string)
}

variable "subnets_ids" {
  description = "Set of subnets ids for our ASG"
  type        = set(string)
}

variable "target_group_arns" {
  description = "Set of target groups arns for our ASG"
  type        = set(string)
}
