=============================
ESTILO DE CODIGO Y ESTRUCTURA
=============================

- Los nombres de directorios y todos los ficheros que sean
  de nuestro codigo seran en singular
- Los directorios y ficheros que sean de nuestro codigo iran
  con Pascal Case que es la primera letra de cada palabra en mayuscula
- Para el format del codigo, yaml, json, etc se definiran un
  prettirrc y los correspondientes vendors/configuraciones y se aplicara
  por igual en todos los participantes del proyecto

==================
GESTION RELACIONES
==================

- FKLess :) Gestion individual con validacion de parentesco
  y relacionamos por el campo de identificacion que tenga el recurso

====================
GESTION ACOPLAMIENTO
====================

- Podemos empezar usando codigo de otros modulos pero siempre a traves
  de un unico punto que sea quien exponga el comportamiento de su modulo
  que desee, en capa de aplicacion podemos absorverlo sin problema

====================
GESTION DEPENDENCIAS
====================

- npm install -E

Siempre usamos -E para fijar version ya sea en dev o no

====================
ESTRUCTURA DE MODULO
====================

Context/User
Context/Access/User
