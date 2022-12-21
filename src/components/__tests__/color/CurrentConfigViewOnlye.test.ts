import { renderComponentDefaultFn } from "../methods/renderComponentDefaultFn";

import { cleanup, screen } from "@testing-library/vue";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

import Component from "../../color/CurrentConfigViewOnly.vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

describe("Current Config Shows Store Values", () => {
  const findCurrentTool = (tool: string) => {
    return screen.getByText(tool);
  };
  const findCurrentColor = (color: string) => {
    return screen.getByText(color);
  };
  beforeEach(() => {
    renderComponentDefaultFn(Component);
  });
  afterEach(() => {
    cleanup();
  });
  it("renders properly", () => {
    const paintStore = usePaintStore();
    const { currentBrush, currentToPaint } = storeToRefs(paintStore);
    expect(findCurrentColor(currentToPaint.value)).toBeDefined();
    expect(findCurrentTool(currentBrush.value.type)).toBeDefined();
  });
});
