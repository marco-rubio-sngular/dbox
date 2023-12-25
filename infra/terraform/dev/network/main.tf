resource "aws_instance" "web" {
  ami           = "ami-02cad064a29d4550c"
  instance_type = "t3.micro"

  tags = {
    Environment = "dev"
    Name        = "HelloWorld"
  }
}

output "web_public_ip" {
  value = aws_instance.web.public_ip
}
