---
title: 05 - Ejercicios. Herencia y polimorfismo
description: 10 ejercicios para practicar herencia, super/@Override, protected/jerarquías y polimorfismo.
---

# 🧪 Ejercicios — Herencia y polimorfismo

Colección de 10 ejercicios para poner en práctica los 4 puntos del APTDO. 2.3.

## 1. Herencia básica — `Animal` y `Perro`

Crea una clase `Animal` con atributos `nombre` y `edad`, constructor y método `hacerSonido()` que imprima "Sonido genérico". Crea `Perro` que herede de `Animal`, añada `raza` y sobrescriba `hacerSonido()` para imprimir "Guau". Instancia un `Perro` y llama a ambos métodos.

## 2. `super` en constructor

Dada la clase `Persona` con constructor `Persona(String nombre, int edad)`, crea `Estudiante extends Persona` con atributo adicional `notaMedia`. Su constructor debe usar `super(nombre, edad)` y asignar `notaMedia`. Añade un método `mostrar()` que imprima todos los datos.

## 3. `@Override` y firma

Explica (y corrige) por qué este código no sobrescribe correctamente:

```java
class Vehiculo { void arrancar() { System.out.println("Vehículo arrancando"); } }
class Coche extends Vehiculo { void arrancar(String modo) { System.out.println("Coche arrancando en " + modo); } }
```

Añade la anotación `@Override` y ajusta la firma para que sí sea una sobrescritura.

## 4. `protected` y acceso

Crea `Cuenta` con atributo `protected double saldo` y método `protected void actualizarSaldo(double cantidad)`. Crea `CuentaAhorro extends Cuenta` que use `actualizarSaldo` desde un método público `ingresar(double cantidad)`. ¿Podría una clase externa del mismo paquete acceder a `saldo`? Justifica.

## 5. Jerarquía multinivel

Diseña la jerarquía `Figura` → `Poligono` → `Triangulo`. `Figura` tiene `color` y método `describir()`. `Poligono` añade `numLados`. `Triangulo` añade `base` y `altura` y un método `area()`. Cada clase llama a `super(...)` en su constructor. Imprime la descripción completa de un triángulo.

## 6. Polimorfismo por sobrescritura

Crea un array `Figura[] figuras = { new Circulo(2), new Rectangulo(3,4), new Triangulo(3,4) }` donde cada subclase sobrescribe `area()`. Recorre el array imprimiendo `figura.area()` y observa que Java invoca el método correcto en tiempo de ejecución.

## 7. Polimorfismo con parámetros

Escribe un método `public static void imprimirArea(Figura f)` que acepte cualquier subclase de `Figura`. Llámalo con un `Circulo`, un `Rectangulo` y un `Triangulo` distintos. ¿Qué principio de POO se aplica?

## 8. `instanceof` y casting

Dado un array `Object[] objetos`, filtra solo los que sean `Estudiante`, haz downcast y llama a `mostrar()`. Usa `instanceof` para evitar `ClassCastException`.

## 9. Clase abstracta

Convierte `Figura` en `abstract` con método abstracto `double area()`. ¿Por qué ahora no se puede instanciar directamente? Crea dos subclases concretas y demuestra que el polimorfismo sigue funcionando.

## 10. Be the Code — mini sistema

Diseña un pequeño sistema de empleados: `Empleado` (nombre, salarioBase, método `calcularSalario()`), `EmpleadoFijo` y `EmpleadoPorHoras`. Usa herencia, `protected`, sobrescritura con `@Override` y polimorfismo para calcular la nómina total de una lista mixta de empleados. Imprime el total.