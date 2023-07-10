import { describe, expect, test } from "bun:test";

import { app } from './index';

describe("app", async () => {
    test("user", async () => {
        const response = await app.handle(
            new Request('http://localhost:3000/user/id/1')
        ).then(res => res.text())

        const { id } = JSON.parse(response)

        expect(id).toBe("1")
    })
})

describe("routes", () => {
    test("2+2", () => {
        let sum = 2 + 2;
        expect(sum).toBe(4);
    });
})