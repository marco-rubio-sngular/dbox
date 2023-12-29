# Módulo de Terraform para generar una clave aleatoria

Este módulo de Terraform genera una clave aleatoria.

## Uso

Para usar este módulo en tu propio código de Terraform, puedes referenciarlo en un bloque `module`:

```hcl
module "random_key" {
  source = "path/to/module"
  length = 20
}
```

Reemplaza `"path/to/module"` con la ruta al módulo `random_key`.

## Entradas

| Nombre | Descripción                                 | Tipo     | Default | Requerido |
| ------ | ------------------------------------------- | -------- | ------- | --------- |
| length | La longitud de la clave aleatoria a generar | `number` | `16`    | no        |

## Salidas

| Nombre     | Descripción                 |
| ---------- | --------------------------- |
| random_key | La clave aleatoria generada |

## Pruebas

Este módulo viene con pruebas de unidad escritas con Terratest. Para ejecutar las pruebas, navega al directorio `test` y ejecuta `go test`.

## Licencia

Este módulo de Terraform está licenciado bajo la MIT License.
