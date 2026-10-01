Un proyecto Java **Maven es una aplicación estructurada que utiliza la herramienta [Apache Maven](https://maven.apache.org/) para automatizar la gestión de dependencias y el proceso de compilación del código.

---
## Estructura y ficheros que lo componen

Un proyecto Maven sigue una estructura de directorios estándar y predecible:

- **`pom.xml`**: Es el archivo principal de configuración (Project Object Model). Está en la raíz del proyecto.

- **`src/main/java`**: Contiene el código fuente de la aplicación (las clases de Java organizadas en paquetes).

- **`src/main/resources`**: Contiene los archivos de configuración o recursos estáticos (como archivos `.properties`, imágenes o JSON).

- **`src/test/java`**: Contiene el código de las pruebas unitarias (JUnit, por ejemplo).

- **`src/test/resources`**: Recursos específicos para las pruebas.

- **`target/`**: Carpeta generada automáticamente por Maven donde se guardan los archivos compilados y el resultado final (como el archivo `.jar` o `.war`).

## Cómo se configura el fichero `pom.xml`

El archivo `pom.xml` está escrito en XML y define toda la identidad, dependencias y comportamiento del proyecto. Los elementos esenciales son:

- **Identificación básica:**
    - `groupId`: Define el grupo o empresa (ejemplo: `com.miempresa`).
    - `artifactId`: Es el nombre único del proyecto o módulo (ejemplo: `miproducto`).
    - `version`: La versión actual del software (ejemplo: `1.0.0`).

- **Gestión de dependencias (`<dependencies>`):**
    - Sirve para añadir librerías externas de forma automática (como Spring Boot, MySQL o JUnit).
    - Maven las descarga de un repositorio central a tu ordenador.

- **Plugins y compilación (`<build>`):**
    - Define cómo se compila el proyecto y qué versión de Java se utiliza.

### Ejemplo básico de un `pom.xml`:
```
<project xmlns="http://apache.org"
         xmlns:xsi="http://w3.org"
         xsi:schemaLocation="http://apache.org http://apache.org">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.ejemplo</groupId>
    <artifactId>mi-proyecto</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>
        <!-- Ejemplo de dependencia para pruebas -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.9.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
