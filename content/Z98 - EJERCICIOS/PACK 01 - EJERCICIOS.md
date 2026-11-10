### APARTADOS 1.2 Y 1.3
## Ejercicio 1.

Diseña un algoritmo para jugar a “adivinar un número”. El algoritmo generará un número _aleatorio_ entre 1 y 100, que llamaremos el número secreto, y le pedirá al jugador que introduzca un número hasta que gane o un -1 para rendirse:

- Si el número es igual al número secreto, mostrará “Has Ganado” en la pantalla y terminará
- Si el número introducido es mayor que el número secreto, mostrará “El número secreto es más pequeño” y le pedirá que introduzca otro.
- Si el número introducido es menor que el número secreto, mostrará “El número secreto es más grande” y le pedirá que introduzca otro.
- Si el número introducido es -1, mostrará “Se rinde” y terminará

Para generar un número aleatorio usa este código.

```java
import java.util.Random;
---
Random aleatorio = new Random(System.currentTimeMillis());
// Producir nuevo int aleatorio entre 0 y 99
int secreto = aleatorio.nextInt(100);
```

Como no sabemos cuántas veces se va a realizar el bucle, usamos un `do..while`

Estructura bucle `do..while` sobre un ejemplo que imprime los números desde 1 al 5:
```java
int i = 1; 
do { 
	System.out.println("Número: " + i); 
	i++; 
} while (i <= 5);
```

## Ejercicio 2

Los triángulos se clasifican en 3 tipos:

- Si **todos los ángulos < 90°** → acutángulo.
- Si **uno de los ángulos > 90°** → obtusángulo.
- Si **uno de los ángulos = 90°** → rectángulo.

![[Pasted image 20261002111812.png]]

Dados tres lados, no siempre se puede construir un triángulo:

```
Si algún lado es mayor que la suma de los otros dos, no se puede crear un triángulo:
a + b > c, a + c > b, b + c > a
```

Una vez sabemos que se puede formar un triángulo, la forma más sencilla de clasificarlos es a partir de la longitud de los lados.

```
Sea un triángulo con lados a, b, c donde c es el mayor lado:
Si c² < a² + b² → el triángulo es acutángulo.
Si c² = a² + b² → es rectángulo.
Si c² > a² + b² → es obtusángulo.
```

Haz un programa que, a partir de la longitud de 3 lados, nos diga qué tipo de triángulo es.

```
3 4 4 -> ACUTÁNGULO
5 3 4 -> RECTÁNGULO
3 4 6 -> OBTUSÁNGULO
3 4 7 -> IMPOSIBLE
```

## Ejercicio 3

Realiza un programa que imite a un cajero. El usuario debe introducir el dinero inicial, y luego puede ir retirando (si tiene saldo) y ingresando.

![image-20261001093300244](https://victorponz.github.io/programacion-java/assets/img/java-basico/image-20261001093300244.png)

## Ejercicio 4

Crea un programa que compruebe una contraseña. Si se superan `MAX_INTENTOS`, se bloqueará la cuenta. En otro caso se concederá el acceso. La contraseña se debe fijar en el código y `MAX_INTENTOS` también.

![image-20261001093626608](https://victorponz.github.io/programacion-java/assets/img/java-basico/image-20261001093626608.png)

## Ejercicio 5

Escribe un programa que muestre si un número es primo o no.

Los números primos tienen la siguiente característica: un número primo es solamente divisible por sí mismo y por la unidad, por tanto, un número primo no puede ser par excepto el 2.

Para saber si un número impar es primo, dividimos dicho número por todos los números impares comprendidos entre 3 y la mitad de dicho número.

Por ejemplo, para saber si 13 es un número primo basta dividirlo por 3, y 5. Para saber si 25 es número primo se divide entre 3, 5, 7, 9, y 11. Si el resto de la división (operación módulo %) es cero, el número no es primo.

> En este programa se usará la palabra reservada `break` que permite finalizar un bucle. En este caso, cuando sabemos que un número es divisible ya no hace falta continuar el bucle pues ya sabemos la solución: no es primo.