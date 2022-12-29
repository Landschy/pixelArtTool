import { expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { usePaintStore } from "@/stores/paintStore";
import { storeToRefs } from "pinia";
import { describe, it } from "vitest";

describe("Main Funcionality", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("Changes Color", () => {
    const paintStore = usePaintStore();
    const { currentBrush } = storeToRefs(paintStore);
    const { changeColor } = paintStore;
    const newColor = currentBrush.value.color;
    changeColor(1);
    const oldColor = currentBrush.value.color;
    expect(oldColor).not.toEqual(newColor);
  });

  it("Adds to Library", () => {
    const paintStore = usePaintStore();
    const { colorsLibrary } = storeToRefs(paintStore);
    const { addtoLibrary } = paintStore;
    const oldSize = colorsLibrary.value.length;
    addtoLibrary("#195481");
    const newSize = colorsLibrary.value.length;
    expect(oldSize).not.toEqual(newSize);
  });
  it("Does not add if existing", () => {
    const paintStore = usePaintStore();
    const { colorsLibrary } = storeToRefs(paintStore);
    const { addtoLibrary } = paintStore;
    addtoLibrary("#195481");
    const oldSize = colorsLibrary.value.length;
    addtoLibrary("#195481");
    const newSize = colorsLibrary.value.length;
    expect(oldSize).toEqual(newSize);
  });
});
