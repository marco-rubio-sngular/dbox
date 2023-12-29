# Output the instance's public IP address.
output "public_ip" {
  value = module.aws_ec2.public_ip
}