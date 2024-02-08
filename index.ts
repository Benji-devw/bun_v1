import figlet from "figlet";
import {Elysia} from "elysia";


const app = new Elysia().get("/", () => { "Hello, World!" })
.get("/post/:id", ({ params: {id} }) => {return {id: id, title: "Title"}} )
.post("/post", ({ body }) => {return body})
.listen(3000);

// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     const body = figlet.textSync("Test !");
//     return new Response(body);
//     // return new Response("Bun!");
//   },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);
console.log(`Listening on http://localhost:3000 ...`);