# Agency OS — Component Patterns

Reference TOKENS.md for all values. Never hardcode colors/spacing.

---

## Sidebar

```
Width: 220px, fixed left
Background: --bg-surface
Right border: 1px solid --border
Padding: 20px 0

Top section:
  Logo + "Agency OS" text: padding 0 20px 20px
  Plan badge: Space Grotesk 11px, --accent, --accent-light bg, radius-full, px-8 py-2
  Divider: 1px --border, mx-16

Avatar section:
  Avatar 32px circle, name --text-primary 13px 500, role --text-secondary 11px
  Online dot: 8px, #16A34A, absolute bottom-right of avatar
  Padding: 12px 16px

Nav item (default):
  padding: 10px 16px
  icon: 18px --text-secondary
  label: 13px 500 --text-secondary
  border-radius: 8px, mx-8
  hover: --nav-hover-bg

Nav item (active):
  background: --nav-active-bg
  icon + label: --nav-active-text
  left border: none (bg handles it)

Bottom section (Notifications, Help, Logout):
  Separated by top border
  Notifications shows unread badge: 10px circle, --danger bg, white text 9px
```

---

## Top Bar

```
Height: 60px, fixed top (starts after sidebar)
Background: transparent / --bg-base
Border-bottom: none (clean)
Padding: 0 24px

Search bar:
  Width: 360px, centered or left-aligned
  Background: --bg-surface
  Border: 1px solid --border
  Radius: --radius-md
  Height: 36px
  Icon: 16px --text-secondary left
  Shortcut badge: ⌘K, --bg-surface-2, --text-tertiary, 11px, radius-sm, right

Right actions:
  Gift icon button: 36px circle, --bg-surface, --border
  Bell button: 36px circle, --bg-surface, --border
    Unread badge: 16px circle, --accent, white 10px bold, top-right overlap
  Avatar: 32px circle + dropdown arrow 12px --text-secondary
```

---

## Stat Card (Key Metrics Row)

```
Background: --bg-surface
Border: 1px solid --border
Border-radius: --radius-lg
Padding: 20px 24px
Shadow: --shadow-sm

Header row:
  Icon: 16px --text-secondary
  Label: 13px 500 --text-secondary
  Arrow icon: 12px --text-tertiary (top-right, navigate to section)

Primary value:
  Font: Space Grotesk 700, --text-2xl (e.g. "24 Active")
  Color: --text-primary

Secondary detail:
  Font: DM Sans 400, 12px --text-secondary
  Shows sub-stat (e.g. "3 delayed" or "12 overdue")

Trend indicator (on revenue card):
  Up arrow + % — --success green
  Down arrow + % — --danger red
  Font: DM Mono 12px
```

---

## Metric Widget (Payment, Statement, Discrepancies)

```
Background: --bg-surface
Border: 1px solid --border
Border-radius: --radius-lg
Padding: 20px 24px
Shadow: --shadow-sm

Header:
  Icon 16px + label 13px 500 --text-secondary
  External link icon top-right: 12px --text-tertiary

Big number:
  Font: DM Mono 500, 32px, --text-primary
  Status dot: 8px circle (green=good, red=bad) inline right

Sub-labels:
  Two columns: label + label, 11px --text-tertiary

Progress bar:
  Height: 3px
  Track: --bg-surface-2
  Fill: --success for collected, --danger for discrepancies
  Multiple segments shown as thin vertical bars (bar chart style)
  Range: 0% to 100%
```

---

## Revenue Hero Card

```
Floats in center of header area
Background: --bg-surface
Border: 1px solid --border
Border-radius: --radius-xl
Padding: 24px 28px
Shadow: --shadow-md
Min-width: 240px

Month selector: 
  "May 2025 ∨" — DM Sans 13px --text-secondary, clickable

"Total Revenue" label: 11px --text-tertiary uppercase tracking-wide
Value: Space Grotesk 700, 40px, --text-primary (₹82.4K)

Trend row:
  Up arrow icon --success
  Percentage: DM Mono 13px --success ("12.6%")
  vs text: DM Sans 12px --text-secondary
  Previous value: DM Mono 12px --text-secondary

Refresh icon: 16px --text-tertiary top-right
```

---

## AI Assistant Panel

```
Background: --bg-surface
Border: 1px solid --border
Border-radius: --radius-lg
Height: 100% (right column)

Header: "AI Assistant" 14px 600 --text-primary + icons row

Chat area:
  AI message: icon (sparkle) + text 13px --text-secondary, time 11px --text-tertiary
  User message: right-aligned, avatar, text 13px --text-primary
  File attachment bubble: icon + filename, --bg-surface-2, --radius-md

Model selector row (bottom):
  Pills: "GPT-4o", "Document AI", "Financial AI", "OpenCV"
  Active: --accent-light bg, --accent text, 11px, --radius-full
  Default: --bg-surface-2, --text-secondary

Input:
  "Enter Task for AI Assistant" — placeholder
  Height: 40px, --border, --radius-md
  Right: send button (--accent filled circle 28px) + settings icon
```

---

## Table Row

```
Header row:
  Background: --bg-surface-2
  Font: DM Sans 11px 500 uppercase --text-tertiary letter-spacing: 0.06em
  Border-bottom: 1px --border

Data row:
  Background: --bg-surface
  Border-bottom: 1px --border
  Height: 48px
  Padding: 0 16px
  Hover: --bg-surface-2

Cell text: DM Sans 13px --text-primary
Meta text: DM Sans 12px --text-secondary
```

---

## Status Badge

```
Radius: --radius-full
Padding: 3px 10px
Font: DM Sans 11px 500

On Track:    bg #F0FDF4  text #16A34A
At Risk:     bg #FFFBEB  text #D97706
Delayed:     bg #FEF2F2  text #DC2626
On Hold:     bg #F8FAFC  text #64748B
Completed:   bg #EEF3FF  text #2563EB
Overdue:     bg #FEF2F2  text #DC2626
Draft:       bg #F8FAFC  text #64748B
Sent:        bg #EEF3FF  text #2563EB
Paid:        bg #F0FDF4  text #16A34A
```

---

## Button

```
Primary:
  Background: --accent
  Text: white 13px 500
  Radius: --radius-md
  Height: 36px, px-16
  Hover: --accent-hover
  Icon left: 14px, gap 6px

Secondary (outlined):
  Background: transparent
  Border: 1px --border
  Text: --text-primary 13px 500
  Radius: --radius-md
  Height: 36px

Ghost:
  Background: transparent
  Text: --text-secondary 13px 500
  Hover: --bg-surface-2

Quick Action (top bar):
  Background: --bg-surface
  Border: 1px --border
  Height: 36px, px-16, radius --radius-md
  Icon: 14px --accent, gap 6px
  Text: 13px 500 --text-primary
```

---

## Input / Form Field

```
Height: 40px
Background: --bg-surface
Border: 1px solid --border
Border-radius: --radius-md
Padding: 0 12px
Font: DM Sans 14px --text-primary

Focus: border-color --accent, box-shadow 0 0 0 3px rgba(37,99,235,0.1)
Error: border-color --danger
Placeholder: --text-tertiary

Label: DM Sans 13px 500 --text-secondary, mb-6
Helper: DM Sans 11px --text-tertiary, mt-4
```

---

## Avatar

```
Sizes:
  xs: 24px    (stacked team)
  sm: 32px    (sidebar, nav, table)
  md: 40px    (profile headers)
  lg: 56px    (member detail page)

Style: circle, object-cover
Fallback: initials, --accent-light bg, --accent text, Space Grotesk 700
Online dot: 8px, #16A34A, position absolute bottom-0 right-0, white ring 2px
```

---

## Empty State

```
Container: centered, py-48
Icon: 40px, --text-tertiary (Lucide outlined)
Heading: Space Grotesk 600 18px --text-primary, mt-16
Description: DM Sans 14px --text-secondary, mt-8, max-width 320px, text-center
CTA: Primary button, mt-24
```

---

## Alert Strip

```
Background: #FFFBEB (warning) / #FEF2F2 (danger)
Border-bottom: 1px --warning or --danger
Padding: 10px 24px
Font: DM Sans 13px
Icon: 14px left
Link: --accent underline "View →"
Dismiss X: right
```

---

## Modal

```
Overlay: rgba(15,23,42,0.4) backdrop-blur-sm
Panel:
  Background: --bg-surface
  Border-radius: --radius-xl
  Width: 560px (default), 720px (large), 480px (confirm)
  Padding: 28px
  Shadow: --shadow-lg

Header: title 18px 600 Space Grotesk + X close button
Body: mt-20
Footer: mt-24 flex gap-12 justify-end
```
