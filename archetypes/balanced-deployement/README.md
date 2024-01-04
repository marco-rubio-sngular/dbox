<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | 1.6.2 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.24.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_aws_asg"></a> [aws\_asg](#module\_aws\_asg) | ../../modules/aws_asg | n/a |
| <a name="module_aws_igw_network"></a> [aws\_igw\_network](#module\_aws\_igw\_network) | ../../modules/aws_igw_network | n/a |
| <a name="module_aws_lb_blue_green"></a> [aws\_lb\_blue\_green](#module\_aws\_lb\_blue\_green) | ../../modules/aws_lb_blue_green | n/a |
| <a name="module_aws_sg_web"></a> [aws\_sg\_web](#module\_aws\_sg\_web) | ../../modules/aws_sg_web | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_ami_blue"></a> [aws\_ami\_blue](#input\_aws\_ami\_blue) | Green AMI | `string` | n/a | yes |
| <a name="input_aws_ami_green"></a> [aws\_ami\_green](#input\_aws\_ami\_green) | Green AMI | `string` | n/a | yes |
| <a name="input_aws_profile"></a> [aws\_profile](#input\_aws\_profile) | AWS profile to use | `string` | n/a | yes |
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | AWS region to use | `string` | n/a | yes |
| <a name="input_azs"></a> [azs](#input\_azs) | Availables zones | `set(string)` | n/a | yes |
| <a name="input_bucket"></a> [bucket](#input\_bucket) | Unique id for bucket - state storage | `string` | n/a | yes |
| <a name="input_common_tags"></a> [common\_tags](#input\_common\_tags) | Common tags for all resources | <pre>object({<br>    Project   = string<br>    CreatedBy = string<br>  })</pre> | n/a | yes |
| <a name="input_company_name"></a> [company\_name](#input\_company\_name) | Company short name | `string` | n/a | yes |
| <a name="input_desired_size"></a> [desired\_size](#input\_desired\_size) | Number of desired instances in asg | `number` | n/a | yes |
| <a name="input_dynamodb_table"></a> [dynamodb\_table](#input\_dynamodb\_table) | Name of database for bucket store | `string` | n/a | yes |
| <a name="input_encrypt"></a> [encrypt](#input\_encrypt) | Encrypt state or not | `bool` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment where the project is going to be deployede deployed | `string` | n/a | yes |
| <a name="input_image_id"></a> [image\_id](#input\_image\_id) | Image id for aws launch template | `string` | n/a | yes |
| <a name="input_instance_max_size"></a> [instance\_max\_size](#input\_instance\_max\_size) | Number maximum of instances(ASG) | `number` | n/a | yes |
| <a name="input_instance_min_size"></a> [instance\_min\_size](#input\_instance\_min\_size) | Number of minimum instances in asg | `number` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 Instance Type | `string` | n/a | yes |
| <a name="input_key"></a> [key](#input\_key) | key for bucket - state storage | `string` | n/a | yes |
| <a name="input_main_cidr_block"></a> [main\_cidr\_block](#input\_main\_cidr\_block) | Main CIDR Block for VPC | `string` | n/a | yes |
| <a name="input_private_subnet_cidr_blocks"></a> [private\_subnet\_cidr\_blocks](#input\_private\_subnet\_cidr\_blocks) | Private subnets CIDR Block | `set(string)` | n/a | yes |
| <a name="input_profile"></a> [profile](#input\_profile) | Bucket state profile | `string` | n/a | yes |
| <a name="input_project_name"></a> [project\_name](#input\_project\_name) | Project name | `string` | n/a | yes |
| <a name="input_public_subnet_cidr_blocks"></a> [public\_subnet\_cidr\_blocks](#input\_public\_subnet\_cidr\_blocks) | Public subnets CIDR Block | `set(string)` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | Bucket state rergion | `string` | n/a | yes |
| <a name="input_traffic_distribution"></a> [traffic\_distribution](#input\_traffic\_distribution) | Traffic Balanced - blue - green - green-90 split blue-90 | `string` | n/a | yes |
| <a name="input_traffic_distribution_map"></a> [traffic\_distribution\_map](#input\_traffic\_distribution\_map) | Traffic Balanced - blue - green - green-90 split blue-90 | <pre>object({<br>    blue = object({<br>      blue  = number<br>      green = number<br>    })<br>    blue-90 = object({<br>      blue  = number<br>      green = number<br>    })<br>    split = object({<br>      blue  = number<br>      green = number<br>    })<br>    green-90 = object({<br>      blue  = number<br>      green = number<br>    })<br>    green = object({<br>      blue  = number<br>      green = number<br>    })<br>  })</pre> | n/a | yes |
| <a name="input_user_data_filepath"></a> [user\_data\_filepath](#input\_user\_data\_filepath) | where is the user\_data file path | `string` | n/a | yes |
| <a name="input_vpc_enable_dns_hostnames"></a> [vpc\_enable\_dns\_hostnames](#input\_vpc\_enable\_dns\_hostnames) | Enable dns support | `bool` | n/a | yes |
| <a name="input_vpc_enable_dns_support"></a> [vpc\_enable\_dns\_support](#input\_vpc\_enable\_dns\_support) | Enable dns support | `bool` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_ami_blue"></a> [ami\_blue](#output\_ami\_blue) | :{.".}> ------------------------------------------------------------------------------ |
| <a name="output_ami_green"></a> [ami\_green](#output\_ami\_green) | n/a |
| <a name="output_autoscaling_group_arn"></a> [autoscaling\_group\_arn](#output\_autoscaling\_group\_arn) | :{.".}> ------------------------------------------------------------------------------ |
| <a name="output_autoscaling_group_id"></a> [autoscaling\_group\_id](#output\_autoscaling\_group\_id) | n/a |
| <a name="output_aws_group_id"></a> [aws\_group\_id](#output\_aws\_group\_id) | :{.".}> ------------------------------------------------------------------------------ |
| <a name="output_aws_lb_dns_name"></a> [aws\_lb\_dns\_name](#output\_aws\_lb\_dns\_name) | n/a |
| <a name="output_aws_lb_listener_arn"></a> [aws\_lb\_listener\_arn](#output\_aws\_lb\_listener\_arn) | n/a |
| <a name="output_aws_lb_target_group_blue_arn"></a> [aws\_lb\_target\_group\_blue\_arn](#output\_aws\_lb\_target\_group\_blue\_arn) | n/a |
| <a name="output_aws_lb_target_group_blue_id"></a> [aws\_lb\_target\_group\_blue\_id](#output\_aws\_lb\_target\_group\_blue\_id) | n/a |
| <a name="output_aws_lb_target_group_green_arn"></a> [aws\_lb\_target\_group\_green\_arn](#output\_aws\_lb\_target\_group\_green\_arn) | n/a |
| <a name="output_aws_lb_target_group_green_id"></a> [aws\_lb\_target\_group\_green\_id](#output\_aws\_lb\_target\_group\_green\_id) | n/a |
| <a name="output_igw_arn"></a> [igw\_arn](#output\_igw\_arn) | Internet Gateway ARN |
| <a name="output_igw_id"></a> [igw\_id](#output\_igw\_id) | Internet Gateway ID |
| <a name="output_launch_template_arn"></a> [launch\_template\_arn](#output\_launch\_template\_arn) | n/a |
| <a name="output_launch_template_id"></a> [launch\_template\_id](#output\_launch\_template\_id) | n/a |
| <a name="output_lb_arn"></a> [lb\_arn](#output\_lb\_arn) | :{.".}> ------------------------------------------------------------------------------ |
| <a name="output_lb_id"></a> [lb\_id](#output\_lb\_id) | n/a |
| <a name="output_nat_eip"></a> [nat\_eip](#output\_nat\_eip) | NAT Elastic IP |
| <a name="output_private_subnets"></a> [private\_subnets](#output\_private\_subnets) | Private Subnets Outputs for network, cidr\_block, and ids |
| <a name="output_public_subnets"></a> [public\_subnets](#output\_public\_subnets) | Public Subnets Outputs for network, cidr\_block, and ids |
| <a name="output_vpc_cdir_blocks"></a> [vpc\_cdir\_blocks](#output\_vpc\_cdir\_blocks) | VPC Outputs for network, cidr\_block |
| <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id) | VPC Outputs for network, ids |
<!-- END_TF_DOCS -->