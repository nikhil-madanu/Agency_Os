# Agency OS — Page Layout Patterns

Reference TOKENS.md and COMPONENTS.md. This file defines structure only.

---

## Global Shell

```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR (220px fixed)  │  TOP BAR (fixed, 60px)     │
│                        ├────────────────────────────│
│  Logo + Plan           │  CONTENT AREA              │
│  ──────────            │  padding: 24px             │
│  Avatar                │  overflow-y: auto          │
│  ──────────            │                            │
│  Nav items             │                            │
│  ──────────            │                            │
│  Notifications         │                            │
│  Help                  │                            │
│  Logout                │                            │
└─────────────────────────────────────────────────────┘
```

Content area = viewport - 220px sidebar - 60px top bar.

---

## Layout A — Dashboard (2-column with right panel)

```
┌──────────────────────────────────┬──────────────────┐
│  HEADER (greeting + actions)     │                  │
│  ─────────────────────────────── │  RIGHT PANEL     │
│  ALERT STRIP (conditional)       │  (AI Assistant   │
│  ─────────────────────────────── │   or Activity)   │
│  STAT CARDS ROW (4 cols)         │                  │
│  ─────────────────────────────── │  380px fixed     │
│  CONTENT ROWS (various)          │  width           │
│                                  │                  │
└──────────────────────────────────┴──────────────────┘

Left:  calc(100% - 380px - 20px gap)
Right: 380px
Gap:   20px
```

Use for: Dashboard Home, Reports

---

## Layout B — List Page (full width with header)

```
┌────────────────────────────────────────────────────┐
│  PAGE HEADER                                       │
│  Title + count  │  Filters + Sort  │  Action btn  │
│  ─────────────────────────────────────────────────│
│  SUB-NAV (tabs) — if applicable                    │
│  ─────────────────────────────────────────────────│
│  STAT SUMMARY ROW (3-4 cards) — if applicable      │
│  ─────────────────────────────────────────────────│
│  LIST / TABLE                                      │
│  (full width, card or row style)                   │
└────────────────────────────────────────────────────┘
```

Use for: Projects, Clients, Team, Invoices, Contracts

Page header height: auto, pb-20, border-bottom 1px --border
Sub-nav: tabs, 13px 500, active has border-bottom 2px --accent

---

## Layout C — Detail Page (with tabs)

```
┌────────────────────────────────────────────────────┐
│  DETAIL HEADER (entity info + actions)             │
│  ─────────────────────────────────────────────────│
│  TAB NAV                                           │
│  ─────────────────────────────────────────────────│
│  TAB CONTENT                                       │
│  ┌──────────────────────┬─────────────────────┐   │
│  │  PRIMARY (2/3 width) │  SIDEBAR (1/3 width)│   │
│  │                      │  (summary, meta)    │   │
│  └──────────────────────┴─────────────────────┘   │
└────────────────────────────────────────────────────┘
```

Use for: Project Detail (2A), Client Profile (3A), Team Member (4A), Invoice (5A), Contract (6A)

Detail header: --bg-surface, p-24, border-bottom, shadow-xs
Tab nav: sticky top (below top bar), --bg-base, border-bottom --border
Tab content: pt-24

---

## Layout D — Create / Form (stepper or single)

```
┌────────────────────────────────────────────────────┐
│  FORM HEADER (title + step indicator)              │
│  ─────────────────────────────────────────────────│
│  ┌───────────────────────────────┐  ┌───────────┐ │
│  │  FORM AREA (main)            │  │  PREVIEW  │ │
│  │  2/3 width                   │  │  PANEL    │ │
│  │                              │  │  1/3 w    │ │
│  └───────────────────────────────┘  └───────────┘ │
│  ─────────────────────────────────────────────────│
│  FOOTER ACTIONS (Back | Save Draft | Continue)     │
└────────────────────────────────────────────────────┘
```

Use for: New Project (2B), Add Client (3B), Add Team Member (4B), Create Invoice (5B), Create Contract (6B)

Stepper: horizontal dots + labels, top of page, --accent for active

---

## Layout E — HR / Settings (sidebar sub-nav + content)

```
┌──────────────┬─────────────────────────────────────┐
│  SUB-NAV     │  SECTION CONTENT                    │
│  (200px)     │                                     │
│              │  Section header                     │
│  Attendance  │  ────────────                       │
│  Leave       │  Content body                       │
│  Salary      │                                     │
│  Onboarding  │                                     │
│  Holidays    │                                     │
└──────────────┴─────────────────────────────────────┘
```

Use for: HR (Page 7), Settings (Page 9)

Sub-nav: same style as sidebar nav items, --bg-surface, border-right 1px --border

---

## Spacing Rhythm (applies to all layouts)

```
Section gap (vertical between major sections): 32px
Card gap (in a grid row): 16px
Column gap: 20px
Content padding from edge: 24px
Page title margin-bottom: 24px
Card to table gap: 20px
```

---

## Responsive Collapse (laptop 1024px)

```
- Right panel (AI/activity): collapses below main content or becomes a tab
- Sidebar sub-nav: collapses into top tabs
- 4-column stat row: becomes 2x2
- Table: horizontal scroll
```
