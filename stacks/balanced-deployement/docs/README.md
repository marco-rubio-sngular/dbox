# BELIKE BLUE/GREEN DEPLOYMENT BASE PROJECT

## AUTOMATIZADO Y BASADO EN MANIFESTO JSON/YAML

**Índice**

1. [Intencion](#intencion)
2. [Uso de git y modelo de branch](#git)
3. [Primeros pasos](#primeros)

## CUAL ES LA INTENCION DE ESTE PROYECTO<a id="intencion"><a/>

Este proyecto es un repositorio de Infrastructure as Code (IaC) que pretende servir de base para
proyectos con formula de despliege blue/green con alb asg y su granja de ec2, todo en cloud aws
con terraform y gestionado con git flow branching

## USO DE GIT EN EL PROYECTO<a id="git"></a>

Ver documento: BRANCHING.md

1. creacion de features

```
   git checkout develop
   git pull
   git checkout -b feature/kickoff
   git branch --all

  develop
* feature/kickoff
  master
```

Una vez hecho el commit de la feature y el add pasamos a publicar nuestra feature y hacer el pull request, NO FUSIONAMOS EN DEVELOP DIRECTAMENTE

```
   git add docs
   git commit -m ' - docs de git'
   git push --set-upstream origin feature/kickoff
```

Esta feature ya estaria lista para mergear en develop, PERO NO LO HAREMOS
NOSOTROS sino que haremos un pull request que ademas veremos la url en la
salida de git.

Es importante mantener una politica de mergeo comun y que no haya nadie
que lo haga de otro modo, por lo tanto las features una vez pusheadas
ya no las tocamos, hacemos un pull request de nuestra rama a develop.

Por si en algun momento tuvieramos que hacer lo que seria fusionar nuestra
feature a mano sin PR (Pull Request) seria de este modo:

<span style="color:red;">
git checkout develop<br/>
git pull<br/>
git merge --no-ff feature/kickoff<br/>
git push<br/>
git branch -d feature/kickoff<br/><br/>
</span>

Una vez tengamos en develop todas las features que entran en la
nueva release, entonces la creamos y la publicamos con el nuevo
tag que sera realmente la nueva version

Por ultimo crearemos la release cuando todas las features que se requieran
se han fusionado con exito en develop

```

git checkout develop
git pull
git checkout -b release/0.0.1
git checkout main
git pull
git merge --no-ff release/0.0.1
git tag 0.0.1
git push
git push --tags

git checkout develop
git pull
git merge --no-ff release/0.0.1
git push

```

Una vez completado borraremos las releases y features que hayan
en remoto y en los clientes al empezar nueva feature haremos un

```

git fetch --all -p

```

con esto actualizaremos nuestra base de datos local y se borraran
esas ramas de feature y release que podamos tener y que ya sobran.

## PRIMEROS PASOS<a id="primeros"></a>

Lo primero que vamos a hacer en el proyecto sera copiar el fichero
template dot.env como .env

```

cp -a dot.env .env
nano .env

```

y ponemos los valores de AWS que sean del proyecto

```
AWS_ACCESS_KEY=xxxxx
AWS_SECRET_ACCESS_KEY=xxxxx
AWS_REGION=eu-west-1
ENVIRONMENT=dev

```

Lo segundo que vamos a hacer en el proyecto sera copiar el fichero
template dot.env.backend como .env.backend

```

cp -a dot.env.backend .env.backend
nano .env.backend

```

y ponemos los valores de AWS que sean del proyecto

&nbsp;

```
access_key          = "xxxxxxxxxxxxxxxx"
secret_key          = "xxxxxxxxxxxxxxxx"
region              = "eu-west-1"
bucket              = "backend-s3-bucket-id-terraform.state"
key                 = "balanced-deployment/terraform/states"
encrypt             = true
dynamodb_table      = "backend_dynamodb_table_terraform_lock"

```

&nbsp;

Ahora ya vamos a comenzar, primero instalando nuestro backend remoto,
para el cual no necesitamos que exista bucket alguno ni nada se creara
en este momento.

Este primer comando copia el .env a backend y si en algun momento hay un
backend-clean o backend-uninstall se borrara, mientras tanto, permanecera.

Asi pues.... **VAMOS A INSTALAR NUESTRO BACKEND**

&nbsp;

```
make backend-install
```

&nbsp;

Si todo va bien debemos ver una salida de este tipo

&nbsp;

```
Note: You didn't use the -out option to save this plan, so Terraform can't
guarantee to take exactly these actions if you run "terraform apply" now.

waiting 30 seconds.... CTRL + C to break install backend.....


Terraform used the selected providers to generate the following execution
plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # aws_dynamodb_table.aws_dynamodb_table_backend will be created
  + resource "aws_dynamodb_table" "aws_dynamodb_table_backend" {
      + arn              = (known after apply)
      + billing_mode     = "PROVISIONED"
      + hash_key         = "LockID"
      + id               = (known after apply)
      + name             = "backend_dynamodb_table_terraform_lock"
      + read_capacity    = 20
      + stream_arn       = (known after apply)
      + stream_label     = (known after apply)
      + stream_view_type = (known after apply)
      + tags             = {
          + "createdBy"   = "devops team sngular"
          + "environment" = "dev"
        }
      + tags_all         = {
          + "createdBy"   = "devops team sngular"
          + "environment" = "dev"
        }
      + write_capacity   = 20

      + attribute {
          + name = "LockID"
          + type = "S"
        }
    }

  # aws_s3_bucket.aws_s3_bucket_backend will be created
  + resource "aws_s3_bucket" "aws_s3_bucket_backend" {
      + acceleration_status         = (known after apply)
      + acl                         = (known after apply)
      + arn                         = (known after apply)
      + bucket                      = "backend-s3-bucket-id-terraform.state"
      + bucket_domain_name          = (known after apply)
      + bucket_prefix               = (known after apply)
      + bucket_regional_domain_name = (known after apply)
      + force_destroy               = true
      + hosted_zone_id              = (known after apply)
      + id                          = (known after apply)
      + object_lock_enabled         = (known after apply)
      + policy                      = (known after apply)
      + region                      = (known after apply)
      + request_payer               = (known after apply)
      + tags                        = {
          + "createdBy"   = "devops team sngular"
          + "environment" = "dev"
        }
      + tags_all                    = {
          + "createdBy"   = "devops team sngular"
          + "environment" = "dev"
        }
      + website_domain              = (known after apply)
      + website_endpoint            = (known after apply)
    }

  # aws_s3_bucket_server_side_encryption_configuration.aws_s3_bucket_server_side_encryption_configuration_backend will be created
  + resource "aws_s3_bucket_server_side_encryption_configuration" "aws_s3_bucket_server_side_encryption_configuration_backend" {
      + bucket = "backend-s3-bucket-id-terraform.state"
      + id     = (known after apply)

      + rule {
          + apply_server_side_encryption_by_default {
              + sse_algorithm = "AES256"
            }
        }
    }

  # aws_s3_bucket_versioning.aws_s3_bucket_versioning_backend will be created
  + resource "aws_s3_bucket_versioning" "aws_s3_bucket_versioning_backend" {
      + bucket = "backend-s3-bucket-id-terraform.state"
      + id     = (known after apply)

      + versioning_configuration {
          + mfa_delete = (known after apply)
          + status     = "Enabled"
        }
    }

Plan: 4 to add, 0 to change, 0 to destroy.

Changes to Outputs:
  + aws_dynamodb_table_backend = "backend_dynamodb_table_terraform_lock"
  + aws_s3_bucket_backend      = "backend-s3-bucket-id-terraform.state"
  + local_environment_data     = {
      + AWS_ACCESS_KEY        = "xxxxx"
      + AWS_REGION            = "xxxxx"
      + AWS_SECRET_ACCESS_KEY = "xxxxx"
      + ENVIRONMENT           = "xxxxx"
    }
aws_s3_bucket_server_side_encryption_configuration.aws_s3_bucket_server_side_encryption_configuration_backend: Creating...
aws_s3_bucket_versioning.aws_s3_bucket_versioning_backend: Creating...
aws_dynamodb_table.aws_dynamodb_table_backend: Creating...
aws_s3_bucket.aws_s3_bucket_backend: Creating...
aws_s3_bucket_server_side_encryption_configuration.aws_s3_bucket_server_side_encryption_configuration_backend: Creation complete after 1s [id=backend-s3-bucket-id-terraform.state]
aws_s3_bucket.aws_s3_bucket_backend: Creation complete after 2s [id=backend-s3-bucket-id-terraform.state]
aws_s3_bucket_versioning.aws_s3_bucket_versioning_backend: Creation complete after 4s [id=backend-s3-bucket-id-terraform.state]
aws_dynamodb_table.aws_dynamodb_table_backend: Creation complete after 7s [id=backend_dynamodb_table_terraform_lock]

Apply complete! Resources: 4 added, 0 changed, 0 destroyed.

Outputs:

aws_dynamodb_table_backend = "backend_dynamodb_table_terraform_lock"
aws_s3_bucket_backend = "backend-s3-bucket-id-terraform.state"
```

&nbsp;

Ahora ya podemos empezar nuestro despliege con el primero comando

&nbsp;

```
make init
```

&nbsp;

el cual nos daran salida como esta

&nbsp;

```
Initializing the backend...

Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.
Initializing modules...

- backend-deployment in modules/backend-deployment
- backend-deployment.asg_blue in modules/asg
- backend-deployment.asg_green in modules/asg
- backend-deployment.lb_blue_green in modules/lb_blue_green

Initializing provider plugins...

- Finding hashicorp/local versions matching "2.1.0"...
- Finding hashicorp/aws versions matching "5.30.0"...
- Installing hashicorp/local v2.1.0...
- Installed hashicorp/local v2.1.0 (signed by HashiCorp)
- Installing hashicorp/aws v5.30.0...
- Installed hashicorp/aws v5.30.0 (signed by HashiCorp)

Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

&nbsp;

Y si queremos de una desplegar blue para empezar bastara con un

&nbsp;

```
make blue
```

&nbsp;

y nos debe crear

&nbsp;

```
Plan: 18 to add, 0 to change, 0 to destroy.
```

&nbsp;

le damos que yes

&nbsp;

```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes
```

&nbsp;

Y esperamos al final donde podremos ver un fin de salida
tal que:

&nbsp;

```
output_module_backend_deployment_var_subnets_ids = toset([
  "subnet-028c726ef3958601a",
  "subnet-03450911f80e643f3",
  "subnet-0768c94b7a3e0d822",
])
output_module_lb_blue_green_aws_lb_dns_name = "blue-green-lb-v1-640975373.eu-west-1.elb.amazonaws.com"
output_module_security_group_rule_any_security_group_id = "sg-07c86ee8fc0091d8a"
traffic_distribution = "blue"
```

&nbsp;

Y aqui todos los comandos de gestion del proyecto.

**NO USAR DIRECTAMENTE CLI DOCKER A MENOS QUE SEA NECESARIO**

&nbsp;

Una vez ejecutado un apply podemos ver el dns publico
de nuestro balancer con **_make dns_**

```
make dns

lue-green-lb-v1-640975373.eu-west-1.elb.amazonaws.com
```

&nbsp;

&nbsp;

Cambiar todo el trafico a blue **_make blue_**

```
make blue

output_module_lb_blue_green_aws_lb_dns_name = "blue-green-lb-v1-640975373.eu-west-1.elb.amazonaws.com"
output_module_security_group_rule_any_security_group_id = "sg-07c86ee8fc0091d8a"
traffic_distribution = "blue"

```

&nbsp;

&nbsp;

Cambiar todo el trafico a green **_make green_**

```
make green

output_module_lb_blue_green_aws_lb_dns_name = "blue-green-lb-v1-640975373.eu-west-1.elb.amazonaws.com"
output_module_security_group_rule_any_security_group_id = "sg-07c86ee8fc0091d8a"
traffic_distribution = "green"

```

&nbsp;

&nbsp;

Cambiar el trafico a 50/50 **_make split-50_**, en estos tres casos antes de
aceptar con el **yes** veremos como se reparte el peso, por ejemplo en este
ultimo ejemplo de cambio de trafico entre blue/green vamos a poner 50/50

```
make split-50

          ~ forward {
              - target_group {
                  - arn    = "arn:aws:elasticloadbalancing:eu-west-1:924528062656:targetgroup/blue-blue-green-lb-v1/b15b41f30ca4db37" -> null
                  - weight = 0 -> null
                }
              - target_group {
                  - arn    = "arn:aws:elasticloadbalancing:eu-west-1:924528062656:targetgroup/green-blue-green-lb-v1/8399d2b7f803b70f" -> null
                  - weight = 100 -> null
                }
              + target_group {
                  + arn    = "arn:aws:elasticloadbalancing:eu-west-1:924528062656:targetgroup/blue-blue-green-lb-v1/b15b41f30ca4db37"
                  + weight = 50
                }
              + target_group {
                  + arn    = "arn:aws:elasticloadbalancing:eu-west-1:924528062656:targetgroup/green-blue-green-lb-v1/8399d2b7f803b70f"
                  + weight = 50
                }

                # (1 unchanged block hidden)
            }
        }
    }

Plan: 0 to add, 1 to change, 0 to destroy.

Changes to Outputs:
  ~ traffic_distribution                                         = "green" -> "split"

Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value:
```

&nbsp;

A modo de prueba podemos ejecutar un **make traffic-test** para
ver como se reparte el trafico. Por ejemplo esta seria una salida
para blue

```
make blue
make traffic-test

bash bin/traffic-test.sh
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
```

Si pasamos 50/50

```
make split
make traffic-test

bash bin/traffic-test.sh
<h1>This is GREEN server</h1>
<h1>This is BLUE server</h1>
<h1>This is GREEN server</h1>
<h1>This is GREEN server</h1>
<h1>This is BLUE server</h1>
<h1>This is BLUE server</h1>
<h1>This is GREEN server</h1>
<h1>This is BLUE server</h1>
<h1>This is GREEN server</h1>
<h1>This is GREEN server</h1>
<h1>This is BLUE server</h1>
```
