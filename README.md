# Uber Services Monorepo

A scalable, modular backend system for ride-hailing and logistics, built with [NestJS](https://nestjs.com/) and TypeScript. This monorepo contains multiple microservices, including logging, rider management, and a core Uber-like service, designed for extensibility and maintainability.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Monorepo Structure](#monorepo-structure)
- [Services](#services)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Docker & Deployment](#docker--deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a monorepo for Uber-like backend services, leveraging NestJS for modularity and scalability. It is organized into separate applications for core services, logging, and rider management, each with its own domain logic and API endpoints.

---

## Monorepo Structure

```
uber-services/
├── apps/
│   ├── logging/
│   │   └── src/
│   │       ├── logging.controller.ts
│   │       ├── logging.service.ts
│   │       ├── rider-coordinates/
│   │       │   ├── rider-coordinates.controller.ts
│   │       │   ├── rider-coordinates.service.ts
│   │       │   ├── dto/
│   │       │   │   └── Create-Coordinates.dto.ts
│   │       │   └── schemas/
│   │       │       └── rider-coordinates.schema.ts
│   ├── rider/
│   │   └── src/
│   │       ├── rider.controller.ts
│   │       ├── rider.service.ts
│   └── uber-services/
│       └── src/
│           ├── app.controller.ts
│           ├── app.service.ts
│           └── main.ts
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

---

## Services

### 1. Logging Service
- Handles application and ride event logging.
- Includes a `rider-coordinates` module for tracking and storing rider locations.

### 2. Rider Service
- Manages rider profiles, registration, and related operations.

### 3. Uber Services (Core)
- Main entry point for ride-hailing logic, trip management, and orchestration.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for containerized development)

### Installation

1. **Clone the repository:**
	```sh
	git clone https://github.com/mrrmartin01/uber-services.git
	cd uber-services
	```

2. **Install dependencies:**
	```sh
	yarn install
	```

3. **Configure environment variables:**
	- Copy `.env.example` to `.env` in each service directory (if present) and update values as needed.

---

## Development

### Running Services Locally

Each service can be run independently for development:

```sh
# Example: Run the logging service
cd apps/
yarn start logging

# Example: Run the rider service
yarn start rider

# Example: Run the core Uber service
cd apps/uber-services
yarn start:dev
```

Or use Docker Compose to run all services:

```sh
docker-compose up --build
```

### Project Scripts
- `yarn start:dev` — Start a service in development mode (hot reload).
- `yarn build` — Build the service for production.
- `yarn test` — Run unit tests.
- `yarn lint` — Lint the codebase.

---

## Testing

Each service includes unit and e2e tests:

```sh
# From the root or inside a service directory
yarn run test
yarn run test:e2e
```

Test files are located in the `test/` folders within each service.

---

## Docker & Deployment

- Use `docker-compose.yml` to orchestrate all services and dependencies (e.g., databases).
- Build and run all services:
  ```sh
  docker-compose up --build
  ```
- Stop services:
  ```sh
  docker-compose down
  ```

---

## API Documentation

- Each service exposes RESTful endpoints. See the respective controller files for details.
- For API testing, use the provided `rest.http` file or tools like Postman.
- Consider integrating Swagger (NestJS supports it) for live API docs.

---

## Contributing

1. Fork the repository and create your branch from `master`.
2. Follow the existing code style and naming conventions.
3. Write clear commit messages and document your changes.
4. Ensure all tests pass before submitting a pull request.
5. For major changes, open an issue first to discuss your proposal.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For questions or support, please open an issue or contact the maintainer at [GitHub](https://github.com/mrrmartin01/uber-services).