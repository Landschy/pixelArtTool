import { ref } from "vue";

const emptyAlert = { name: "", text: "", color: "", icon: "" };
export const currentAlert = ref(emptyAlert);
const resetAlert = () => {
  currentAlert.value = emptyAlert;
};
export const throwAlert = (
  name: string,
  text: string,
  color: string,
  icon: string
) => {
  currentAlert.value = { name, text, color, icon };
  setTimeout(() => {
    resetAlert();
  }, 2000);
};
