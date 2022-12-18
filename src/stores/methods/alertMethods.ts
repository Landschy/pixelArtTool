import { ref } from "vue";

export const currentAlert = ref({ name: "empty" });
const resetAlert = () => {
  currentAlert.value.name = "empty";
};
export const throwAlert = (msg: string) => {
  currentAlert.value.name = msg;
  setTimeout(() => {
    resetAlert();
  }, 2000);
};
