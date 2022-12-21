import { render } from "@testing-library/vue";
import { vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import vuetify from "@/plugins/vuetify";

export const renderComponentDefaultFn = (Component: any, opts?: any) => {
  render(Component, {
    ...opts,
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn }), vuetify],
    },
  });
};

export const returnGridEls = (node: any) => {
  if (node && node?.id.includes("gridElement")) {
    return true;
  }
  return false;
};
