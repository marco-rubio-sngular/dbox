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
| [aws_autoscaling_group.this](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/autoscaling_group) | resource |
| [aws_launch_template.this](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/launch_template) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_profile"></a> [aws\_profile](#input\_aws\_profile) | AWS profile to use | `string` | n/a | yes |
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | AWS region to use | `string` | n/a | yes |
| <a name="input_common_tags"></a> [common\_tags](#input\_common\_tags) | Common tags for all resources | <pre>object({<br>    Project   = string<br>    CreatedBy = string<br>  })</pre> | n/a | yes |
| <a name="input_company_name"></a> [company\_name](#input\_company\_name) | Company short name | `string` | n/a | yes |
| <a name="input_desired_size"></a> [desired\_size](#input\_desired\_size) | Number of desired instances in asg | `number` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Environment where the project is going to be deployede deployed | `string` | n/a | yes |
| <a name="input_image_id"></a> [image\_id](#input\_image\_id) | Image id for aws launch template | `string` | n/a | yes |
| <a name="input_instance_max_size"></a> [instance\_max\_size](#input\_instance\_max\_size) | Number maximum of instances(ASG) | `number` | n/a | yes |
| <a name="input_instance_min_size"></a> [instance\_min\_size](#input\_instance\_min\_size) | Number of minimum instances in asg | `number` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 Instance Type | `string` | n/a | yes |
| <a name="input_project_name"></a> [project\_name](#input\_project\_name) | Project name | `string` | n/a | yes |
| <a name="input_security_groups_ids"></a> [security\_groups\_ids](#input\_security\_groups\_ids) | Set of subnesecurity groups ids for our ASG aws\_launch\_template | `set(string)` | n/a | yes |
| <a name="input_subnets_ids"></a> [subnets\_ids](#input\_subnets\_ids) | Set of subnets ids for our ASG | `set(string)` | n/a | yes |
| <a name="input_target_group_arns"></a> [target\_group\_arns](#input\_target\_group\_arns) | Set of target groups arns for our ASG | `set(string)` | n/a | yes |
| <a name="input_user_data_filepath"></a> [user\_data\_filepath](#input\_user\_data\_filepath) | where is the user\_data file path | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_autoscaling_group_arn"></a> [autoscaling\_group\_arn](#output\_autoscaling\_group\_arn) | n/a |
| <a name="output_autoscaling_group_id"></a> [autoscaling\_group\_id](#output\_autoscaling\_group\_id) | n/a |
| <a name="output_launch_template_arn"></a> [launch\_template\_arn](#output\_launch\_template\_arn) | n/a |
| <a name="output_launch_template_id"></a> [launch\_template\_id](#output\_launch\_template\_id) | n/a |
<!-- END_TF_DOCS -->