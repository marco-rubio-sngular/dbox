// test/aws_ec2_test.go

package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/aws"
	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func TestAwsInstanceModule(t *testing.T) {
    awsRegion := "eu-west-1"
    terraformOptions := &terraform.Options{
        TerraformDir: "../examples/",
        Vars: map[string]interface{}{
            "aws_region": awsRegion,
        },
    }

    defer terraform.Destroy(t, terraformOptions)

    terraform.InitAndApply(t, terraformOptions)

    instanceID := terraform.Output(t, terraformOptions, "instance_id")
    instance := aws.GetInstanceDetails(t, awsRegion, instanceID)

    assert.Equal(t, "t2.micro", instance.InstanceType)
}