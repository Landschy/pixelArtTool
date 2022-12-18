<script lang="ts" setup>
import { ref } from "vue";
import { usePaintStore } from "@/stores/paintStore";

interface downloadFormat {
  value: "jpg" | "png" | "svg";
}
const imagetypes = ["jpg", "png", "svg"];

const paintStore = usePaintStore();
const renderToImage = paintStore.renderToImage;

const imageDownload = ref({ name: "", format: "jpg" });
const isAbleTodownload = ref(false);
const rules = {
  required: (v: any) => !!v || "Field required",
};
</script>

<template>
  <v-form v-model="isAbleTodownload" lazy-validation>
    <v-text-field
      :rules="[rules.required]"
      label="File Name"
      variant="outlined"
      clearable
      v-model="imageDownload.name"
    ></v-text-field>
    <v-select
      variant="outlined"
      label="File Format"
      :item-value="imageDownload.format"
      v-model="imageDownload.format"
      :items="imagetypes"
    ></v-select>
    <v-btn
      :disabled="!isAbleTodownload"
      color="warning"
      :append-icon="'mdi-heart'"
      @click="() => renderToImage(imageDownload.name, imageDownload.format as downloadFormat['value'])"
    >
      Download Art
    </v-btn>
  </v-form>
</template>
