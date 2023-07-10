import { Elysia } from "elysia";

import { routerUser } from "./routes/person";



export const app = new Elysia().group("/user", routerUser).listen({ port: 3000 });



console.log(
  `🦊 Elysia is running at s ${app.server?.port}:${app.server?.port}`
);

