import domtoimage from "dom-to-image-more";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useRenderToImageStore = defineStore("renderToImage", () => {
  const canvasRef: any = ref("");
  const renderToImage = (name: string, type: string) => {
    let toDownload: Promise<string> = new Promise(() => "");
    const el = canvasRef;
    const actualEl = el.value;
    switch (type) {
      case "jpg":
        toDownload = domtoimage.toJpeg(actualEl, {
          bgcolor: "#000000",
        });
        break;
      case "png":
        toDownload = domtoimage.toPng(actualEl, {
          bgcolor: "#000000",
        });
        break;
      case "svg":
        toDownload = domtoimage.toSvg(actualEl);
        break;
    }
    toDownload.then((dataUrl) => {
      const link = document.createElement("a");
      link.download = name;
      link.href = dataUrl;
      link.click();
    });
  };
  return {
    canvasRef,
    renderToImage,
  };
});
