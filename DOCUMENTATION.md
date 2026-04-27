# 42 Rio Piscina Tracker - Architecture & Documentation

## Overview
The **42 Rio Piscina Tracker** is a highly structured, offline-first, gamified Next.js web application designed to prepare candidates for the intense 26-day 42 Rio Piscina. Built with a brutalist, terminal-inspired aesthetic ("Bold Typography" theme), the application focuses on high structure, minimal distractions, and explicit enforcement of the "42 Methodology" and "The Norm".

## Core Principles
1. **Offline-First:** All progress data is synced directly to the browser's `localStorage`. No database is required.
2. **Sequential Unlocking ("The Black Hole"):** The curriculum is divided into phases. Each phase culminates in a "Gatekeeper Exam". The subsequent phase remains locked and inaccessible until the preceding phase's Gatekeeper Exam is marked as completed (checked off).
3. **The 42 Way:** No AI code generation allowed. Brutal compilation flags (`-Wall -Wextra -Werror`). Strict adherence to formatting ("The Norm"). These rules are constantly reinforced in the UI.

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Custom terminal-themed variables in `globals.css`)
- **Icons:** `lucide-react`
- **Content Rendering:** (Prepared for Markdown rendering via API/static files in `/data`)

## Folder Structure
```
/
├── app/
│   ├── globals.css        # Global Tailwind layout and terminal-themed CSS variables
│   ├── layout.tsx         # Main HTML wrapper, loads Google Fonts (Inter, JetBrains Mono)
│   └── page.tsx           # The main Dashboard UI (Progress tracking, Roadmap, Rules)
├── data/
│   ├── evolution_guide.md # Outline of the phases and XP requirements
│   ├── phase_1.md         # Cryptic subject PDF content for Phase 1
│   ├── phase_2.md         # Cryptic subject PDF content for Phase 2
│   └── phase_3.md         # Cryptic subject PDF content for Phase 3
├── hooks/
│   └── use-progress.ts    # React hook managing localStorage sync for exercise completion
├── lib/
│   ├── data.ts            # The core curriculum data (Phases, Exercises, Exams, Rules)
│   └── types.ts           # TypeScript interfaces (Phase, Exercise, Rules)
└── public/                # Static assets (if any)
```

## Data Models (`lib/types.ts`)

- **`Exercise`**: Represents a single task or exam.
  ```typescript
  export interface Exercise {
    id: string;
    title: string;
    description: string;
    isExam?: boolean;
  }
  ```
- **`Phase`**: Represents a module/week of the Piscina.
  ```typescript
  export interface Phase {
    id: string;
    title: string;
    days: string;
    description: string;
    xpRequirement: string;
    gatekeeperExamId?: string; // Links to the final exam required to pass the phase
    exercises: Exercise[];
  }
  ```

## The Curriculum (`lib/data.ts`)
The application defines 5 core phases:
1. **Phase 1: Shell Mastery (Days 00-02)** - Linux environment survival, `chmod`, `find`, `.sh` scripts.
2. **Phase 2: C Foundations (Days 03-07)** - Basic C logic, loops without `for`, `write` function, ASCII manipulation.
3. **Phase 3: The Pointer Gate (Days 08-14)** - Memory addresses, dereferencing, pointer arithmetic.
4. **Phase 4: Strings and Arrays (Days 15-21)** - Rebuilding the standard C library (`ft_strlen`, `ft_putstr`).
5. **Phase 5: Memory Allocation (Days 22-26)** - Dynamic sizing and the final test.

## Progress & Locking Mechanism
- Handled primarily in `app/page.tsx` and `hooks/use-progress.ts`.
- The `use-progress` hook stores a dictionary of completed exercise IDs: `{ "e1-0": true, "e1-exam": true }`.
- In the UI, the rendering loop verifies if `index > 0`. If so, it checks the `completed` state of the previous phase's `gatekeeperExamId`. If not true, the phase is rendered in a **LOCKED** state, disabling expansion and interaction.
- The overall "System Load" percentage is dynamic based on total exercises vs. completed exercises.

## Styling & Aesthetic ("Bold Typography")
- **Colors:** Deep blacks (`#0A0A0A`, `#1A1A1A`), pure whites, and terminal green (`#00FF41`) for highlights and active states. Red (`#FF4136` or `border-red-500`) is used for warnings and Gatekeeper Exam highlights.
- **Typography:** `JetBrains Mono` for code snippets, system status, and technical details. `Inter` for heavily contrasted, black-weight headings.
- **Layout:** A responsive 12-column CSS Grid. Left side houses the main content timeline. Right side constantly pins "The Norm" rules and the strictly required C file header to keep constraints top-of-mind.

## Context Transfer Instructions
If providing this project to another AI agent to continue development, provide this document alongside the following instructions:
1. **Do not alter the `page.tsx` locking logic:** The strict Gatekeeper sequence must remain.
2. **Maintain the styling:** Use only raw hexadecimal values matching the terminal theme (`#00FF41`, `#1A1A1A`) and Tailwind utility classes. Do not introduce rounded corners or soft drop-shadows. Keep it brutalist.
3. **Expand Content via Markdown:** Future tasks involving deeper exercise details should read from the `/data/*.md` files and render using a Markdown parser (like `react-markdown`) in a modal or a separate route.
