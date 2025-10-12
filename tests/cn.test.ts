import test from "node:test";
import assert from "node:assert/strict";

import { cn } from "../src/lib/utils";

test("cn combines multiple class names", () => {
  assert.equal(cn("flex", "items-center", "gap-4"), "flex items-center gap-4");
});

test("cn resolves conflicting Tailwind utilities", () => {
  assert.equal(cn("px-2", "px-4"), "px-4");
});

test("cn supports conditional class objects", () => {
  const isActive = true;
  const result = cn("text-base", { "text-muted-foreground": !isActive, "text-primary": isActive });
  assert.equal(result, "text-base text-primary");
});
