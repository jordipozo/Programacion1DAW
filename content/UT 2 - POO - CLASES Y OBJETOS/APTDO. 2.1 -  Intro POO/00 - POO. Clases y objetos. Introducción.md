
El cortapastas y las galletas: cuando tu código pasa de ser una receta a un mundo de objetos que hablan entre sí 🏗️

---

Bienvenido a la unidad donde tus programas dejan de ser _recetas de cocina_ y se convierten en **mundos de cosas**. Hasta ahora has escrito programas lineales: esto, luego esto, luego esto. Pero el mundo real no funciona así. En el mundo real tienes _cosas_: un perro, un coche, un profesor de programación con gafas de pasta. Cada cosa tiene **atributos** (color, edad, número de ganas de corregir exámenes) y **comportamientos** (ladrar, acelerar, poner faltas de ortografía).

La **Programación Orientada a Objetos (POO)** es exactamente eso: escribir código como funciona el mundo real. Y en esta unidad vas a aprender la base de todo: las **clases** (el molde) y los **objetos** (la galleta). Construirás tus propias clases con atributos y métodos, las harás nacer con **constructores**, aprenderás a desambiguar con `this`, a razonar sobre **referencias y memoria**, y a exprimir la **sobrecarga** de métodos y el paso de parámetros.

Esta unidad es el **punto de inflexión del curso**: lo que aprendas aquí, lo usarás en todas las unidades que quedan. La POO no es un tema más: es el tema que hace que todos los demás tengan sentido.

Esta unidad se lee como un **libro de 9 capítulos**: los 8 primeros puntos son teoría en progresión y el 9º es un aterrizaje práctico para machacar todo lo aprendido.

---

## 🎯 Objetivo de la unidad

Al terminar, serás capaz de:

- Explicar qué es la **POO** y por qué existe (spoiler: no es para fastidiar, es para no volverte loco).
- Diferenciar **clase** (el cortapastas) de **objeto** (la galleta), y crear objetos con `new`.
- Definir **atributos** (las propiedades) y **métodos** (los comportamientos) de una clase.
- Usar **constructores** para que los objetos nazcan bien preparados, con o sin parámetros.
- Desambiguar atributos y parámetros con la palabra clave **`this`**, y llamar a un constructor desde otro.
- Razonar sobre **referencias, `null` y memoria**: qué guarda una variable de objeto y qué pinta el `heap`.
- Escribir **métodos sobrecargados** y entender el **paso por valor** (y por qué las referencias se portan “raro”).
- Diseñar y crear una **clase completa** con sus métodos, de principio a fin.

---


## ✅ Criterios de evaluación cubiertos (RA2 + RA4)

**RA2: Escribe y prueba programas sencillos, reconociendo y aplicando los fundamentos de la programación orientada a objetos.**

**RA4: Desarrolla programas organizados en clases analizando y aplicando los principios de la programación orientada a objetos.**

|CE|Criterio|Dónde se cubre|
|---|---|---|
|RA2 a)|Se han identificado los fundamentos de la programación orientada a objetos.|✅ Punto 1|
|RA2 b)|Se han escrito programas simples.|✅ Todos|
|RA2 c)|Se han instanciado objetos a partir de clases predefinidas.|✅ Puntos 2, 3 y 6|
|RA2 d)|Se han utilizado métodos y propiedades de los objetos.|✅ Puntos 3 y 8|
|RA2 f)|Se han utilizado parámetros en la llamada a métodos.|✅ Puntos 7 y 8|
|RA2 h)|Se han utilizado constructores.|✅ Puntos 4 y 7|
|RA4 a)|Se ha reconocido la sintaxis, estructura y componentes típicos de una clase.|✅ Puntos 2 y 3|
|RA4 b)|Se han definido clases.|✅ Puntos 2 y 8|
|RA4 c)|Se han definido propiedades y métodos.|✅ Puntos 3 y 8|
|RA4 d)|Se han creado constructores.|✅ Puntos 4 y 7|
|RA4 e)|Se han desarrollado programas que instancien y utilicen objetos de las clases creadas anteriormente.|✅ Puntos 6 y 8|

> 📌 El punto sobre referencias y memoria y el punto sobre paso por valor son la base para entender el **RA2 c) y f)** en profundidad. Los modificadores de visibilidad (RA4 f), la herencia (RA4 g) y los métodos estáticos (RA4 h) tienen su propio apartado sobre Visibilidad, encapsulación y static y en la Unidad de Trabajo sobre Herencia, así que aquí los dejamos descansando.

---

