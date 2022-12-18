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
  VDivider,
  VList,
  VListItem,
  VLayout,
  VNavigationDrawer,
  VScaleTransition,
  VApp,
  VMain,
  VExpansionPanels,
  VExpansionPanel,
  VAvatar,
  VSlider,
  VSelect,
  VTextField,
  VForm,
  VLabel,
} from "vuetify/components";

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VColorPicker,
    VBtn,
    VSheet,
    VSlideGroup,
    VSlideGroupItem,
    VCard,
    VIcon,
    VScaleTransition,
    VDivider,
    VList,
    VListItem,
    VLayout,
    VNavigationDrawer,
    VExpansionPanels,
    VExpansionPanel,
    VAvatar,
    VSlider,
    VSelect,
    VTextField,
    VForm,
    VLabel,
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
