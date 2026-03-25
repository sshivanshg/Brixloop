# Brixloop color palette & usage

Official brand colors and how they map to the site (aligned with a dark, high-contrast product UI: black base, gray structure, **branding orange** for action and emphasis).

## Core tokens

| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Branding orange** | `#E85002` | 232, 80, 20 | Primary accent — CTAs, active nav, badges, focus rings, highlights |
| **Primary (black)** | `#000000` | 0, 0, 0 | Page background, deepest layer |
| **White** | `#F9F9F9` | 249, 249, 249 | Main body text, headings on dark, text on orange buttons |
| **Gray** | `#646464` | 100, 100, 100 | Tertiary UI, chart series, de-emphasized data |
| **Light gray** | `#A7A7A7` | 167, 167, 167 | Secondary copy, labels, captions, inactive nav |
| **Dark gray** | `#333333` | 51, 51, 51 | Cards borders, inputs, secondary surfaces, subtle hovers |

## Branding gradient

Use for bands, dividers, or decorative emphasis (not for long-form text):

| Step | HEX |
|------|-----|
| 1 | `#000000` |
| 2 | `#C10801` |
| 3 | `#F16001` |
| 4 | `#D9C3A8` |

**CSS utilities** (in `app/globals.css`):

- `.bg-brand-gradient` — horizontal gradient
- `.bg-brand-gradient-vertical` — vertical gradient
- `.text-gradient-brand` — gradient text (headline accents)

## How we use them (same idea as bold dark-mode product UIs)

1. **Black (`#000000`)** — Full-page background so type and orange feel sharp and premium.
2. **Dark gray + slightly lifted surfaces (`#333333`, `#1A1A1A` cards)** — Depth without heavy shadows; separates panels from the black field.
3. **Branding orange (`#E85002`)** — Reserved for **actions and priority**: primary buttons (“Start creating”, “Start free trial”), “Most popular” / “Save %” chips, pricing hero CTA, focus rings. Keeps the brand feeling **bold and audacious**.
4. **White (`#F9F9F9`)** — Headlines, key numbers, and primary reading on dark. **Light gray** for supporting text so hierarchy stays clear.
5. **Inverse band** — One light section (e.g. How it works) uses **white background + black text** for contrast and rhythm.

## Code mapping

| Token | CSS variable | Tailwind (examples) |
|-------|----------------|---------------------|
| Orange | `--primary`, `--brand-orange` | `bg-primary`, `text-primary`, `bg-brand-orange` |
| Black | `--background`, `--brand-black` | `bg-background`, `bg-brand-black` |
| Off-white | `--foreground`, `--brand-white` | `text-foreground`, `bg-brand-white` |
| Mid gray | `--brand-gray` | `text-brand-gray` |
| Light gray | `--muted-foreground`, `--brand-light-gray` | `text-muted-foreground` |
| Dark gray | `--border`, `--secondary`, `--brand-dark-gray` | `border-border`, `bg-secondary` |

## Design intent (brand line)

> Sophisticated grays structure the UI; vibrant branding orange signals confidence and stands out from generic competitors.

When adding new UI: default to **gray structure + white type**; add **orange only** where you want clicks, status, or “look here first.”
