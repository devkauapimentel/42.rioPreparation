# 42 Prep Platform — Local Intra & Moulinette

## 🎯 Overview

42 Prep Platform is a **preparation environment for the 42 Piscine**, designed to build the discipline, autonomy, and technical foundation required *before entering* the program.

It does **not replicate the official 42 curriculum**, but instead enforces its philosophy: strict rules, self-learning, and pressure-driven problem solving.

---

## ⚠️ Disclaimer

This project is **independent** and is **not affiliated with 42 or the 42 Network**.

---

## 🧠 Philosophy

The goal is not to teach through lectures, but to prepare users to:

* Think independently
* Solve problems under constraints
* Respect strict coding standards
* Develop resilience through failure

This platform mirrors the *mindset*, not the official path.

---

## 🏗 Architecture Overview

* **Frontend:** Next.js 15 (React + TypeScript)
* **Styling:** Tailwind CSS (minimal, terminal-inspired)
* **Backend:** Node.js (API Routes / Server Actions)
* **Markdown Engine:** react-markdown + remark-gfm
* **System Dependencies:** gcc, norminette, bash

---

## 🧩 Core Features

### Progress Tracker (Local Intra)

* Tracks progression across modules (Shell, C, Exams)
* Displays completion metrics
* Structured learning phases

---

### Workspace Initialization

Automatically generates a local directory structure similar to 42:

```
/Exercicios/c00/ex00/
```

---

### Subject Pages

Each exercise includes:

* Required files and directories
* Allowed functions
* Constraints and rules
* Markdown-rendered subject
* Methodology guidance (what is allowed vs forbidden)

---

### Exam Mode

* Persistent timers (4–8 hours)
* Non-pausable
* Survives reloads

---

### Local Moulinette (Validation Engine)

Strict automated correction pipeline:

1. File structure validation
2. Norminette execution
3. Compilation with strict flags
4. Hidden automated tests
5. Output comparison

Compilation rule:

```bash
gcc -Wall -Wextra -Werror
```

No feedback is given on failure beyond pass/fail.

---

## 🗂 Project Structure

```
/src
  /app
  /components
  /lib
    data.ts
    types.ts
    workspace.ts
/server
  /api
    /moulinette
```

---

## 🧱 Data Layer

* Static TypeScript-based dataset
* No external database
* Contains:

  * Exercises
  * Test cases
  * Expected outputs
  * Subject references

---

## 🛑 Rules

* The system does not generate solutions
* No external help is simulated
* The user must debug independently

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/42-prep-platform.git
cd 42-prep-platform
npm install
npm run dev
```

---

## 🎯 Objective

Prepare users to enter the 42 Piscine with:

* Strong logical thinking
* Familiarity with strict constraints
* Ability to work under pressure
* Autonomous learning habits

---

## 🔮 Roadmap

* AI-assisted feedback (non-solution based)
* Peer evaluation system
* Multi-user support
* Remote moulinette execution

---

## 📜 License

MIT License
