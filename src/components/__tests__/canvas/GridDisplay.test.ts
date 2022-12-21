import {
  renderComponentDefaultFn,
  returnGridEls,
} from "../methods/renderComponentDefaultFn";

import { cleanup, screen } from "@testing-library/vue";
import { describe, it, expect, afterEach } from "vitest";

import Component from "../../canvas/GridDisplay.vue";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import { beforeEach } from "vitest";
import { paintSquare } from "@/stores/methods/canvasMethods";

declare module "vitest" {
  export interface TestContext {
    fullSize: number;
  }
}

describe("Grid Displays the correct Size when needed", () => {
  const getCanvasPaint = () => {
    return screen.getAllByText((component, node) => returnGridEls(node));
  };
  const getSquarePaint = () => {
    return getCanvasPaint()[0];
  };
  beforeEach((context) => {
    renderComponentDefaultFn(Component);
    const paintStore = usePaintStore();
    const { gridSize } = storeToRefs(paintStore);
    context.fullSize = Math.pow(gridSize.value, 2);
  });
  afterEach(() => {
    cleanup();
  });
  it("Initial Grid has the correct size", ({ fullSize }) => {
    expect(
      screen.getAllByText((component, node) => {
        return returnGridEls(node);
      }).length
    ).toEqual(fullSize);
  });

  it("Paints and UnPaints (same color) within the Grid Accordingly", async () => {
    const id = getSquarePaint().id.replace(/[A-z]+/, "");
    paintSquare(+id, "#464646");
    expect(getSquarePaint().classList.contains("painted")).toBeTruthy();
    paintSquare(+id, "#505050");
    expect(getSquarePaint().classList.contains("painted")).toBeTruthy();
    paintSquare(+id, "#505050");
    expect(getSquarePaint().classList.contains("painted")).toBeFalsy();
  });
});
