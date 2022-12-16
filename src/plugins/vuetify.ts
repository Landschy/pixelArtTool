import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { mdi, aliases } from "vuetify/iconsets/mdi";
import { createVuetify } from "vuetify";
import * as directives from "vuetify/directives";
import {
  VColorPicker,
  VBtn,
  VSheet,
  VSlideGroup,
  VSlideGroupItem,
  VCard,
  VIcon,
  VScaleTransition,
} from "vuetify/components";

const vuetify = createVuetify({
  components: {
    VColorPicker,
    VBtn,
    VSheet,
    VSlideGroup,
    VSlideGroupItem,
    VCard,
    VIcon,
    VScaleTransition,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
export default vuetify;
