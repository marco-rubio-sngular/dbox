// test/random_key_test.go

package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func TestRandomKeyModule(t *testing.T) {
    terraformOptions := &terraform.Options{
        TerraformDir: "../examples/",
    }

    defer terraform.InitAndApply(t, terraformOptions)

    randomKey := terraform.Output(t, terraformOptions, "random_key")

    assert.Equal(t, 20, len(randomKey))
}