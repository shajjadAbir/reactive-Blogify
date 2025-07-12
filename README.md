# LWS Blogify

A Next.js SSR blog project.  
This project demonstrates server-side rendering, dynamic routing, filtering, and sorting using local JSON data.

---

## Live Demo

[View the live site here](https://reactive-blogify.vercel.app/)

## Features

- **Server-side rendering** for all pages

- **Blog list** on the home page, fetched from `data.json`

- **Dynamic blog details** page with slug-based routing

- **Category filtering** with multi-select and toggle (SSR)

- **Sort by date** (latest/oldest), SSR

- **Recommended blogs** section on details page

- **404 Not Found** handling for invalid blog URLs

- **Accessible** and responsive UI

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/shajjadabir/lws-blogify.git
cd lws-blogify
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the development server

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/app
  /blog/[slug]/page.js   # Blog details page (SSR)
  /page.js               # Home page (SSR)
  /layout.js             # App layout
/components
  BlogCard.jsx
  CategoryList.jsx
  SortDropDown.jsx
  BookmarkIcon.jsx
  HamburgerIcon.jsx
/utils
  getExcerpt.js
/lib
  getBlogs.js
/public
  /assets/logo.svg
  data.json              # Blog data source
```

---

## Key Implementation Details

- **SSR Filtering & Sorting:**  
  All filtering and sorting is handled on the server using query parameters.

- **Dynamic Routing:**  
  Blog details pages are generated using slugs derived from blog titles.

- **Category & Sort State:**  
  Reflected in the URL for shareable and reloadable state.

- **Blog Description:**  
  Rendered with `dangerouslySetInnerHTML` for HTML content.

---
