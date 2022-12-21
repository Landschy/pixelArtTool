import { renderComponentDefaultFn } from "../methods/renderComponentDefaultFn";

import { cleanup, screen } from "@testing-library/vue";
import { describe, it, expect, afterEach } from "vitest";

import Component from "../../color/ColorBrush.vue";
import { beforeEach } from "vitest";

describe("ColorBrush Render", () => {
  beforeEach(() => {
    renderComponentDefaultFn(Component);
  });
  afterEach(() => {
    cleanup();
  });
  it("Show Available Tools (Fill should be also here tested when implemented)", async () => {
    expect(screen.getByText("brush")).toBeDefined();
    //expect(screen.getByText("fill")).toBeDefined();
  });
});
