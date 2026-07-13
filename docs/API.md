# API Reference (Planned)

Base URL: `http://localhost:3001/api/v1`

## Auth

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| POST   | /auth/register      | Create account       |
| POST   | /auth/login         | Login, receive JWT   |
| POST   | /auth/refresh       | Refresh access token |
| POST   | /auth/logout        | Invalidate refresh   |
| GET    | /auth/me            | Current user profile |

## Meetings

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| GET    | /meetings           | List user meetings   |
| POST   | /meetings           | Create meeting       |
| GET    | /meetings/:id       | Get meeting detail   |
| PUT    | /meetings/:id       | Update meeting       |
| DELETE | /meetings/:id       | Delete meeting       |

## Summaries

| Method | Endpoint                      | Description            |
|--------|-------------------------------|------------------------|
| POST   | /meetings/:id/summarize       | Generate AI summary    |
| GET    | /meetings/:id/summary         | Get latest summary     |

> Endpoints are placeholders. Implementation pending approval.
