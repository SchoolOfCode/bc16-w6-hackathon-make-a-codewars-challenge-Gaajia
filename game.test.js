import { squaredNumbers } from "./game";
import { expect, test } from "vitest";

test("The square of 5 should be 25", () => {
  expect(squaredNumbers(5)).toBe(25);
});

test("The square of 5 should be 25", () => {
  expect(squaredNumbers(3)).toBe(9);
});

test("The square of 5 should be 25", () => {
  expect(squaredNumbers(6)).toBe(36);
});
