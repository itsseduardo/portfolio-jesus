# Portfolio — Jesús E. Aguilar

Portfolio construido con React, Vite y Tailwind CSS. El contenido de proyectos está separado de la interfaz para que pueda crecer sin crear nuevas páginas ni componentes.

## Desarrollo

```bash
npm install
npm run dev
```

## Cómo añadir un proyecto

1. Añade una captura optimizada en `public/projects/` (WebP, AVIF o SVG; proporción recomendada 16:8).
2. Añade un objeto a `src/data/projects.js`. La lista, el selector y la vista móvil se generarán automáticamente.

```js
{
  id: '05',
  slug: 'mi-proyecto',
  title: 'Mi proyecto',
  category: 'Categoría · Tipo',
  headline: 'Una frase breve que explique su valor.',
  description: 'Descripción verificable del producto.',
  challenge: 'El problema que debía resolverse.',
  contribution: 'Qué construiste o aportaste.',
  result: 'Resultado verificable, sin métricas inventadas.',
  stack: ['React', 'Node.js'],
  modules: ['Módulo uno', 'Módulo dos'],
  color: '#b9ff66',
  image: '/projects/mi-proyecto.webp',
  deployUrl: 'https://example.com',
  githubUrl: 'https://github.com/usuario/repo',
  featured: false,
}
```

El contrato TypeScript está en `src/types/portfolio.d.ts`; el archivo de datos usa ese tipo mediante JSDoc sin obligar a migrar la app JavaScript existente.

Las imágenes SVG actuales son placeholders visuales. Sustitúyelas conservando las rutas o actualiza la propiedad `image` de cada proyecto. `ayuda-sismo-colombia.webp` y `hogar-cerca.webp` son capturas reales de los productos desplegados. La información técnica de Grupo Médico del Chocó debe completarse cuando exista una fuente verificable.
