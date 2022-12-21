import { describe, it, expect, beforeEach, afterEach } from "vitest";

import { cleanup, screen } from "@testing-library/vue";
import { renderComponentDefaultFn } from "../methods/renderComponentDefaultFn";

import Component from "../../canvas/GridSliderSelect.vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";

describe("Grid Slider Test Suite", () => {
  const currentSizeText = (id: number) => {
    return `Current Size: ${id} x ${id}`;
  };
  const findSizeSliderChange = (id: number) =>
    screen.findByText(currentSizeText(id));
  const querySizeSliderChange = (id: number) =>
    screen.queryByText(currentSizeText(id));

  beforeEach(() => {
    renderComponentDefaultFn(Component);
  });
  afterEach(() => {
    cleanup();
  });
  it("is shown when rendered", async () => {
    const { gridSize } = storeToRefs(usePaintStore());
    expect(await findSizeSliderChange(gridSize.value)).toBeDefined();
  });
  it("shows correct size when changed", async () => {
    const { gridSize } = storeToRefs(usePaintStore());
    gridSize.value = 10;
    expect(await findSizeSliderChange(gridSize.value)).toBeDefined();
  });
  it("does not diverge from the actual value. SHALL NOT PASS", async () => {
    const { gridSize } = storeToRefs(usePaintStore());
    gridSize.value = 10;
    expect(querySizeSliderChange(gridSize.value + 1)).toBeNull();
  });
});
