---
title: Como se ha hecho este blog?
date: "2020-04-30"
description: En este post voy a explicar con que tecnologías y servicios he creado este blog.
---

Este blog ha sido creando varias tecnologías y servicios gratuitos, los cuales, ofrecen las suficientes facilidades para montar una web o un blog con poco tiempo y poco esfuerzo, tal y como me gusta a mí 😃.

Dicho esto, paso a enumerar las tecnologías y servicios que se han utilizado.

  - [React](https://reactjs.org/) + [Gatsby](https://www.gatsbyjs.org/) para la UI.
  - [Markdown](https://www.markdownguide.org/) para el texto.
  - [Netlify](https://www.netlify.com/) para hostear la web, y manejar el CI/CD de la misma.




### React + Gatsby

**React** se trata de una librería de **Javascript** para "incrustar" código HTML dentro de los ficheros **Javascript**, aunque, exactamente no se incrusta HTML puro, ya que, utiliza una notación propia de React llamada **JSX**, que se parece bastante a la notación **HTML** pura.

**React** se puede utilizar para crear **UI**'s, tanto para WebApp's, iOS, Android, como para aplicaciones nativas de Windows y MacOS, por esta compatibilidad tan amplia, es una de las librerías más utilizadas en la actualidad.

![alt-text](https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png "React")

A su vez, **Gatsby** es un framework basado en **React** para crear páginas web y aplicaciones web de manera muy rápida y sencilla, ya que, dispone de una gran cantidad de plantillas web llamadas **Starters**, una de las cuales ha dado vida a este mismo blog.

Una de las funcionalidades más útlies de Gatsby, es que, permite, mediante un simple comando (**gatsby develop**), crear un servidor web local para ver los cambios en la web en tiempo real.

![alt-text](https://evolvingweb.ca/sites/default/files/inline-images/WUBNOEXL-2018.07.03-13-55-55.png "Gatsby")

En cuanto al manejo del contenido propio de la web, Gatsby permite recibir contenido de varias fuentes, por ejemplo, **CMS**'s como **Prismic** o **Contentful**, ficheros **Markdown**, además de, datos de diferentes **API**'s, **BBDD**'s, **JSON**, **YAML**, **CSV**, etc...

![alt-text](https://i.github-camo.com/c78b3c01ca7753c84d26706b248adf236cda7d4f/68747470733a2f2f636c6f75642e67697468756275736572636f6e74656e742e636f6d2f6173736574732f3337383032332f31303031333038372f32346363633765632d363134392d313165352d393765612d3533613834326137313565612e706e67 "Markdown")

Por lo que respecta a, como realizar consultas a bases de datos, API's externas, ficheros Markdown, etc... Gatsby implementa **GrapQL** como lenguaje para realizar estas consultas o **query**'s.

![alt-text](https://graphql.org/img/og_image.png "GraphQL")

### Markdown

Markdown se trata de un lenguaje de marcado ligero, utilizando texto plano, el cual usa una variedad de símbolos para estructurar y editar el texto, como por ejemplo, usar el doble asterisco ** al inicio y al final de una palabra para que aparezca en negrita. Es un lenguaje ampliamente utilizado y que tiene infinidad de documentación disponible en la red, para muestra un botón.

[Markdown Cheat-Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

En este blog por ejemplo, el texto del mismo se extrae mediante una consulta GraphQL al archivo .md que corresponda en cada una de las entradas del blog.

### Netlify

Una vez se ha completado el proceso de comprobar que la web funciona en local mediante el comando *gatsby develop*, el siguiente paso, es publicar la web en un servidor de **hosting** para que todo el mundo pueda acceder a la misma, y, para esto, he utilizado el servicio gratuito de hosting que ofrece **Netlify**, ya que, para ser un servicio gratuito, ofrece una gran cantidad de opciones que hacen extremadamente sencilla la publicación y mantenimiento de una web.

![alt-text](https://www.netlify.com/img/global/meta-image.jpg "Netlify")

Hay varias opciones para abrir una cuenta en Netlify, pero, yo he optado por abrir una cuenta mediante la integración con **Github**, ya que, esto facilita bastante el proceso posterior para implementar el **CI/CD** de la web. Básicamente, tal y como está montada la web y la configuración en Netlify, cada vez que se hace un **push** al repositorio de Github donde está alojado el **código** de la web, Netlify lanza una orden para **re-publicar la web** con los cambios que se han realizado en el código, todo esto, de manera transparente y **automática** para el usuario.

![alt-text](https://miro.medium.com/max/1575/1*in1PmeYoG3-tQQlEUZg2AA.gif "Netlify+Github CI/CD")

Además de esto, tal y como muestra el GIF anterior, una vez subes la web a Netlify, puedes cambiar el **dominio** por defecto que te da Netlify y poner un dominio que hayas comprado en cualquier registrador de dominios.

Así pues, creo que este Stack de trabajo da unos resultados que no me esperaba, la verdad, ya que, siempre había tenido el pensamiento erróneo, que, era muy tedioso y complicado crear y mantener una web, y, al iniciarme en este mundo, he visto que no es tan complicado como yo pensaba, viendo el resultado obtenido con un par de tardes de trabajo.