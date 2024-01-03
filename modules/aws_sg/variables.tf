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
variable "how_many" {
  description = "How many security groups to create"
  type        = number
  default     = 0
}

variable "port_mapping" {
  description = "Port mapping for the security group"
  type = set(object({
    ingress = set(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = set(string)
    })),
    egress = set(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = set(string)
    })),
  }))
}
