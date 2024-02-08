import figlet from "figlet";
import {Elysia} from "elysia";

// console.log(process.env.PG_DB_HOST);


const app = new Elysia().get("/", () => { "Hello, World!" })


app.get("/post/:id", ({ params: {id} }) => {return {id: id, title: "Title"}} )


app.post("/post", ({ body }) => {return body})


app.listen(3000);

// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     const body = figlet.textSync("Test !");
//     return new Response(body);
//     // return new Response("Bun!");
//   },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);
console.log(`Elysia is running on ${app.server?.hostname}:${app.server?.port}`);