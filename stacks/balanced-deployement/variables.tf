
variable "PROJECT" {
  type        = string
  default     = "Backend-Balancer"
  description = "Project name"
}

variable "COMMON_TAGS" {
  type        = map(string)
  description = "common tags for all resources"
}

variable "AWS_AMI_GREEN" {
  type        = string
  description = "AMI ID used-backend in green"
}

variable "AWS_AMI_BLUE" {
  type        = string
  description = "AMI ID used-backend in blue"
}

variable "INSTANCE_TYPE" {
  type        = string
  description = "Instance type used for autoscaling group"
}

variable "ENVIRONMENT" {
  type        = string
  description = "Environment to use. If not specified the default value is test."
}

variable "TRAFFIC_DISTRIBUTION" {
  description = "Levels of traffic distribution, must be one of the following: blue-90 split-50 blue green"
  type        = string
}

variable "TRAFFIC_DISTRIBUTION_MAP" {
  type        = any
  description = "all posibilities for traffic weight distribution - SEE DEFAULT VALUES"
}

variable "MAIN_CIDR_BLOCK" {
  description = "Main IP range of the VPC"
  type        = string
}

variable "VPC_ENABLE_DNS_SUPPORT" {
  description = "Enable / Disable DNS support"
  type        = bool
}
variable "VPC_ENABLE_DNS_HOSTNAMES" {
  description = "Whether or not the VPC has DNS hostname support"
  type        = bool
}

variable "PUBLIC_SUBNET_CIDR_BLOCKS" {
  type        = list(string)
  description = "Available cidr blocks for public subnets."
}

variable "CREATE_VPC" {
  description = "If set to true, enable creation vpc"
  type        = bool
}

variable "EXISTING_VPC_ID" {
  description = "If use a VPC use this variable to identify the ID"
  type        = string
}

variable "EXISTING_SUBNETS" {
  type        = list(string)
  description = "If use a VPC use this variable to identify the sunbet to use"
}
