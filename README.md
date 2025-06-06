# Comandos básicos para ejecutar proyecto

npm install
npm run dev
npm run storybook

# Fintech PricingTierCard Component

Este componente representa una tarjeta de plan de precios reutilizable y visualmente atractiva usando React + Typescript + TailwindCSS.
A continuación se detalla la estructura y decisiones de diseño y desarrollo:

## Estructura del componente

**Props:** Recibe un objeto `plan` que contiene:
- `planName`
- `price`
- `features`
- `isFeatured`
- `ctaText`

**Decisiones:**
- Optamos por mantener un solo componente (sin subcomponentes) ya que es una unidad semántica coherente y no compleja.
- Sin embargo, se encapsuló cierta lógica visual como `getFeatureStyleCard` para mejorar la legibilidad y permitir fácil extensión futura (por ejemplo si se desea resaltar más de una condición visual)
- Se utilizó tipado escricto con TS para garantizar integridad con las props y así mismo también facilitar el desarrollo con StoryBook.


## Estrategia con TailwindCSS

**Desafíos principales:**
- La cantidad de clases de TailwindCSS puede afectar la legibilidad cuando se usa tan seguido y más si el componente o vista se extiende (nuevos diseños/cambios);
- Las clases condicionales con `plan.isFeatured` requerían lógica explicita para mantener el código mantenible.
- Storybook no aplica los estilos al instalarse, hay que configurar manual, y si uno no sabe donde hacerlo funcionar, todo lo realizado con TailwindCSS no funcionará.

**Soluciones aplicadas**
- Para la cantidad de clases de TailwindCSS es preferible usar el @apply dentro clases propias con metodología BEM para mayor legibilidad y con SASS, pero como en éste caso no se permitían archivos css o sass (exceptuando claramente el css que es requerido parar traer las clases de TailwindCSS), por ende se omitió el @apply pero se dio un ejemplo del mismo.
- Agrupación de clases mediante una función llamada `getFeatureStyleCard` para resolver el desafio del `plan.isFeatured`
- Se crearon variable de colores como `color-viio-primary`, `color-viio-secondary`, etc., centralizadas para el diseño solicitado, con tags de VIIO.
- Se resolvió los estilos de TailwindCSS en el storybook incluyendo (import) el archivo `src/index.css` directamente en `.storyboook/preview.ts`.

## Compromisos (Trade-offs)

**HTML Semántico:**
- Se reemplazó la etiqueta genérica `<div>` que envolvía todo el contenido por un `<main>` para indicar el contenido principal de la vista.
- Se envolvieron las tarjetas de los planes dentro de una etiqueta `<section>` con `aria-label="Available pricing plans"`, ayudandando a lectores de pantalla a entender mejor la agrupación.
- El encabezado principal se definió como `<h1>` para establecer una jerarquía clara

**TailwindCSS vs SCSS o CSS**
Alternativas como `styled-components` y uso de SCSS podrían facilitar la legibilidad de los componentes, pero se optó por seguir usando TailwindCSS por velocidad, consistencia y por respeto a los requisitos solicitar para este proyecto

**Reutilización vs Simplicidad**
No se dividió en subcomponentes como `<PricingFeature>` o `<PricingHeader>` ya que no hay suficiente complejidad que lo justifique. Si el componente escala en algún momento o se duplica en otas vistas, esta decisión claramente puede cambiar, pero de momento solo se realizó un componente legible de acuerdo a los requerimientos.

**Sistema responsive**

No estaba especificado en los requermientos un sistema reponsivo, pero por lo general viene implicito en los proyectos de ésta indole, por ende se realiza para las diferentes pantallas con las clases de TailwindCSS y sus break points de responsive min, max, md-lg, etc.

## Storybook

Se integró Storybook para visualizar múltiples variaciones del componente:
- Default
- Featured
- Variación con datos diferentess
- Free, casos en el que el valor sea 0
