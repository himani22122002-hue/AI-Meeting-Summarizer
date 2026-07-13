# AI Meeting Notes Summarizer

Production-ready full-stack application for uploading meeting notes and generating AI-powered summaries.

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 19, TypeScript, Vite          |
| Styling    | Tailwind CSS                        |
| Backend    | Node.js, Express, TypeScript        |
| Database   | PostgreSQL, Prisma ORM              |
| Auth       | JWT (access + refresh tokens)       |

## Project Structure

```
AI-Meeting-Summarizer/
├── client/          # React frontend (Vite)
├── server/          # Express API backend
├── docs/            # Architecture & API documentation
├── .github/         # CI/CD workflows
└── docker-compose.yml
```

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 16+ (or Docker for `docker compose up -d`)

## Getting Started

### 1. Install dependencies

```bash
npm install
npm install --prefix client
npm install --prefix server
```

Or from the root (after root install):

```bash
npm install --prefix client && npm install --prefix server
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Update `server/.env` with your database URL and secrets.

### 3. Start PostgreSQL

**With Docker:**

```bash
docker compose up -d
```

**Without Docker:** ensure PostgreSQL is running and `DATABASE_URL` in `server/.env` points to your instance.

### 4. Run database migrations

```bash
npm run db:generate --prefix server
npm run db:migrate --prefix server
```

### 5. Start development servers

**Both at once (from root):**

```bash
npm run dev
```

**Individually:**

```bash
npm run dev --prefix server   # http://localhost:3001
npm run dev --prefix client   # http://localhost:5173
```

### Health Check

```bash
curl http://localhost:3001/api/v1/health
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start client + server concurrently |
| `npm run dev:client` | Start Vite dev server |
| `npm run dev:server` | Start Express with hot reload |
| `npm run build` | Build client and server for production |
| `npm run db:migrate --prefix server` | Run Prisma migrations |
| `npm run db:studio --prefix server` | Open Prisma Studio |

## License

MIT
