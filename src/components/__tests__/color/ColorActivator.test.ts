import { renderComponentDefaultFn } from "../methods/renderComponentDefaultFn";

import { cleanup, screen } from "@testing-library/vue";
import { describe, it, expect, afterEach } from "vitest";

import Component from "../../color/ColorActivator.vue";
import { beforeEach } from "vitest";
import { fireEvent } from "@testing-library/dom";

describe("Color Activator Shoes Correct Text/Functions", () => {
  const findAddNew = async () => {
    return screen.findByText("Add New");
  };
  const findAddColor = async () => {
    return screen.findByText("Add");
  };
  beforeEach(() => {
    renderComponentDefaultFn(Component);
  });
  afterEach(() => {
    cleanup();
  });
  it("Show Correct Initial ADD NEW", async () => {
    expect(await findAddNew()).toBeDefined();
  });
  it("Show Correct ADD after click", async () => {
    fireEvent.click(await findAddNew());
    expect(await findAddColor()).toBeDefined();
  });
});
