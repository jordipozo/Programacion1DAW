Ejercicios para practicar POO en BlueJ, basados en el APTDO. 2.1 — Intro POO 🎓

---

## 📬 Idea en una frase

> **BlueJ te deja crear clases, instanciar objetos con un clic y probar métodos desde la terminal; estos ejercicios te ponen a diseñar clases completas siguiendo la escalera: atributos → constructor → métodos → prueba.**

Trabaja cada ejercicio en un proyecto BlueJ nuevo. Compila, crea objetos desde el lienzo y llámalos desde la terminal. No copies código de las notas: escribe tú.

---

## 🎯 Ejercicio 1 — La clase `Libro`

Diseña una clase `Libro` con:

- Atributos: `titulo` (`String`), `autor` (`String`), `paginas` (`int`), `prestado` (`boolean`).
- Constructor que reciba `titulo`, `autor` y `paginas` (el libro nace no prestado).
- Métodos: `prestar()` (pone `prestado = true` y avisa si ya lo estaba), `devolver()` (lo contrario), `mostrar()` (imprime los datos).
- Un `main` que cree dos libros, preste uno y muestre ambos.

---

## 🎯 Ejercicio 2 — La clase `Rectangulo`

Diseña una clase `Rectangulo` con:

- Atributos: `ancho`, `alto` (`double`).
- Constructor sin parámetros (1×1) y constructor con parámetros.
- Métodos: `area()` (devuelve `double`), `perimetro()` (devuelve `double`), `esCuadrado()` (devuelve `boolean`), `escalar(double factor)` (multiplica ancho y alto).
- Prueba con dos rectángulos y muestra área, perímetro y si es cuadrado.

---

## 🎯 Ejercicio 3 — La clase `Cuenta`

Diseña una clase `Cuenta` (similar a `CuentaBancaria` pero con sobrecarga de constructores):

- Atributos: `titular` (`String`), `saldo` (`double`).
- Constructor sin parámetros (titular "Anónimo", saldo 0) y constructor con `titular` y `saldoInicial`.
- Métodos: `ingresar(double)`, `retirar(double)` (no deja saldo negativo), `mostrar()`.
- Un `main` que use **ambos** constructores y pruebe ingresar/retirar (incluyendo un retiro mayor al saldo).

---

## 🎯 Ejercicio 4 — Be the Code: detecta el error

Este código compila pero no funciona bien. Encuentra el error y corrígelo:

```java
public class Alumno {
    String nombre;
    int nota;

    public Alumno(String nombre, int nota) {
        nombre = nombre;
        nota = nota;
    }

    void mostrar() {
        System.out.println(nombre + " → " + nota);
    }

    public static void main(String[] args) {
        Alumno a = new Alumno("Ana", 8);
        a.mostrar();
    }
}
```

---

## 🎯 Ejercicio 5 — Traza mental

Sin ejecutar, ¿qué imprime este programa?

```java
public class Punto {
    int x;
    int y;

    public Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void mover(int dx, int dy) {
        x += dx;
        y += dy;
    }

    public static void main(String[] args) {
        Punto p1 = new Punto(2, 3);
        Punto p2 = p1;
        p1.mover(1, 1);
        System.out.println(p1.x + "," + p1.y);
        System.out.println(p2.x + "," + p2.y);
    }
}
```

---

## ✅ Cierre

El criterio de éxito: cada clase **compila, se instancia desde el lienzo de BlueJ y produce la salida esperada**.
