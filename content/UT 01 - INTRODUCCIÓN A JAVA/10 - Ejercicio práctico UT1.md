## ⚡ Laboratorio de tortura: el programa que cobra mal

> **Duración estimada:** 30 minutos **Herramienta:** tu IDE y un archivo nuevo

**El escenario:** copia este programa en tu IDE y haz que funcione. Es un cajero que calcula cuántos billetes de 5 € te da el banco por un reintegro. Tiene **3 errores** que impiden que compile y 1 error de lógica que hace que el resultado sea incorrecto cuando lo arregles.

```JAVA
import java.util.Scanner;

public class Tortura {    
	public static void main(string[] args)        
		Scanner sc = new Scanner(System.in);        
		System.out.print("Cantidad a retirar: ");        
		int cantidad = sc.nextInt()        
		double billetes5 = cantidad / 5.0;        
		System.out.println("Te dan " + billetes5 + " billetes de 5");        
		sc.close();    
	}
}
```

**Fallo intencionado:** uno de los errores parece correcto a simple vista porque “se ve bien”, pero cambia por completo la salida del programa.

**Tu tarea:** conseguir que compile, que ejecute y que **toda** la salida sea correcta. Prueba con `cantidad = 17`: ¿cuántos billetes de 5 deberían ser?

## 🧠 Atrévete a pensar

1. **Sin ejecutar:** ¿qué imprime este programa?

```JAVA
public class Misterio2 {    
	public static void main(String[] args) {        
		int a = 10;        
		int b = 3;        
		System.out.println("a/b = " + a / b);        
		System.out.println("a/b real = " + (double) a / b);
		System.out.println("a%b = " + a % b);    
	}
}
```

2. **El precio que no cuadra:** un programa calcula `double total = precio * 0.21;` con `precio = 100` y muestra `21.000000000000004`. ¿Qué le pasa a Java? ¿Cómo lo arreglarías solo con herramientas de esta unidad?
    
3. **El ternario encadenado:** escribe un ternario (o varios encadenados) que asigne a `categoria` el valor `"niño"`, `"adulto"` o `"jubilado"` según si la edad es `< 12`, `< 65` o `>= 65`.
    
4. **Verdadero o falso:** “`Math.random() * 5` puede devolver el número 5.” Justifica.