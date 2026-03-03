# Grid Compass

A small React component that renders a 5×5 grid and places a directional marker based on a placement string.

This project focuses on input parsing, validation, and predictable UI rendering. It includes unit tests and Storybook stories for the main scenarios.

---

## Setup

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Run Storybook:

```
npm run storybook
```

Build for production:

```
npm run build
```

Preview production build:

```
npm run preview
```

---

## Input Format

The component accepts a `placement` string in the following format:

```
x,y DIRECTION
```

Example:

```
2,2 NORTH
```

Rules:

* `x` and `y` must be between 0 and 4
* Direction must be one of: `NORTH`, `EAST`, `SOUTH`, `WEST`
* Direction is case-insensitive
* Invalid input renders an error message

---

## Tests

Run tests in watch mode:

```
npm run test
```

Run once:

```
npm run test:run
```

Tests cover:

* Placement parsing and validation
* Component rendering behavior (error and marker)

---

## Notes

* Grid size is fixed at 5×5.
* Coordinates are validated strictly within bounds.
* Parsing logic is separated from rendering for easier testing.
