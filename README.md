# kimappsec

kimappsec is a lightweight Fastify service written in TypeScript. It exposes health-check endpoints and integrates with Prisma for data access. The project is designed for server-side application security experiments and API prototyping.

## Features
- Fastify HTTP server with modular route definitions
- Health-check endpoint and domain-level health status abstraction
- Prisma schema and migrations for database access
- Environment-driven configuration using dotenv
- Automated test suite with Vitest and coverage reporting

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm, npm, or yarn
- (Optional) Docker for database services referenced by Prisma

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

### Database Tooling
```bash
npm run prisma:studio
```

## Project Structure
```
src/
  app.mts          # Fastify app bootstrap
  server.mts       # HTTP server startup entry point
  application/     # Application services (health checks)
  domain/          # Domain models (health status)
  infrastructure/  # HTTP routing layer
prisma/
  schema.prisma    # Prisma schema definition
  migrations/      # Versioned database migrations
```

## Environment
Environment variables can be defined in a local `.env` file. Ensure any required database URLs or secrets referenced by Prisma are set before running the service.

## Coverage Report
Running the test suite with coverage creates static assets under `coverage/` for inspection in a browser.

## License

This project is licensed under the [MIT License](LICENSE).
