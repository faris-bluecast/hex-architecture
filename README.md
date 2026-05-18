# Hexagonal Architecture POC — NestJS

## Client Requirement Evolution

This POC was intentionally designed around a realistic requirement change scenario.

### Phase 1 — Initial Requirement

The client initially requested a very lightweight API:

```text id="91l95s"
- Simple REST endpoints
- Fast delivery
- No persistence required
- Data can live in memory
```

At this stage, implementing a database would have been unnecessary complexity.

So we created:

* domain entities
* use cases
* an in-memory repository adapter

Example:

```text id="cc9th7"
InMemoryTaskRepository
```

This allowed the application to function quickly without introducing persistence concerns.

---

## Phase 2 — Requirement Change

Later, the client changed the requirement:

```text id="6d4ov2"
"We now need persistent storage."
```

Normally, in tightly coupled architectures, this kind of change causes:

* controller rewrites
* service rewrites
* business logic changes
* direct ORM coupling
* widespread refactoring

However, because this project uses Hexagonal Architecture:

```text id="y0xq4v"
Application → depends on Ports
Infrastructure → implements Ports
```

we only replaced the outbound adapter:

```text id="7um7v9"
InMemoryTaskRepository
        ↓
PrismaTaskRepository
```

The following layers remained unchanged:

* controllers
* use cases
* domain entities
* application logic

Only the infrastructure wiring changed.

This demonstrates the primary benefit of Hexagonal Architecture:

```text id="b9n97o"
Infrastructure can evolve
without rewriting business logic.
```

---

# Architecture Overview

```text id="8xbzph"
                ┌────────────────────┐
                │   External World   │
                └─────────┬──────────┘
                          │
                ┌─────────▼──────────┐
                │   Inbound Adapter  │
                │   (HTTP Controller)│
                └─────────┬──────────┘
                          │
                ┌─────────▼──────────┐
                │   Application      │
                │   (Use Cases)      │
                └─────────┬──────────┘
                          │
                ┌─────────▼──────────┐
                │      Domain        │
                │  (Business Logic)  │
                └─────────┬──────────┘
                          │
                ┌─────────▼──────────┐
                │   Outbound Port    │
                │ (Repository Port)  │
                └─────────┬──────────┘
                          │
                ┌─────────▼──────────┐
                │ Outbound Adapter   │
                │ Prisma Repository  │
                └────────────────────┘
```

---

# Folder Structure

```text id="w4wq2h"
src/
├── prisma/
│   └── prisma.service.ts
│
├── modules/
│   └── task/
│       ├── domain/
│       ├── application/
│       ├── adapters/
│       ├── infrastructure/
│       ├── task.module.ts
│       └── task.tokens.ts
│
└── main.ts
```

---

# Domain Layer

```text id="6q8x5g"
modules/task/domain/
```

Contains:

* business entities
* business rules
* ports/interfaces

This layer must remain independent of:

* NestJS
* Prisma
* HTTP
* databases

Example:

```ts id="1osg7q"
export class Task {
  constructor(
    public readonly id: string,
    public title: string,
  ) {}
}
```

---

# Ports

Ports define contracts that the application depends on.

Example:

```ts id="jccp4f"
export interface TaskRepositoryPort {
  save(task: Task): Promise<void>;
  findById(id: string): Promise<Task | null>;
  findAll(): Promise<Task[]>;
}
```

The application knows:

* what operations exist

but not:

* how they are implemented

This enables infrastructure replacement with minimal changes.

---

# Application Layer

```text id="fy0m8m"
modules/task/application/
```

Contains:

* use cases
* orchestration logic
* DTOs

Example:

```text id="tt6jk9"
CreateTaskUseCase
GetTaskUseCase
ListTasksUseCase
```

Each use case represents one business action.

---

# Adapters

Adapters connect the application to external systems.

## Inbound Adapters

```text id="zwps2n"
adapters/inbound/
```

Examples:

* REST controllers
* GraphQL
* WebSocket

In this project:

```text id="zyd0gh"
TaskController
```

handles HTTP requests.

---

## Outbound Adapters

```text id="y76n85"
adapters/outbound/
```

Examples:

* databases
* queues
* external APIs

### First Implementation

```text id="v2t1pq"
InMemoryTaskRepository
```

### Later Replacement

```text id="j6xtjc"
PrismaTaskRepository
```

No business logic changed during this migration.

---

# Infrastructure Layer

```text id="0ebktj"
infrastructure/
```

Contains:

* dependency injection
* provider configuration
* framework wiring

Example:

```text id="i7zvhq"
task.providers.ts
```

This layer decides which adapter implementation is used.

---

# Dependency Direction

Dependencies always move inward:

```text id="yizjlwm"
Adapters → Application → Domain
```

The domain never depends on infrastructure.

---

# Key Benefit Demonstrated

This POC validates that:

```text id="s2d7ns"
Changing infrastructure should not require
rewriting business logic.
```

The persistence layer evolved from:

* no database
* in-memory storage

to:

* SQLite persistence with Prisma

while the core application remained stable.
