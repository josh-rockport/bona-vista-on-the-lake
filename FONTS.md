# Font Files

The project uses local fonts stored in the `public/fonts/` folder instead of Google Fonts.

## Required Font Files

Place the following font files in the `public/fonts/` directory:

### Bebas Neue (in `public/fonts/bebas-neue/`)
- `bebas-neue-v14-latin-regular.woff` (weight: 400)
- `bebas-neue-v14-latin-700.woff` (weight: 700)

### Oswald (in `public/fonts/oswald/`)
- `oswald-v50-latin-300.woff` (weight: 300)
- `oswald-v50-latin-regular.woff` (weight: 400)
- `oswald-v50-latin-700.woff` (weight: 700)

## Supported Formats

The project currently uses:
- `.woff` (Web Open Font Format) - optimal for web delivery

Other supported formats:
- `.woff2` (Web Open Font Format 2) - recommended for best compression
- `.ttf` (TrueType Font)
- `.otf` (OpenType Font)

## Font Naming Convention

Update the font file paths in `app/layout.tsx` if you use different filenames or formats.

## Getting Fonts

You can obtain fonts from:
- Google Fonts (https://fonts.google.com/) - Playfair Display and Lato are available
- Font libraries like Fontsquirrel, DaFont, etc.
- Your own custom font files

## Current Configuration

The layout currently expects:
- **Display font (headings)**: Bebas Neue
- **Sans-serif font (body)**: Oswald

These fonts can be adjusted in `app/layout.tsx` and `app/globals.css`.
