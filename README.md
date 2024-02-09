# quickstart

To install dependencies:

.env file:
```bash
DATABASE_URL="postgresql://name:pass&&@localhost:5432/dbname?schema=public"
```
Create a database migration and seed:
```bash
bun install
bunx prisma init
bunx prisma migrate dev --name create_post_model
-- bunx prisma db seed
```

To run:
```bash
bun run go
bun run index.ts
bun --watch index.tsx
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
