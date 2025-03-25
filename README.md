# Skip Selection Page

This project renders a skip selection interface with skip size options, prices, and conditions. The page is built using **Next.js (App Router)** and styled with **Tailwind CSS**.

---

## Approach

### 1. Data Fetching

I used a server-side async function (`fetchSkips`) to fetch skip data from a backend API via `process.env.NEXT_PUBLIC_BACKEND_URL`. The data is fetched at build time (for static optimization), with runtime validation to handle missing or invalid values.

- If the fetch fails or returns invalid data, a fallback is triggered (`notFound()`), leading to a 404 page.
- To ensure Vercel builds correctly, I included checks for missing environment variables and non-OK HTTP responses.

### 2. Component Structure

The interface is broken into modular components:

- `Stepper`: Displays current progress in a multi-step process.
- `SkipsGrid`: Renders a responsive grid of `SkipCard` components.
- `SkipCard`: Displays individual skip info (size, hire period, availability, and total price).

### 3. Error Handling

To prevent runtime build errors (like calling `.toFixed()` or `.toString()` on `undefined`), I added:

- Type and null checks before calculation
- Safe fallback rendering (e.g., showing `N/A` instead of crashing)
- Filtering of fetched data to ensure required fields are valid

### 4. Deployment

The project is deployed on **Vercel** as a sandbox. It serves as a self-contained, testable environment that doesn't rely on any local setup.

### 5.Tech Stack

Next.js 15 (App Router)

Tailwind CSS

TypeScript
