import Elysia from "elysia";

const routerUser = (app: Elysia) => app
    .get('/id/:id', ({ params: { id } }) => getUserById(id));
export { routerUser }

async function getUserById(id: string) {
    return { iddsfs: id };
}