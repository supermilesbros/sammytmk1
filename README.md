# Sammy Terry Website and Streaming Service
This is the official website and streaming service for Sammy Terry, a beloved horror host. The project is built using [Nuxt 3](https://nuxt.com) and provides a platform for fans to watch classic horror movies and shows.

## Authors and Contributors
Developer: [Jared Miles](https://github.com/supermilesbros)

Project Manager: [Andrew Alam]


## Features

- Watch classic horror movies and shows
- User-friendly interface
- Responsive design
- Easy navigation

## Architecture Overview

Nuxt Frontend (Vue 3 + Nuxt3 Tailwind + Nuxt UI) 
    - Auth requests (signup, login)
    - Fetch content, user status, etc.
    - Stripe Checkout
    
Backend API (Node.js + Express/Fastify) 
   - Prisma ORM
   - Stripe SDK
   - JWT or Firebase Token Verification
   - S3 Signed URL Generation
   - PostgreSQL Database

## Tech Stack
- PostgreSQL (User data, subscriptions, videos) 
- Stripe (Billing & Subscriptions)
- AWS S3 (Video Files, Thumbnails)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
