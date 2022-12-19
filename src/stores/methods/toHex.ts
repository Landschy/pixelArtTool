export const toHex = (col: string) => {
  if (col.charAt(0) == "r") {
    const newCol = col.replace("rgb(", "").replace(")", "").split(",");
    let r = parseInt(newCol[0], 10).toString(16);
    let g = parseInt(newCol[1], 10).toString(16);
    let b = parseInt(newCol[2], 10).toString(16);
    r = r.length == 1 ? "0" + r : r;
    g = g.length == 1 ? "0" + g : g;
    b = b.length == 1 ? "0" + b : b;
    const colHex = "#" + r + g + b;
    return colHex;
  }
};
