variable "how_many_instances" {
  description = "How many instances of EC2 will be created"
  type        = number
  default     = 1
}

variable "ami" {
  description = "AMI to use for the EC2 instances"
  type        = string
  default     = "ami-0aef57767f5404a3c"
}

variable "instance_type" {
  description = "Type of the EC2 instance"
  type        = string
  default     = "t2.micro"
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

  default = "dbox"
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
  default = "sngular"
}

variable "environment" {
  description = "Environment where the project is going to be deployede deployed"
  type        = string
  validation {
    condition     = can(regex("^(test|pro)$", var.environment))
    error_message = "The environment must be test or pro"
  }
  default = "test"
}

variable "common_tags" {
  description = "Common tags for all resources"
  type = object({
    Project     = string
    Environment = string
    CreatedBy   = string
  })

  default = {
    Project     = "dbox"
    Environment = "test"
    CreatedBy   = "sngular"
  }
}
