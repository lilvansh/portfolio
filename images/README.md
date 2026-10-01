# Portfolio images

Replace or add assets using this structure:

```text
public/images/
  profile/
  projects/
    project-id/
      cover.webp
      screenshot-01.webp
      architecture.svg
  experience/
  organizations/
```

Reference paths without a leading slash in the data files, for example:

```ts
coverImage: 'images/projects/project-id/cover.webp'
```

The `withBase()` helper automatically keeps assets working at both a custom domain and a GitHub Pages repository subpath.

## Recommended formats

- Photographs and screenshots: AVIF or WebP
- Diagrams and interface illustrations: SVG when practical
- Add explicit, descriptive alt text in the corresponding data object
- Resize images before adding them; do not upload camera originals directly
