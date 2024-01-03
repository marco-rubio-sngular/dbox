<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | 1.6.2 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.24.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.24.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_lb.this](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/lb) | resource |
| [aws_lb_listener.this](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/lb_listener) | resource |
| [aws_lb_target_group.blue](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/lb_target_group) | resource |
| [aws_lb_target_group.green](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/lb_target_group) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_profile"></a> [aws\_profile](#input\_aws\_profile) | AWS profile to use | `string` | n/a | yes |
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | AWS region to use | `string` | n/a | yes |
| <a name="input_common_tags"></a> [common\_tags](#input\_common\_tags) | Common tags for all resources | <pre>object({<br>    Project   = string<br>    CreatedBy = string<br>  })</pre> | n/a | yes |
| <a name="input_company_name"></a> [company\_name](#input\_company\_name) | Company short name | `string` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment where the project is going to be deployede deployed | `string` | n/a | yes |
| <a name="input_project_name"></a> [project\_name](#input\_project\_name) | Project name | `string` | n/a | yes |
| <a name="input_security_groups_ids"></a> [security\_groups\_ids](#input\_security\_groups\_ids) | Set of subnesecurity groups ids for our ASG aws\_launch\_template | `set(string)` | n/a | yes |
| <a name="input_subnets_ids"></a> [subnets\_ids](#input\_subnets\_ids) | Set of subnets ids for our ASG | `set(string)` | n/a | yes |
| <a name="input_traffic_dist_map"></a> [traffic\_dist\_map](#input\_traffic\_dist\_map) | all posibilities for traffic weight distribution - SEE DEFAULT VALUES | `any` | <pre>{<br>  "blue": {<br>    "blue": 100,<br>    "green": 0<br>  },<br>  "blue-90": {<br>    "blue": 90,<br>    "green": 10<br>  },<br>  "green": {<br>    "blue": 0,<br>    "green": 100<br>  },<br>  "green-90": {<br>    "blue": 10,<br>    "green": 90<br>  },<br>  "split": {<br>    "blue": 50,<br>    "green": 50<br>  }<br>}</pre> | no |
| <a name="input_traffic_distribution"></a> [traffic\_distribution](#input\_traffic\_distribution) | Levels of traffic distribution, must be one of the following: blue-90 split-50 blue green | `string` | n/a | yes |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | vpc id of target network | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_aws_lb_dns_name"></a> [aws\_lb\_dns\_name](#output\_aws\_lb\_dns\_name) | n/a |
| <a name="output_aws_lb_listener_arn"></a> [aws\_lb\_listener\_arn](#output\_aws\_lb\_listener\_arn) | n/a |
| <a name="output_aws_lb_target_group_blue_arn"></a> [aws\_lb\_target\_group\_blue\_arn](#output\_aws\_lb\_target\_group\_blue\_arn) | n/a |
| <a name="output_aws_lb_target_group_blue_id"></a> [aws\_lb\_target\_group\_blue\_id](#output\_aws\_lb\_target\_group\_blue\_id) | n/a |
| <a name="output_aws_lb_target_group_green_arn"></a> [aws\_lb\_target\_group\_green\_arn](#output\_aws\_lb\_target\_group\_green\_arn) | n/a |
| <a name="output_aws_lb_target_group_green_id"></a> [aws\_lb\_target\_group\_green\_id](#output\_aws\_lb\_target\_group\_green\_id) | n/a |
| <a name="output_lb_arn"></a> [lb\_arn](#output\_lb\_arn) | n/a |
| <a name="output_lb_id"></a> [lb\_id](#output\_lb\_id) | n/a |
<!-- END_TF_DOCS -->