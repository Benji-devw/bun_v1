import { Elysia } from "elysia";
import { getMatches } from "./handlers";

// localhost:3049/api/matches
const matchesRoutes = new Elysia({ prefix: "/matches" })
    .get('/', () => getMatches())

export default matchesRoutes;
