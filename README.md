# GuiaYa

Landing informativa para descubrir destinos, paisajes y cultura de Cusco y Machu Picchu. Incluye un asistente conversacional flotante de Chatbase.

> Esta página tiene únicamente fines educativos e informativos. El asistente virtual utiliza inteligencia artificial; verifica la información importante antes de viajar.

## Tecnologías

- React y TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Chatbase Embed para el widget flotante

## Requisitos

- Node.js compatible con la versión de Vite instalada
- npm

## Ejecutar localmente

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir el sitio.

## Compilar y previsualizar

Genera la versión de producción:

```bash
npm run build
```

Los archivos listos para publicar quedan en `dist/`. Para previsualizar esa compilación localmente:

```bash
npm run preview
```

## Despliegue en Vercel

Importa el repositorio en Vercel y usa esta configuración:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

La landing no necesita variables de entorno. El widget de Chatbase carga su script desde `www.chatbase.co` en el navegador.

## Estructura principal

```text
src/
  components/   Secciones y componentes de la interfaz
  data/         Contenido de destinos
  hooks/        Preferencias de tema
  App.tsx       Composición de la página
  index.css     Estilos, temas y diseño responsive
index.html      Metadatos y carga del widget de Chatbase
public/         Favicon y recursos estáticos
```

## Tema

El sitio detecta la preferencia del sistema operativo en la primera visita y permite alternar entre modo claro y oscuro. La selección se guarda en `localStorage`.
