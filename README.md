# Lumière — Restaurant Website

A frontend-only restaurant website built with React, Vite, Tailwind CSS and
React Router. Includes an online ordering cart (persisted in localStorage),
a filterable menu, and a table reservation form with validation.

## Features

- Home page with hero, featured dishes, chef section, reviews and gallery teaser
- Menu page with category filtering
- Online ordering: add to cart, change quantity, running total, persists on refresh
- Table reservation form with client-side validation
- About, Gallery (filterable) and Contact pages
- Responsive layout (mobile / tablet / desktop) and a custom 404 page

## Tech

- React 18
- Vite
- Tailwind CSS
- React Router v6
- Context API + localStorage for cart state (no backend yet)

## Project structure

```
src/
├── components/     reusable pieces (Navbar, FoodCard, ReservationForm, etc.)
├── pages/          one file per route
├── data/           static menu / review / gallery data
├── context/         CartContext (state + localStorage)
├── App.jsx
├── main.jsx
└── index.css
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

To build for production:

```bash
npm run build
npm run preview
```

## Notes / future improvements

- Menu data is currently hardcoded in `src/data/menuData.js` — swap for an API call when a backend exists
- Reservation and contact forms just show a confirmation state — wire up to an actual email/API service
- Checkout button on the cart page is a placeholder, no payment integration yet
- Replace stock photography with real restaurant photos before going live
