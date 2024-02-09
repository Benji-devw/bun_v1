import figlet from "figlet";
import { Elysia } from "elysia";
import matchesRoutes from "./routes/matches";


const app = new Elysia();

app
  .group("/api", (app) => app.use(matchesRoutes))
  .listen(process.env.PORT || 3049);

console.log(`Elysia is running on ${app.server?.hostname}:${app.server?.port}`);
