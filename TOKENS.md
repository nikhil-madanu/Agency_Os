# Agency OS — Design Tokens

## Colors

### Background Scale
```
--bg-base:        #F0F2F8   /* page background — cool blue-grey */
--bg-surface:     #FFFFFF   /* cards, panels */
--bg-surface-2:   #F7F8FC   /* subtle inner areas, table rows alt */
--bg-sidebar:     #FFFFFF   /* sidebar bg — white with left border */
```

### Brand / Accent
```
--accent:         #2563EB   /* primary blue — buttons, active nav, links */
--accent-light:   #EEF3FF   /* accent tint — chip bg, badge bg */
--accent-hover:   #1D4ED8   /* button hover */
```

### Text Scale
```
--text-primary:   #0F172A   /* headings, important values */
--text-secondary: #64748B   /* labels, meta, placeholder */
--text-tertiary:  #94A3B8   /* disabled, hints */
--text-on-accent: #FFFFFF   /* text on blue buttons */
```

### Status Colors
```
--success:        #16A34A   /* green — positive trend, paid, on-track */
--success-bg:     #F0FDF4
--warning:        #F59E0B   /* amber — at risk, pending */
--warning-bg:     #FFFBEB
--danger:         #DC2626   /* red — overdue, blocked, error */
--danger-bg:      #FEF2F2
--info:           #0EA5E9   /* light blue — informational */
--info-bg:        #F0F9FF
```

### Border
```
--border:         #E2E8F0   /* standard card/input border */
--border-strong:  #CBD5E1   /* dividers, table lines */
```

### Sidebar Active State
```
--nav-active-bg:  #EEF3FF   /* active nav item background */
--nav-active-text:#2563EB   /* active nav item text/icon */
--nav-hover-bg:   #F8FAFC
```

---

## Typography

### Font Stack
```
Display / Headings:   "Space Grotesk", sans-serif   (weight 700)
Body / UI:            "DM Sans", sans-serif          (weight 400, 500)
Data / Numbers:       "DM Mono", monospace           (weight 400, 500)
```

### Type Scale
```
--text-xs:    11px / 16px    /* badges, timestamps, helper text */
--text-sm:    13px / 20px    /* labels, table data, nav items */
--text-base:  14px / 22px    /* body, card content */
--text-md:    16px / 24px    /* section titles, card headers */
--text-lg:    20px / 28px    /* page titles */
--text-xl:    24px / 32px    /* metric values (mid-size) */
--text-2xl:   32px / 40px    /* hero metric values */
--text-3xl:   40px / 48px    /* large dashboard numbers */
```

### Font Weights
```
400  regular  — body text, descriptions
500  medium   — nav labels, card labels, button text
600  semibold — card titles, section headers
700  bold     — page titles, metric values (Space Grotesk only)
```

### Number Rendering
All metric numbers (₹82.4K, 72,52%) use DM Mono, weight 500.
Comma-separated European-style decimals as shown in design (72,52% not 72.52%).

---

## Spacing

### Base unit: 4px

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
```

### Card Internal Padding
```
Card padding:         20px 24px
Card header padding:  16px 24px
Table cell padding:   12px 16px
Sidebar item:         10px 16px
```

---

## Border Radius

```
--radius-sm:   6px    /* badges, chips, tags */
--radius-md:   10px   /* inputs, small cards */
--radius-lg:   14px   /* main cards, panels */
--radius-xl:   20px   /* modals, large panels */
--radius-full: 9999px /* avatar, pill badges */
```

---

## Shadows

```
--shadow-xs:  0 1px 2px rgba(15,23,42,0.04)
--shadow-sm:  0 2px 8px rgba(15,23,42,0.06)
--shadow-md:  0 4px 16px rgba(15,23,42,0.08)
--shadow-lg:  0 8px 32px rgba(15,23,42,0.12)
```

Cards use --shadow-sm by default. Hover state elevates to --shadow-md.

---

## Layout

### Grid
```
Sidebar width:     220px (fixed)
Top bar height:    60px  (fixed)
Content padding:   24px
Card gap:          16px
Column gap:        20px
```

### Breakpoints
```
Desktop:   1280px+   (primary — design is desktop-first)
Laptop:    1024px
Tablet:    768px
```

### 3-Column Dashboard Grid
Main content splits into:
- Left (wide):   ~60% for metrics, lists
- Right (narrow):~38% for AI panel, activity feed
- Card row:      repeat(4, 1fr) for stat cards

---

## Iconography

Library: **Lucide Icons** (outlined, 18px default, stroke-width: 1.5)
Nav icons: 18px
Card icons: 16px
Action icons: 14px
Status icons: 12px

---

## Transitions

```
--transition-fast:   150ms ease
--transition-base:   200ms ease
--transition-slow:   300ms ease-in-out
```

Hover states use --transition-fast.
Page transitions / panels use --transition-slow.
