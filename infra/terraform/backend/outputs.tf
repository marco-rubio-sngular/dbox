# output "local_environment_data" {
#   value = local.environment_data
# }

output "aws_s3_bucket_backend" {
  value = aws_s3_bucket.aws_s3_bucket_backend.bucket
}

output "aws_dynamodb_table_backend" {
  value = aws_dynamodb_table.aws_dynamodb_table_backend.name
}
