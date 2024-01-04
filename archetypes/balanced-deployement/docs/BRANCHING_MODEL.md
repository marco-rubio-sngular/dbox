## _FLUJO DE TRABAJO DE GITFLOW_

Gitflow es un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales.
Además de las ramas de función, utiliza ramas individuales para preparar, mantener y registrar publicaciones.

&nbsp;

## Ramas principales y de desarrollo

Estas dos ramas son las ramas donde registramos el historial del proyecto. En la primera de ellas,
en la rama principal main o master, almacenamos el historial de publicacion oficial, nunca vamos
a recibir en esta rama codigo directo, y la otra rama principal, develop, o la rama de desarrollo,
es la rama que vamos a utilizar para integrar las funciones.

Como recomendacion por no decir, por normativa, debemos etiquetar todas las confirmaciones de la rama
main con un numero de version como veremos mas adelante.

Asi pues como primer paso sabemos que nuestro repositorio debe tener dos ramas principales que se llaman

**main o master**\
**develop**

&nbsp;

## Ramas de función

Cada funcion o feature que requiera nuestro proyecto va a residir en estas ramas de funcion, es decir,
el desarrollador trabaja en estas ramas y lo mas importante es que no van a partir de main sino que
van a hacer uso de la rama develop como rama principal, partiendo siempre de ella, de develop.

Cuando una funcion ya esta terminada se vuelve a fusionar con la rama de develop, es decir,
sale de develop y se fusiona con develop, jamas debemos hacerlo sobre main.

Las ramas feature se crean a partir de la última rama develop siempre y son ramas temporales
dejando a eleccion del equipo si las conservamos o no.

Estas ramas se suelen llamar con el prefijo feature_nnn donde nnn indica de manera descriptiva
de que trata la feature que vamos a abordar.

## Ramas de publicación

Primero partimos de develop y sacamos ramas features que una vez se han completado
vuelven a develop, hasta aqui todo bien. Una vez la rama de develop tiene las features sucifientes
o las que queramos publicar, en ese momento es cuando entra en juego las rama de publicacion.

Como develop ha ido adquiriendo features, sera la rama principal desde la cual bifurcaremos una rama
de publicacion o rama de release, iniciando de ese modo el siguiente ciclo de publicacion.

Cuando iniciamos la rama de publicacion o nueva release, no podemos añadirle mas features, tan solo
podremos trabajar con ramas de corrección o hotfix, fusionando dicha rama release a main y la etiquetamos
con un numero de version, ademas de fusionarla tambien con develop para mantener ambas ramas principales
actualizadas ya que develop podria haber progresado desde que se inicio la rama de publicacion.

Esta forma de trabajar hace posible que no pare la creacion de features mientras se puede
estar desplegando una release.

Al igual que las ramas feature, las ramas release se basan en la rama develop y como pasa con
las ramas de feature, las ramas release suelen llamarse con el prefijo release/x.x.x donde x.x.x
es el numero de version, por ejemplo, release/0.0.1

Una vez se ha fusionado la rama release con main y develop ya tenemos lista una release para su
lanzamiento, pudiendo borrar en ese momento la rama release.

## Ramas de corrección

Estas ramas de corrección, mantenimiento o hotfix son para solucionar
rapidamente las publicaciones de produccion. Son muy similares a las ramas
release y feature, pero estas ramas de corrección si parten de main y no
de la rama develop, siendo las unicas ramas que bifurcaremos directamente
desde main.

Una vez terminada la rama de corrección la fusionaremos a main directamente
y tambien a develop y dado que es una correccion la rama main deberemos
etiquetarla con su numero de version actualizado (hotfix version).

Las ventajas de estas ramas es la de poder abordar las incidencias sin que
el equipo interrumpa el resto del trabajo ni a esperar a la siguiente release
para solucionarlo.

Como todas las demas ramas las nombraremos con el prefijo hotfix_nnn donde nnn
indica de manera descriptiva de que trata la coreccion que vamos a abordar.

Del mismo modo que cuando finalizamos una rama release la fusionamos tanto
a main como a develop, una rama hotfix se fusiona tambien tanto en main como en develop.

## Resumen

Como resumen tenemos que partimos de la rama main, creamos la rama develop y a partir
de ahi ya sacamos features desde develop y al terminar vuelven a develop y cuando
develop tiene las features requeridas, creamos desde develop la rama release que cuando
este lista se fusionara con main y develop, previo tag de version en main.
Los problemas los solucionaremos con ramas hotfix directamente desde main y las fusionaremos
al terminar con main y develop.

La rama release podemos crearla al principio del inicio de una release no es necesario
esperar a tener todas las features requeridas en develop para sacar la rama release.

Ramas principales: **main develop**\
Ramas auxiliares: **feature release hotfix**
