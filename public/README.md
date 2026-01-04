# Public Assets Directory

This directory contains static assets that are served directly by Next.js.

## Directory Structure

### `/logos`
Contains RisingGen logo files in various formats:
- `logo.svg` - Main logo (SVG format, recommended)
- `logo.png` - Logo in PNG format
- `logo-white.svg` - White version for dark backgrounds
- `logo-icon.svg` - Icon-only version

### `/favicons`
Contains favicon files and app icons:
- `favicon.ico` - Browser favicon
- `favicon-16x16.png` - 16x16 favicon
- `favicon-32x32.png` - 32x32 favicon
- `apple-touch-icon.png` - Apple touch icon (180x180)
- `android-chrome-192x192.png` - Android icon
- `android-chrome-512x512.png` - Android icon (larger)

### `/images`
Contains general image assets:
- Event placeholder images
- Hero backgrounds
- UI graphics

## Usage in Next.js

Reference these files in your components:

```tsx
import Image from 'next/image';

// Logo example
<Image src="/logos/logo.svg" alt="RisingGen" width={200} height={50} />

// Favicon in layout.tsx
<link rel="icon" href="/favicons/favicon.ico" />
```

## Best Practices

1. **Optimize images** before adding them here
2. **Use SVG** for logos when possible (scalable, smaller file size)
3. **Provide multiple sizes** for favicons to support all devices
4. **Use descriptive names** for easy identification
5. **Keep file sizes small** for better performance
