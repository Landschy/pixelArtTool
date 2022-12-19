<script lang="ts" setup>
import { ref } from "vue";
import { usePaintStore } from "@/stores/paintStore";

const imagetypes = ["jpg", "png", "svg"];

const imageDownload = ref({ name: "", format: "jpg" });
const isAbleTodownload = ref(false);
const rules = {
  required: (v: any) => !!v || "Field required",
};
const paintStore = usePaintStore();
const renderToImage = paintStore.renderToImage;
</script>

<template>
  <v-form v-model="isAbleTodownload" lazy-validation>
    <v-text-field
      class="mt-5"
      :rules="[rules.required]"
      label="File Name"
      variant="outlined"
      clearable
      v-model="imageDownload.name"
    ></v-text-field>
    <v-select
      class="mt-5"
      variant="outlined"
      label="File Format"
      :item-value="imageDownload.format"
      v-model="imageDownload.format"
      :items="imagetypes"
    ></v-select>
    <v-btn
      :disabled="!isAbleTodownload"
      :color="isAbleTodownload ? 'warning' : ''"
      :append-icon="'mdi-heart'"
      @click="() => renderToImage(imageDownload.name, imageDownload.format)"
    >
      Download Art
    </v-btn>
  </v-form>
</template>
