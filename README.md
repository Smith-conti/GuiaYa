# GuiaYa

Landing informativa para descubrir destinos, paisajes y cultura de Cusco y Machu Picchu. Está construida con React, TypeScript y Vite, e incluye un widget flotante de Chatbase para consultas conversacionales.

## Sitio publicado

[Visita GuiaYa](https://guia-ya.vercel.app/)

> **Aviso:** esta página tiene únicamente fines educativos e informativos. El asistente virtual utiliza inteligencia artificial y puede equivocarse; verifica información importante para tu viaje con fuentes oficiales.

## Funcionalidades

- Diseño responsive para móviles, tablets y escritorio.
- Navegación por secciones: inicio, destinos y contenido informativo sobre Cusco.
- Tema claro y oscuro, con preferencia guardada en el navegador.
- Widget flotante de Chatbase.
- Metadatos para buscadores y redes sociales, favicon y año del footer actualizado automáticamente.

## Tecnologías

- React y TypeScript
- Vite
- Tailwind CSS y CSS personalizado
- Lucide React
- Chatbase Embed

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`
- npm

## Instalación y desarrollo

Clona el repositorio, entra en la carpeta del proyecto e instala las dependencias:

```bash
npm ci
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local en la terminal. Usa `Ctrl+C` para detener el servidor.

## Compilación

Verifica TypeScript y crea la versión de producción:

```bash
npm run build
```

Los archivos compilados se guardan en `dist/`. Para previsualizarlos localmente:

```bash
npm run preview
```

## Despliegue en Vercel

Puedes importar el repositorio en Vercel o desplegarlo desde la CLI de Vercel. Configuración del proyecto:

| Opción | Valor |
| --- | --- |
| Framework preset | Vite |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

No se requieren variables de entorno para compilar la landing. El widget de Chatbase y algunas fotografías se cargan desde servicios externos, por lo que requieren conexión a internet en el navegador.

## Estructura del proyecto

```text
src/
├── components/       Componentes de navegación, destinos y secciones
├── data/             Contenido de las tarjetas de destinos
├── hooks/            Preferencias de tema
├── App.tsx           Composición de la landing
└── index.css         Estilos, paleta y breakpoints responsive
index.html            Metadatos y script del widget Chatbase
public/               Favicon y recursos estáticos
```

## Temas

La primera visita respeta la preferencia de color del sistema operativo. El usuario puede cambiar entre modo claro y oscuro; la selección se conserva en `localStorage`.
