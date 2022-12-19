export const resetGrid = () => {
  const items = document.querySelectorAll<HTMLElement>(".painted");
  items.forEach((x) => {
    x.style.backgroundColor = "#ffffff";
  });
};
