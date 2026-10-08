
## 📬 La idea en una frase

> **Programar es hablarle a un extraterrestre muy literal: si le dices “saluda”, no lo hace. Tienes que decirle _cómo_, _cuándo_ y _por qué_.**

El ordenador es tonto pero preciso: no interpreta, **ejecuta**. Cada línea, en orden, sin saltarse ninguna. Tu primer programa va a gritar “¡Hola!” por la consola, y a partir de ahí todo es añadir más órdenes.

## 👋 Hola Mundo, el ritual de iniciación

Todo programador empieza por aquí. Es como el primer café de la mañana: no es opcional.

```
public class HolaMundo {    
	public static void main(String[] args) {        
	System.out.println("¡Hola, Mundo! Llevo años esperando a que me crearas.");    }
}
```

Compílalo (`javac HolaMundo.java`) y ejecútalo (`java HolaMundo`), o pulsa el botón ▶ de tu IDE. La consola dirá:

```
¡Hola, Mundo! Llevo años esperando a que me crearas.
```

---
## 🔬 Disección de Hola Mundo

Vamos a diseccionar esto como si fuera una rana en biología:

- `public class HolaMundo`: declaras una clase. Piensa en ello como decirle a Java: “Oye, voy a crear una cosa que se llama `HolaMundo`”. `public` significa que es accesible desde fuera y la clase debe llamarse igual que el archivo.
- `public static void main(String[] args)`: este es el **botón de inicio**. Cuando ejecutas el programa, Java busca esta línea y dice “¡por aquí se empieza!”.
- `System.out.println(...)`: es **la voz** del programa. Le dices que grite algo por la consola. `print` imprime sin salto de línea; `println` imprime y salta de línea.

Ahora vamos a modificar ligeramente nuestro `HolaMundo`y escribimos un nuevo programa con el siguiente código:

```
public class MiPrimerPrograma {    
	public static void main(String[] args) {        
	// Esto es mi primer programa        
		System.out.println("¡Holaaaa, mundo!");        
		System.out.println("Estoy aprendiendo Java");        
		System.out.println("Y me está gustando (de momento)");    
	}
}
```
Ejecútalo y comprueba los resultados.

> 💡 **Detalle práctico:** cada instrucción termina con `;`. Es el punto final de cada frase. Sin él, el compilador piensa que la frase continúa y se lía. Los `{}` delimitan los bloques: los de la clase contienen la clase, los del `main` contienen las órdenes.

![[Pasted image 20261001115935.png]]

## 🗝️ ¿Por qué `public static void main(String[] args)`?

Desmenucemos cada palabra:

| Palabra         | Qué significa                                                          |
| --------------- | ---------------------------------------------------------------------- |
| `public`        | Java puede encontrarlo desde fuera: el botón es visible                |
| `static`        | Puede llamarse sin necesidad de crear un objeto (se verá más adelante) |
| `void`          | No devuelve ningún valor: hace su trabajo y punto.                     |
| `main`          | El nombre exacto que Java busca al arrancar. **No vale otro**          |
| `String[] args` | Un bolsillo donde puedes meter argumentos al ejecutar.                 |

La firma es **obligatoria tal cual**. Si cambias `main` por `inicio`, Java no encuentra la puerta y el programa no hace nada.

## 🚪 El método que no se llama

Aquí va una de las trampas favoritas en los exámenes. Observa:

```
public class Saludos {    
	public static void main(String[] args) {        
		System.out.println("¡Hola desde el método main!");    
		}
    public static void saludo() {        
	    System.out.println("Esto nunca se ejecuta...");    
	    }
}
```

¿Se ejecutará correctamente? **Sí**, pero solo imprime la primera línea. El método `saludo()` existe, pero como nunca lo llamas desde `main`, se queda ahí haciendo el vago. Java solo ejecuta lo que está dentro del `main` (a no ser que explícitamente llames a otros métodos). El método `saludo()` es como un actor que tiene el guion aprendido pero nunca sale al escenario.

> 🧠 **Truco de memoria:** `main` es la puerta de entrada de la casa. Puede haber muchas habitaciones (métodos), pero nadie entra por la ventana. Si no llamas a la puerta, las habitaciones se quedan vacías.

---
## ⭐ Sé el Código: tú eres la JVM

Vas a ser Java por un momento. Coge papel y boli (o mentalmente). Te dan este código:

```
public class Computadora {    
	public static void main(String[] args) {        
		int x = 5;        
		int y = 10;        
		int z = x + y;        
		System.out.println("El resultado es: " + z);    
	}
}
```

Sigue los pasos como si fueras la JVM:

1. Encuentras la clase `Computadora`.
2. Buscas el método `main` — ahí está.
3. Creas un espacio llamado `x` y metes un 5.
4. Creas `y` y metes un 10.
5. Creas `z`, sumas `x` e `y` (15), lo guardas.
6. Gritas por pantalla: “El resultado es: 15”.

## ✅ Resumen en 3 frases

1. Todo programa tiene una **clase** (contenedor) y un **método `main`** (puerta de entrada).
2. `System.out.println()` es la voz del programa; `;` es el punto final de cada frase.
3. La JVM ejecuta **línea a línea, en orden**: tú decides qué entra por la puerta.


 🐛 **Vocabulario rápido**

| Término | Idea general                                   |     |
| ------- | ---------------------------------------------- | --- |
| Clase   | El contenedor del código (una “cosa” en Java)  |     |
| Método  | Un bloque de órdenes con nombre                |     |
| main    | El método que Java ejecuta al arrancar         |     |
| println | Imprime texto y salta de línea                 |     |
| Consola | La ventana de texto donde se imprime la salida |     |


