# Rosh's Portfolio

Rosh's Portfolio is a simple, clean, beginner-friendly portfolio template. It supports an MDX-based content system for projects and blog posts, an about / CV page and a gallery.

View the demo [here](https://roshingel.netlify.app/).

![Rosh's Portfolio](public/images/og/home.png)

## Getting started

**1. Clone the repository**
```
git clone https://github.com/CutieJi/roshingel.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/resources/once-ui.config.js
```

**5. Edit content**
```
src/resources/content.js
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

Rosh's Portfolio was built with [CutieJi](https://github.com/CutieJi/) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Documentation

Docs available at: [Blog](https://roshingel.netlify.app/blog/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Rosh's Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Rosh Ingel: [Facebook](https://facebook.com/@roshuaz.xo) / [Github](https:/github.com/CutieJi/)

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.

See `LICENSE.txt` for more information.
