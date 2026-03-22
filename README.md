# Eventify — Modern Event Discovery Platform

A modern, scalable and performance-focused **Next.js application** built as part of a real-world case study.

Eventify is designed to help users **discover, explore, and engage with events seamlessly** — powered by clean architecture, reusable components, and a design-token-based UI system.

---

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack & Libraries](#tech-stack--libraries)
- [Best Practices Used](#best-practices-used)
- [How It Works](#how-it-works)
- [Performance Optimization](#performance-optimization)
- [Theme System](#theme-system)
- [Common Issues](#common-issues)
- [Screenshots](#screenshots)

---

## Introduction

Eventify is not just a UI project — it’s a **case-study driven frontend application** built to demonstrate:

- Real-world frontend architecture
- Scalable component design
- Performance-first development
- Clean and maintainable code practices

### Problem

Users often struggle to find relevant events quickly with a smooth and engaging experience.

### Solution

Eventify solves this by providing:

- Clean UI hierarchy
- Structured event presentation
- Fast loading experience
- Modern frontend architecture

---

## Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Run Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:3000
```

---

## CRLF Error Fix (Important)

If you face **CRLF / LF warning**, run:

```bash
git config --global core.autocrlf true
```

OR (recommended):

```bash
git config --global core.autocrlf input
```

---

## Project Structure

```
src/
 ├── app/           → Next.js App Router (pages, layouts)
 ├── components/    → Reusable UI components
 ├── assets/        → Images (WebP optimized)
 ├── types/         → TypeScript types
 ├── data/          → Static event data
 ├── hooks/         → Custom hooks
 ├── utils/         → Helper functions
```

---

## Tech Stack & Libraries

| Technology      | Purpose               |
| --------------- | --------------------- |
| Next.js 16      | App Router & SSR/SSG  |
| React.js        | UI Development        |
| TypeScript      | Type Safety           |
| Tailwind CSS v4 | Utility-first styling |
| Design Tokens   | Scalable UI system    |
| next-themes     | Light/Dark mode       |
| Framer Motion   | Animations            |
| Redux Toolkit   | State management      |
| ESLint          | Code linting          |
| Prettier        | Code formatting       |
| Husky           | Git hooks             |
| Commitlint      | Conventional commits  |

---

## Best Practices Used

- Design Token Architecture (CSS variables + Tailwind mapping)
- Reusable & scalable component structure
- Clean folder architecture (feature-based)
- Performance-first UI design
- Optimized image handling using `next/image`
- Semantic naming conventions
- Dark/Light theme separation
- Minimal re-renders & clean state handling
- Production-ready code structure

---

## How It Works

### Design Tokens

Global styling is handled via semantic tokens:

```css
--color-background
--color-foreground-primary
--text-heading-lg
```

Mapped inside Tailwind:

```css
@theme inline;
```

Usage:

```tsx
<h1 className="text-foreground-primary text-heading-lg">
```

---

## Performance Optimization

- Optimized images using `next/image`
- WebP format for fast loading
- Lazy loading enabled by default
- Proper image sizing using `fill` + container control
- Minimal DOM re-renders
- Efficient Tailwind usage (no inline heavy styles)

---

## Theme System

Implemented using **next-themes**:

```tsx
<ThemeProvider attribute="data-theme">
```

Theme controlled via:

```
data-theme="light"
data-theme="dark"
```

### Features:

- Dynamic theme switching
- Token-based color system
- Clean separation of light/dark styles

---

## Common Issues

### Image not visible with `fill`

✔ Fix:

- Parent must have:

```css
relative + fixed height
```

Example:

```tsx
<div className="relative h-60">
    <Image fill />
</div>
```

---

### Tailwind token not working

✔ Ensure:

- Token added in `@theme inline`
- Class name matches exactly

---

## 📸 Screenshots

(Add your screenshots here)

---

## Support

If this project helped you or you learned something new:

**If you like this project, feel free to star the repository!**

---

## Author

**Muhammad Shayan Bukhari**
Frontend Developer — React | Next.js | TypeScript

---

## License

MIT License

---

## © Copyright

© 2026 — All Rights Reserved by Shayan Bukhari
