# Architecture Overview

## System Design

```
┌─────────────┐     HTTPS/JWT      ┌─────────────┐     Prisma      ┌────────────┐
│   Client    │ ◄────────────────► │   Server    │ ◄─────────────► │ PostgreSQL │
│  (React)    │     REST API       │  (Express)  │                 │            │
└─────────────┘                    └──────┬──────┘                 └────────────┘
                                          │
                                          ▼
                                   ┌─────────────┐
                                   │  AI Provider │
                                   │  (OpenAI etc)│
                                   └─────────────┘
```

## Planned Modules

### Client
- **Auth** — Login, register, token refresh, protected routes
- **Meetings** — CRUD for meeting notes, list/detail views
- **Summaries** — Trigger generation, view/export AI summaries
- **Shared** — Layout, UI components, API client, auth context

### Server
- **Auth** — Registration, login, JWT issue/refresh, password hashing
- **Meetings** — CRUD endpoints scoped to authenticated user
- **Summaries** — AI summarization service integration
- **Middleware** — Auth guard, validation, error handling, rate limiting

## Data Model (Planned)

| Entity   | Key Fields                                      |
|----------|-------------------------------------------------|
| User     | id, email, passwordHash, name, createdAt        |
| Meeting  | id, userId, title, rawNotes, createdAt          |
| Summary  | id, meetingId, content, model, createdAt        |

## Security

- Passwords hashed with bcrypt
- JWT access tokens (short-lived) + refresh tokens (httpOnly cookie)
- Input validation on all endpoints (Zod)
- CORS restricted to client origin
- Rate limiting on auth and AI endpoints
