# El examen del parking 🅿️


---

## 📬 La idea en una frase

> **Diez retos, de menor a mayor, que repasan todo lo visto en este apartado: declarar arrays, recorrerlos con `for` y `for-each`, matrices, la clase `Arrays`, aplicaciones típicas y métodos que reciben/devuelven arrays.**

Este bloque es tu simulacro de examen. Cada ejercicio sube un peldaño. Intenta resolverlos **sin mirar apuntes**.

> 💡 **Consejo:** compila y ejecuta cada ejercicio en un `main` propio antes de pasar al siguiente. Un error sin resolver se arrastra.

---

## 🧩 Ejercicio 1 — El parking básico

Crea un array de 5 `int` con valores `{10, 20, 30, 40, 50}`. Imprime la longitud del array, el primer elemento y el último elemento.

**Salida esperada:**
```
Longitud: 5
Primero: 10
Último: 50
```

---

## 🧩 Ejercicio 2 — Recorrido con `for` clásico

Dado `int[] notas = {7, 8, 5, 9, 6};`, calcula la **media** (como `double`) y el **máximo** usando un `for` con índice. Imprime ambos.

**Salida esperada:**
```
Media: 7.0
Máximo: 9
```

---

## 🧩 Ejercicio 3 — Recorrido con `for-each`

Dado `String[] gatos = {"Bigotes", "Garfield", "Misifú", "Calcetines"};`, imprime cada nombre con su posición usando `for-each`... espera, el `for-each` no da índice. **Reescribe** el recorrido para que imprima `Gato i: nombre` (con `i` empezando en 0) usando el bucle adecuado. Luego añade un segundo bucle `for-each` que cuente cuántos nombres empiezan por "M" o "G".

**Salida esperada:**
```
Gato 0: Bigotes
Gato 1: Garfield
Gato 2: Misifú
Gato 3: Calcetines
Empiezan por M o G: 2
```

---

## 🧩 Ejercicio 4 — Modificar en el sitio

Dado `int[] numeros = {1, 2, 3, 4, 5};`, multiplica cada elemento por 10 **en el sitio** y luego imprime el array con `Arrays.toString`.

**Salida esperada:**
```
[10, 20, 30, 40, 50]
```

---

## 🧩 Ejercicio 5 — Matriz (array bidimensional)

Declara una matriz `int[][] m = {{1,2,3},{4,5,6},{7,8,9}};`. Imprime la **diagonal principal** (1, 5, 9) y calcula la **suma de todos los elementos**.

**Salida esperada:**
```
Diagonal: 1 5 9
Suma total: 45
```

---

## 🧩 Ejercicio 6 — La clase `Arrays`

Dado `int[] datos = {5, 2, 8, 1, 9};`:
1. Ordénalo con `Arrays.sort`.
2. Imprímelo.
3. Busca el valor `8` con `Arrays.binarySearch` e imprime su posición.
4. Crea una copia de los primeros 3 elementos con `Arrays.copyOf` e imprímela.

**Salida esperada:**
```
Ordenado: [1, 2, 5, 8, 9]
Posición de 8: 3
Copia: [1, 2, 5]
```

---

## 🧩 Ejercicio 7 — Búsqueda lineal y contar

Escribe un método `contar(int[] arr, int buscado)` que devuelva cuántas veces aparece `buscado` en `arr`. Pruébalo con `{3, 7, 2, 7, 9, 7, 1}` buscando `7`.

**Salida esperada:**
```
El 7 aparece 3 veces
```

---

## 🧩 Ejercicio 8 — Invertir en el sitio

Escribe un método `invertir(int[] arr)` que dé la vuelta al array **sin crear otro array**, usando dos punteros. Pruébalo con `{1, 2, 3, 4, 5}`.

**Salida esperada:**
```
[5, 4, 3, 2, 1]
```

---

## 🧩 Ejercicio 9 — Arrays y métodos (referencia)

Escribe un método `duplicar(int[] arr)` que **devuelva un nuevo array** con cada elemento duplicado (el original no debe modificarse). Demuestra que el original queda intacto.

**Salida esperada:**
```
Original: [1, 2, 3]
Duplicado: [2, 4, 6]
Original tras llamar: [1, 2, 3]
```

---

## 🧩 Ejercicio 10 — El reto final (todo junto)

Crea un programa que:
1. Genere un array de 10 enteros aleatorios entre 1 y 100 (usa `Math.random()`).
2. Imprima el array.
3. Calcule e imprima la **media**, el **mínimo** y el **máximo**.
4. Cuente cuántos son **pares** y cuántos **impares**.
5. Ordene el array con `Arrays.sort` y lo imprima ordenado.

**Salida esperada (ejemplo, los valores aleatorios variarán):**
```
Array: [42, 7, 91, 33, 58, 12, 77, 24, 65, 49]
Media: 45.8
Mínimo: 7
Máximo: 91
Pares: 4
Impares: 6
Ordenado: [7, 12, 24, 33, 42, 49, 58, 65, 77, 91]
```

---

## 🎯 Mini-chequeo

1. ¿Qué diferencia hay entre `arr.length` y `arr.length()`?
2. ¿Se puede modificar un array dentro de un método y que se vea fuera?
3. ¿Qué bucle usarías para leer sin modificar?
4. ¿Cuándo conviene usar `Arrays.binarySearch` frente a búsqueda lineal?

🔄 Respuestas

1. `arr.length` es un atributo (sin paréntesis) para arrays; `str.length()` es un método (con paréntesis) para `String`.
2. Sí: se pasa la referencia, así que los cambios sobre las plazas se reflejan en el original.
3. `for-each`: es de solo lectura y más legible.
4. Cuando el array está **ordenado** y es grande: `binarySearch` es O(log n) frente a O(n) de la lineal.

---

## ✅ Resumen en 3 frases

1. Los arrays son el primer paso para manejar cantidades: tamaño fijo, acceso por índice desde 0.
2. `for` clásico para modificar/buscar por posición; `for-each` para leer.
3. La clase `Arrays` (sort, binarySearch, copyOf, toString) te ahorra escribir lo que ya está inventado.

🐛 Vocabulario rápido

| Término | Idea general |
|---|---|
| Array | Aparcamiento de datos del mismo tipo, tamaño fijo |
| `for-each` | Bucle de solo lectura |
| Matriz | Array de arrays (bidimensional) |
| `Arrays.sort` | Ordena el array en el sitio |
| `Arrays.binarySearch` | Búsqueda binaria en array ordenado |