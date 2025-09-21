# ALICTIVA Frontend

Interfaz creada con Next.js (App Router), Tailwind CSS v4 y componentes inspirados en shadcn/ui para la marca Alictiva.

## Comandos
- `npm run dev`: inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run build`: compila la app para producción.
- `npm run start`: ejecuta la compilación generada.
- `npm run lint`: corre las reglas de ESLint.

## Deploy en GitHub Pages

La app está preparada para exportar estáticamente y publicar en GitHub Pages.

1) Crea el repo en tu cuenta (ej: `kennykrass/alictiva`) y sube el código:

```
git init
git branch -M main
git remote add origin git@github.com:kennykrass/alictiva.git
git add -A
git commit -m "init: Alictiva web"
git push -u origin main
```

2) La acción `.github/workflows/deploy.yml` compila y publica en Pages.
   - Se ejecuta en cada push a `main`.
   - Publica el directorio `out` generado por `next build`.

3) Activa Pages en tu repo:
   - Settings → Pages → Source: GitHub Actions.

4) URL de prueba (sin dominio): `https://kennykrass.github.io/<nombre-del-repo>/`.
   - La configuración detecta el nombre del repo y ajusta `basePath`/`assetPrefix` automáticamente.

5) Dominio propio (opcional):
   - En Settings → Pages puedes añadir tu dominio (CNAME).
   - Si usas dominio propio, no necesitas `basePath` adicional.


## Personalizar la paleta
Los colores principales viven como variables CSS en `src/app/globals.css` (sección `:root` y `.dark`). Cambia los valores HEX y, si es necesario, ajusta los tonos de hover definidos en los componentes (`src/components/ui/button.tsx`) para mantener el contraste AA.

## Estructura destacada
- `src/app`: rutas App Router, con landing y secciones (`(rutas)/productos`, `recetas`, `historia`, `contacto`).
- `src/components`: Navbar, Hero, tarjetas y formularios reutilizables.
- `src/data`: catálogos estáticos de salsas y recetas.
- `tailwind.config.ts`: tokens de tema y escala de picor para las utilidades Tailwind.

## Accesibilidad y UI
- Navegación mobile con `Sheet`, enlaces accesibles y focus visibles.
- Componentes `Button` y `Badge` consumen los tokens (`--primary`, `--secondary`, etc.).
- Formularios con labels y mensajes de confirmación sin backend.
