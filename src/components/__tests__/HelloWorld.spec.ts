import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(HelloWorld, { props: { msg: "test" } });
  });
  it("renders properly", () => {
    expect(wrapper.text()).toContain("est");
  });
  it.each([
    { msg: "hello", expected: "hello" },
    { msg: "hello2", expected: "hello2" },
    { msg: "hello3", expected: "hello3" },
  ])("Be Equal Each ocassion", ({ msg, expected }) => {
    const wrapper2 = mount(HelloWorld, { props: { msg } });
    expect(wrapper2.text()).toContain(expected);
  });
});
