import { expect, test, mock, beforeEach, afterEach } from "bun:test";
const random = mock(() => Math.random());

beforeEach(() => {
  console.log("--- running test.");
});

test("random", async () => {
  const val = random();
  expect(val).toBeGreaterThan(0);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

afterEach(() => {
  console.log("--- done with test.");
});

