---
name: Azure Ethereal
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#43474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#005eb2'
  on-secondary: '#ffffff'
  secondary-container: '#4597fe'
  on-secondary-container: '#002e5d'
  tertiary: '#00070b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00222d'
  on-tertiary-container: '#2891b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3b'
  on-secondary-fixed-variant: '#004788'
  tertiary-fixed: '#baeaff'
  tertiary-fixed-dim: '#76d2f6'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d62'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
The design system embodies a "Contemporary Luxury" aesthetic, specifically tailored for a premium cosmetics brand. The brand personality is authoritative yet refreshing, bridging the gap between scientific efficacy and high-end indulgence. 

The visual style leans into **Minimalism** with a **Glassmorphic** touch. It prioritizes vast amounts of "negative space" to evoke a sense of calm and clarity, characteristic of luxury skincare and fragrance houses. The emotional response should be one of immediate trust and aspiration, achieved through a sophisticated balance of deep, grounding tones and airy, luminous accents.

## Colors
The palette is a monochrome exploration of blue, anchored by deep navy for professional authority and electrified by cobalt for modern energy.

- **Primary (Deep Navy):** Used for typography, navigation backgrounds, and primary action states to provide weight and premium contrast.
- **Secondary (Electric Blue):** Utilized for active states, highlights, and secondary call-to-actions to add a refreshing, technological edge.
- **Tertiary (Sky Blue):** Employed for subtle backgrounds, secondary chips, and soft iconography.
- **Accent (Gold):** Used sparingly for "Premium" or "Limited Edition" badges, high-end iconography, and divider ornaments.
- **Background (Cream/Off-white):** The canvas for all content, providing a softer, more luxurious feel than pure white.

## Typography
The typography system uses a high-contrast pairing to distinguish between "The Brand" (Serif) and "The Utility" (Sans).

**Playfair Display** is the editorial voice. It should be used for large marketing headlines and product names. Tighten the letter spacing on larger sizes to maintain a sophisticated, boutique feel.

**Inter** provides the functional backbone. Its neutral, systematic nature ensures that technical product details, ingredients, and checkout flows remain legible and professional. Labels and small headers should utilize all-caps with generous tracking to emulate the branding found on luxury product packaging.

## Layout & Spacing
This design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

The spacing philosophy is "Airy & Intentional." Use `xxl` spacing for vertical section padding to emphasize exclusivity. Elements within a component (like a product card) should use the `md` (16px) increment, while the distance between distinct sections should never fall below `xl` (48px). All measurements are based on a 4px baseline grid to ensure mathematical harmony.

## Elevation & Depth
Depth is created through **Tonal Layers** and **Glassmorphism** rather than heavy shadows.

- **Surface 0:** The Cream/Off-white base background.
- **Surface 1:** Pure white containers for product cards or modals, using a very soft, diffused shadow (0px 4px 20px, 4% opacity Navy).
- **Overlay Layer:** Uses Backdrop Blurs (12px - 20px) on semi-transparent Sky Blue surfaces (#7FDBFF with 40% opacity) for navigation bars or promotional banners. 
- **The Glow:** High-priority elements may use a subtle Electric Blue outer glow (0px 0px 15px) instead of a shadow to evoke a "refreshing" and luminous quality.

## Shapes
The shape language is **Soft**. Sharp edges are avoided to maintain an approachable "skin-friendly" vibe, but overly rounded or pill shapes are also avoided to ensure the brand stays professional and high-end. 

- **Standard Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Modals:** 8px (0.5rem) corner radius.
- **Images:** Should always use a slight 4px rounding to prevent a harsh "cut" against the soft background.

## Components

- **Buttons:** Primary buttons are Solid Navy with White text. Secondary buttons are Ghost-style with a Navy border. Action buttons use a subtle "Gold" underline or an Electric Blue hover state.
- **Product Cards:** Minimalist white containers. No borders. Large imagery at the top, followed by a Playfair Display title and an Inter price label.
- **Input Fields:** Bottom-border only (line-style) to mimic architectural blueprints, using a 1px Navy stroke. Focused states transition the stroke to Electric Blue.
- **Chips/Badges:** Small, all-caps labels with a light Sky Blue background and Navy text. These are used for "New," "Vegan," or "Organic" markers.
- **Navigation:** A fixed top bar with a glassmorphic blur. Navigation links use `label-md` styling with an animated Navy underline on hover.
- **Accordions:** Used for ingredient lists or FAQ. Use 1px hairline dividers in a muted Sky Blue tone to keep the UI light.