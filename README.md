# ✈️ Actividad de Práctica: Cotizador Express (Agencia de Viajes)

Bienvenido al repositorio plantilla para tu actividad de repaso de cara al tercer parcial. Sigue las instrucciones detalladas a continuación para aprender el flujo de trabajo con Git, configurar tu entorno y completar los requerimientos del sistema.

---

## 🚀 Paso 1: Configuración de tu Entorno (Primeros 10 minutos)

1. En la parte superior de esta página de GitHub, haz clic en el botón verde **"Use this template"** (Usar esta plantilla) y selecciona **"Create a new repository"**.
2. Nombra tu nuevo repositorio exactamente como: `practica-viajes-tuNombreTuApellido` (ej. `practica-viajes-JuanPerez`).
3. Asegúrate de que la visibilidad del repositorio sea **Público**.
4. Haz clic en **"Create repository"**.
5. Clona **tu nuevo repositorio** en tu computadora local y ábrelo con Visual Studio Code.

> ⏱️ **A partir de este momento, cuentas con 25 minutos para resolver los siguientes requerimientos técnicos.**

---

## 📋 Requerimientos Técnicos de la Actividad

El proyecto actual cuenta con una estructura base funcional, pero se le han retirado intencionalmente controles y bloques de código en la sección de **"Cotización Individual"** que debes completar:

### 1. 🏗️ Estructura del Formulario (HTML5)
Busca la sección **"Cotización Individual"** dentro de tu archivo `index.html` y realiza las siguientes adiciones:
* **[1A] Nueva opción de vuelo (Radio Button):** Añade un tercer botón de tipo radio dentro de la sección de opciones de vuelo. La etiqueta visible debe ser `Avión de IDA y VUELTA ($5,999 MXN)`. Asegúrate de que comparta el atributo `name="vuelo"` con los demás radios del grupo y asígnale el atributo `value="ida-vuelta"`.
* **[1B] Ampliación de huéspedes (Select / Option):** El menú desplegable de adultos (`<select id="adultos">`) actualmente solo permite elegir 1 o 2 adultos. Añade las etiquetas `<option>` faltantes para permitir la selección de **3, 4 y 5 Adultos**, asignándoles a cada una su respectivo valor numérico en el atributo `value`.

### 2. 🎨 Corrección de Diseño (CSS Flexbox)
* **[2] Alinear la barra de países:** Abre tu archivo `style.css` y busca la clase `.countries-bar`. Actualmente tiene asignado un estilo `display: block;` que hace que los nombres de los países se vean amontonados en una lista vertical rígida. Cambia su comportamiento a **Flexbox** (`display: flex`) para que los elementos se organicen horizontalmente de forma automática y distribuye el espacio de manera uniforme.

### 3. ⚙️ Programación de la Lógica (JavaScript)
Abre tu archivo `script.js` y concéntrate exclusivamente en la función llamada `calcularIndividual()`:
* **[3A] Estructura condicional:** Añade el bloque `else if` faltante para evaluar si el usuario ha seleccionado la opción de vuelo `"ida-vuelta"`. Si la condición es verdadera, debes sumar de forma matemática el costo de **$5,999 MXN** al acumulador del `total`.
* **[3B] Pruebas de funcionamiento:** Guarda todos tus archivos, abre el proyecto en el navegador y verifica que al cambiar las opciones de adultos, días y vuelos combinados, el botón **"Calcular Cotización"** arroje el resultado matemático correcto en la pantalla.

---

## 📦 Paso 3: Entrega de la Actividad (Últimos 10 minutos)

Una vez que hayas verificado que el cotizador calcula los montos de forma exacta en el navegador:

1. Guarda todos tus cambios en Visual Studio Code.
2. Abre la terminal e ingresa los comandos de Git correspondientes para subir tus archivos modificados a tu repositorio en la nube:
Resultado de código
README_PRACTICA.md creado exitosamente.

```bash
   git add .
   git commit -m "Práctica finalizada - Repaso Parcial"
   git push origin main