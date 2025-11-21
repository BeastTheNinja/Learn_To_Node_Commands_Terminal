# Learn_To_Node_Commands_Terminal

A learning repository for getting comfortable with Node.js development from the terminal.  
Primary focus: using environment variables, .gitignore, Prisma ORM, Express, and connecting to a MySQL database. This repo is intentionally minimal and experimental — it's where I practice commands, workflows, and tooling.

## Learning Goals
- Learn Node.js project setup and package management (npm/yarn).
- Use .env for configuration and keep secrets out of source control with .gitignore.
- Build a small Express server and understand routing and middleware.
- Use Prisma to model, migrate, and query a MySQL database.
- Practice common terminal workflows: running, migrating, seeding, and debugging.
- Explore deployment-ready scripts and environment-aware configs.

## Tech stack
- Node.js (JavaScript / TypeScript)
- Express
- Prisma (ORM)
- MySQL (local or remote)
- dotenv (.env)
- git + .gitignore

## Prerequisites
- Node.js (recommended LTS)
- npm or yarn
- MySQL server (or a managed MySQL-compatible database)
- (optional) pnpm, Docker (if you want to run MySQL in a container)

## Quick setup

1. Clone the repo
   git clone https://github.com/BeastTheNinja/Learn_To_Node_Commands_Terminal.git
   cd Learn_To_Node_Commands_Terminal

2. Install dependencies
   npm install
   # or
   yarn install

3. Create an .env file
   Copy .env.example -> .env (if .env.example exists) or create `.env` with values like:
   DATABASE_URL="mysql://user:password@localhost:3306/my_db"
   PORT=4000
   NODE_ENV=development

4. Initialize Prisma & database
   # generate Prisma client
   npx prisma generate

   # create initial migration and run it (development workflow)
   npx prisma migrate dev --name init

   # OR push schema to DB without migrations (useful for quick experiments)
   npx prisma db push

5. Seed (if a seed script exists)
   npm run seed
   # or run a seed script via node

6. Run the server
   npm run dev
   # or
   node ./dist/index.js
   # or (if using ts-node)
   npx ts-node-dev src/index.ts

## Typical scripts to add (example package.json scripts)
- start: node ./dist/index.js
- dev: nodemon or ts-node-dev for local dev
- build: tsc
- prisma:migrate: npx prisma migrate dev --name <name>
- prisma:generate: npx prisma generate
- seed: node prisma/seed.js

Add these scripts to package.json to make terminal commands easier.

## .env and .gitignore
- Add secrets and environment-specific config to `.env`.
- Ensure `.gitignore` contains `.env`, node_modules/, .env.local, and any build artifacts:
  ```
  node_modules/
  .env
  .env.local
  dist/
  .DS_Store
  ```

## Prisma / Database Notes
- Define your data model in `prisma/schema.prisma`.
- Use `DATABASE_URL` in `.env` to point Prisma to your MySQL instance.
- Use `npx prisma studio` to visually inspect the data while developing.
- Use migrations for production-like workflows; `prisma db push` is fine for quick learning.

## Project structure (example)
- src/
  - index.ts (or index.js) — app entry
  - server/ — express app, routes, middleware
  - prisma/ — schema / seed scripts (if present)
- prisma/
  - schema.prisma
  - migrations/
- .env.example
- .gitignore
- package.json
- README.md

Adjust this structure to match how you prefer to organize code as you learn.

## Tips for learning
- Break tasks into tiny CLI commands and run them often (generate client, run migrations, inspect DB).
- Keep a small script list in package.json for repetitive tasks.
- Use Prisma Studio to view data models and records.
- Experiment with simple endpoints in Express to test DB reads/writes.
- Commit often and use descriptive commit messages noting what command you practiced.

## Contributing & Notes
This repository is my personal learning space. If you'd like to suggest improvements or contributions, feel free to open an issue or a PR. Expect breaking changes — this repo evolves as I learn.

## Useful references
- Node.js: https://nodejs.org
- Express: https://expressjs.com
- Prisma: https://www.prisma.io
- MySQL: https://www.mysql.com
- dotenv: https://github.com/motdotla/dotenv

Have fun experimenting — this repo is for practicing, breaking, and rebuilding things until they make sense!
