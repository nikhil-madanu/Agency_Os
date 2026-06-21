# How to Use This Style Guide Efficiently

## The 3 Files

```
TOKENS.md      → Colors, fonts, spacing, shadows, radius, transitions
COMPONENTS.md  → Every UI component — what it looks like and how it's built
LAYOUTS.md     → Page structure patterns (A/B/C/D/E) for all 34 pages
```

---

## The Core Principle: Reference, Don't Repeat

Every time you start a new screen in Antigravity or ask AI to build a page,
you paste ONLY the relevant section — not the entire file.

---

## How to Prompt for Each Page Type

### Building a new List Page (e.g. Projects, Clients, Invoices)

```
Prompt template:
"Build [Page Name] using Layout B from LAYOUTS.md.
Design tokens: [paste TOKENS.md colors + spacing only]
Components needed: [Stat Card, Table Row, Status Badge, Button]
from COMPONENTS.md

Page-specific content:
[paste only the relevant section from the Admin Portal PDF]"
```

### Building a Detail Page (e.g. Project Detail 2A)

```
Prompt template:
"Build Project Detail page using Layout C from LAYOUTS.md.
[paste Layout C section only]
[paste Stat Card + Table Row + Status Badge from COMPONENTS.md]
[paste only Page 2A section from the content doc]"
```

### Building a Dashboard section

```
Prompt template:
"Build the [Section Name] section using Layout A.
[paste Layout A only]
[paste the specific component from COMPONENTS.md — e.g. Metric Widget]
[paste Section 3 or Section 4 from content doc]"
```

---

## Token Budget Strategy

### What to paste always (small, always needed):
```
--bg-base, --bg-surface, --accent, --text-primary, --text-secondary
--border, --radius-lg, --shadow-sm
DM Sans body, Space Grotesk headings, DM Mono numbers
```

### What to paste only when relevant:
```
Status colors   → only for pages with status badges (Projects, Invoices, Contracts)
Modal spec      → only when building a form/modal
Alert strip     → only for Dashboard
```

### What to NEVER paste (AI already knows):
```
- Button hover behavior (CSS is implied)
- Box model basics
- Flexbox/Grid syntax
```

---

## Page-by-Page Reference Map

```
Page          Layout    Components Needed
──────────────────────────────────────────────────────
Dashboard     A         Stat Card, Metric Widget, Revenue Hero, AI Panel, Alert Strip
Projects      B         Stat Card, Table Row (or Kanban card), Status Badge, Button
Project 2A    C         Tab nav, Task card, Progress bar, File row, Chat bubble
Clients       B         Client card (avatar + stats), Status Badge
Client 3A     C         Tab nav, Invoice row, Contract row, Note card
Team          B         Member card (avatar + status), Team stat cards
Member 4A     C         Tab nav, Attendance calendar, Task row, Update card
Invoices      B         Invoice row, Status Badge (Paid/Overdue etc), Summary cards
Invoice 5A    C         Invoice preview, Action panel, Activity log
Create pages  D         Form fields, Stepper, Preview panel
HR            E         Attendance table, Leave card, Salary row
Settings      E         Form fields, Toggle, Permission table
Reports       A         Chart areas, Stat cards, Filter bar
```

---

## Antigravity-Specific Tips

1. Create a **shared Styles page** in your Antigravity file with all color tokens as fills.
   Name them exactly as in TOKENS.md (e.g. `accent`, `bg-surface`, `text-secondary`).

2. Create **master components** for: Sidebar, Top Bar, Stat Card, Status Badge, Button (3 variants).
   Every screen uses instances — one change updates all.

3. Build screens in this order to reuse the most:
   ```
   1. Design tokens + component library (1 day)
   2. Sidebar + Top Bar (reused on all 34 pages)
   3. Dashboard (shows all component types)
   4. Projects list → Project detail (most complex)
   5. Remaining list pages (fast — reuse table + cards)
   6. Detail pages (fast — reuse tabs + components)
   7. Create/form pages
   8. HR + Settings (use sub-nav layout)
   ```

4. When asking AI to generate a screen, paste only:
   - The layout template (5-10 lines)
   - The components list (names only if AI has the file)
   - The content spec for THAT page only (not entire 31-page doc)

---

## Condensed Token Cheatsheet (Paste this in every prompt)

```
BG: #F0F2F8 page | #FFFFFF card | #F7F8FC subtle
ACCENT: #2563EB | ACCENT-LIGHT: #EEF3FF
TEXT: #0F172A primary | #64748B secondary | #94A3B8 tertiary
STATUS: #16A34A success | #F59E0B warning | #DC2626 danger
BORDER: #E2E8F0 | RADIUS: 14px card | 6px badge | 9999px pill
SHADOW: 0 2px 8px rgba(15,23,42,0.06)
FONTS: Space Grotesk 700 headings | DM Sans 400/500 body | DM Mono numbers
SPACING: 4px base, card-pad 20px 24px, gap 16px
```

This 8-line cheatsheet is all you need in 90% of prompts.
