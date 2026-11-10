Cuando tu primer entorno de trabajo no es un IDE adulto, sino un aula con rueditas de entrenamiento 🎓

---

## 📬 La idea en una frase

> **BlueJ es un IDE pensado para aprender POO: cada clase es una “caja” que puedes abrir, probar y conectar visualmente, y cada objeto se convierte en un globo que puedes inspeccionar.**

Programar en Java desde consola o con un IDE gigante al principio es como aprender a conducir en una autopista: demasiado tráfico, demasiadas palancas. BlueJ te pone en un circuito cerrado: ves las clases como rectángulos, creas objetos con un clic y los usas desde una “terminal” propia. Ideal para entender POO sin morir en el intento.

---

## 📜 ¿Qué es BlueJ y por qué se usa para aprender?

**BlueJ** es un entorno de desarrollo integrado (IDE) creado para enseñar programación orientada a objetos, especialmente Java. Su filosofía: lo importante no es escribir mucho código, sino **ver** cómo interactúan las clases y los objetos.

Características que lo hacen perfecto para empezar:

- **Vista de clases:** cada clase aparece como un rectángulo en un lienzo (el *diagrama de clases*). Puedes ver de un vistazo cómo se relacionan.
- **Creación de objetos con un clic:** no necesitas escribir `new` en el `main`; haces clic en una clase y eliges “new”.
- **Inspección de objetos:** cada objeto creado aparece como un globo con su estado visible.
- **Terminal propia:** puedes llamar a métodos de un objeto escribiendo en la terminal, viendo el resultado al instante.
- **Sin `main` obligatorio:** el método `main` deja de ser la única puerta de entrada; puedes probar métodos directamente sobre los objetos.

> 💡 **Tip:** BlueJ no es para producción. Es un “gimnasio” de POO. Cuando tus músculos estén fuertes, pasas a IntelliJ, Eclipse o VS Code sin drama.

---

## 🧩 Las piezas del lienzo de BlueJ

Cuando abres un proyecto BlueJ, ves tres zonas claras:

1. **El diagrama de clases (lienzo):** rectángulos con el nombre de cada clase. Las flechas entre ellos indican relaciones (herencia, uso).
2. **El panel de objetos (abajo):** los objetos creados aparecen aquí como globos con un nombre (por defecto `obj1`, `obj2`…).
3. **La terminal:** una consola donde puedes escribir instrucciones y ver resultados.

```java
// Una clase típica que verías en BlueJ
public class Estudiante {
    String nombre;
    int edad;
    double nota;

    void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
}
```

En BlueJ no necesitas un `main` para probarla: creas un objeto `Estudiante` desde el lienzo y llamas a `saludar()` desde la terminal.

---

## 🏛️ Cómo crear y usar un objeto en BlueJ (paso a paso)

1. **Compila la clase:** clic derecho sobre el rectángulo → *Compile*. Si hay errores, aparecen en rojo.
2. **Crea un objeto:** clic derecho sobre la clase → *new Estudiante()*. Le das un nombre al objeto (por ejemplo `ana`).
3. **Aparece el globo:** en el panel inferior verás `ana: Estudiante`.
4. **Llama a métodos:** clic derecho sobre el globo → eliges el método (por ejemplo `saludar()`). O bien, en la terminal:

```java
ana.saludar();
```

5. **Inspecciona el estado:** clic derecho sobre el globo → *Inspect*. Verás los valores de `nombre`, `edad` y `nota` en ese momento.

> 📝 **Nota:** el globo **es** el objeto. Si creas dos globos de la misma clase, tienes dos objetos distintos con su propio estado. Eso es la POO en acción, a la vista.

---

## ⭐ Sé el Código, my friend…

> 🕶️ **Don Tip:** en BlueJ, el código es solo la mitad de la historia. La otra mitad es el *lienzo* y los *globos*. Si no ves los objetos, no entiendes la POO.

**Ejercicio: lee el lienzo**

Imagina un proyecto BlueJ con estas clases:

- `CuentaBancaria` (atributos: `saldo`, `titular`; métodos: `ingresar`, `retirar`)
- `Cliente` (atributo: `nombre`; método: `mostrarInfo`)
- Una flecha de `Cliente` hacia `CuentaBancaria` (el cliente *usa* una cuenta)

Responde:

1. ¿Cuántos objetos puedes crear de `CuentaBancaria`?
2. ¿Dónde aparecen esos objetos?
3. ¿Cómo comprobarías el saldo de una cuenta creada?

🔄 Solución

1. **Los que quieras:** cada clic en *new* crea un objeto nuevo.
2. En el **panel de objetos** (abajo), como globos con nombre.
3. Clic derecho sobre el globo → *Inspect* (verás `saldo`), o llamar a un método tipo `getSaldo()` desde la terminal.

---

## ❓ ¡No hay preguntas tontas!

> **Q:** ¿Por qué usar BlueJ si luego voy a usar otro IDE?
>
> **A:** Porque BlueJ te enseña a *pensar en objetos* antes de enseñarte a lidiar con la burocracia de un IDE profesional. Es como aprender a nadar en piscina pequeña antes de lanzarte al mar.

> **Q:** ¿Puedo usar BlueJ para proyectos grandes?
>
> **A:** No. Está pensado para proyectos pequeños y didácticos. Cuando tu proyecto crezca, migra a un IDE completo.

> **Q:** ¿BlueJ compila y ejecuta Java de verdad?
>
> **A:** Sí. El código que escribes es Java estándar. Nada de “Java de juguete”: es el mismo lenguaje, solo el entorno es más amable.

---

## 🎯 Mini-chequeo

Ponte a prueba en 30 segundos:

1. ¿Qué aparece en el panel inferior cuando creas un objeto?
2. ¿Necesitas un método `main` para probar una clase en BlueJ?
3. ¿Dónde se ven los errores de compilación?
4. ¿Qué ventaja tiene el *Inspect* frente a un `System.out.println`?

🔄 Respuestas

1. Un **globo** con el nombre del objeto y su clase.
2. **No.** Puedes crear objetos y llamar métodos directamente.
3. En rojo, al compilar la clase (clic derecho → *Compile*).
4. Que ves **todo el estado** del objeto de una vez, sin tener que imprimir cada atributo.

---

## ✅ Resumen en 3 frases

1. **BlueJ** es un IDE didáctico para aprender POO en Java, centrado en ver clases y objetos visualmente.
2. Las clases aparecen como **rectángulos** en un lienzo; los objetos creados, como **globos** inspeccionables.
3. Permite crear objetos y llamar métodos **sin `main`**, lo que acelera la comprensión de la POO.

🐛 **Vocabulario rápido**

| Término | Idea general |
| ------- | ---------------------------------------------------- |
| BlueJ | IDE didáctico para aprender POO en Java |
| Lienzo | Vista con las clases como rectángulos |
| Globo | Representación visual de un objeto creado |
| Inspect | Ver el estado completo de un objeto |
| Terminal | Consola para llamar métodos directamente |
