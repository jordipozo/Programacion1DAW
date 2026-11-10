Ejercicios propuestos para el alumnado: firmas, parámetros, retorno, ámbito y troceado 🛠️

---

## 📬 La idea en una frase

> **Cuatro enunciados para practicar lo visto en la unidad: declarar métodos con firma correcta, pasar argumentos en orden, devolver resultados y trocear un programa en verbos.**

---

## 🧩 Ejercicio 1 — El saludo personalizado

Crea un método que reciba el nombre de una persona y su edad, y muestre por pantalla una frase de presentación. Después, desde `main`, llámalo con al menos tres personas distintas.

- **Nombre del método:** `presentar`
- **Entradas:** `String nombre, int edad`
- **Salida:** por pantalla, `"<nombre> tiene <edad> años."`
- **Tipo de retorno:** `void` (solo imprime)

> 💡 Pista: el método solo imprime; quien decide qué personas presentar es `main`.

---

## 🧩 Ejercicio 2 — ¿Cuántos son pares?

Escribe un método que reciba un array de enteros y devuelva cuántos de ellos son pares. Luego, desde `main`, crea un array con varios números, llama al método y muestra el resultado.

- **Nombre del método:** `contarPares`
- **Entradas:** `int[] numeros`
- **Salida (retorno):** `int` con la cantidad de pares
- **Condición:** si el array está vacío, devuelve `0`

> ⚠️ No imprimas dentro del método: devuelve el número y que `main` lo muestre.

---

## 🧩 Ejercicio 3 — El mayor de tres

Implementa un método que reciba tres números enteros y devuelva el mayor de los tres. Después, en `main`, pide los tres números por teclado, llama al método y muestra el resultado.

- **Nombre del método:** `mayorDeTres`
- **Entradas:** `int a, int b, int c`
- **Salida (retorno):** `int` con el mayor
- **Restricción:** no uses arrays ni bucles; resuélvelo con `if`.

> 💡 Pista: puedes reutilizar la idea de comparar dos a dos.

---

## 🧩 Ejercicio 4 — Trocea el programa

Dado este `main` que lo hace todo, refactorízalo en métodos con una responsabilidad cada uno, sin cambiar la salida:

```java
public static void main(String[] args) {
    Scanner teclado = new Scanner(System.in);
    System.out.print("Número: ");
    int n = teclado.nextInt();
    boolean esPrimo = true;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) { esPrimo = false; }
    }
    if (esPrimo && n > 1) {
        System.out.println(n + " es primo");
    } else {
        System.out.println(n + " no es primo");
    }
}
```

- Extrae al menos **dos** métodos (por ejemplo, uno que decida si un número es primo y otro que muestre el veredicto).
- El `main` final debe leerse como un resumen: leer → calcular → mostrar.
- La salida debe ser **idéntica** antes y después.

---

## ✅ Criterios de evaluación

1. Las firmas son correctas: modificadores, tipo de retorno, nombre camelCase, parámetros con tipo.
2. Los argumentos se pasan en el orden y tipo que exige la firma.
3. Los métodos que calculan **devuelven** el valor; los que solo muestran son `void`.
4. El programa compila sin errores y la salida coincide con la esperada.

🐛 **Vocabulario rápido**

| Término | Idea general |
| --- | --- |
| Firma | Modificadores + retorno + nombre + parámetros |
| Argumento | Valor que se pasa en la llamada |
| Retorno | Valor que el método entrega |
| Refactorizar | Cambiar la forma sin cambiar el comportamiento |