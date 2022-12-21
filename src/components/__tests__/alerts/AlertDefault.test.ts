import { renderComponentDefaultFn } from "../methods/renderComponentDefaultFn";

import { cleanup, screen } from "@testing-library/vue";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { throwAlert } from "@/stores/methods/alertMethods";

import AlertDefault from "../../alerts/AlertDefault.vue";

describe("Alert Test", () => {
  beforeEach(() => {
    renderComponentDefaultFn(AlertDefault);
  });
  afterEach(() => {
    cleanup();
  });
  it("renders properly an alert", async () => {
    const alertProps = { name: "error", text: "this is an alert" };
    throwAlert(alertProps.name, alertProps.text, "red", "icon");
    expect(await screen.findByText(alertProps.name + "!")).toBeDefined();
    expect(await screen.findByText(alertProps.text)).toBeDefined();
  });
});
