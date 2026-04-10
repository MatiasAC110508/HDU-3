# UI Components System

Este proyecto es un sistema de diseño modular y fuertemente tipado creado con **React, TypeScript y Tailwind CSS**. Cumple con principios de alta cohesión y bajo acoplamiento, ideal para escalar interfaces frontend.

## 🚀 Instalación y Ejecución

1. Clona o asegúrate de estar en el directorio del proyecto.
2. Instala las dependencias:
   ```bash
   npm installEjecuta el servidor de desarrollo local:

3. Bash
npm run dev
Abre http://localhost:5173 en tu navegador.

📦 Componentes Disponibles
1. Button (<Button />)
Un componente de botón versátil que soporta estados de carga, íconos y diferentes tamaños/variantes.

Props principales:

text (string, obligatorio): El texto del botón.

variant ("primary" | "secondary" | "danger"): Estilo visual. Default: "primary".

size ("sm" | "md" | "lg"): Tamaño del botón. Default: "md".

loading (boolean): Muestra un spinner si es true.

leftIcon / rightIcon (ReactNode): Íconos opcionales.

2. Badge (<Badge />)
Etiquetas visuales para mostrar estados o categorías.

Props principales:

label (string, obligatorio): Texto del badge.

status ("success" | "warning" | "info" | "error" | "neutral"): Define el color semántico. Default: "neutral".

icon (ReactNode): Ícono opcional a la izquierda del texto.

3. Card (<Card />)
Contenedor principal para agrupar información. Está diseñado para aceptar siempre Badges y opcionalmente una acción en el footer (como un Button).

Props principales:

title (string, obligatorio).

type ("green" | "white" | "black", obligatorio): Define la paleta de colores de la tarjeta.

badges (BadgeProps[], obligatorio): Array de configuraciones para renderizar al menos un <Badge /> dentro de la tarjeta de forma automática.

footer (ReactNode): Área pensada para insertar acciones (botones).

imageUrl (string): Imagen opcional en la cabecera.

🛠️ Tecnologías
React 18

TypeScript (Tipado estricto)

Vite (Bundler)

Tailwind CSS (Estilos)

Lucide React (Íconos)