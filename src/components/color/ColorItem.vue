<script lang="ts" setup>
const props = defineProps<{
  color: string;
  idx: number;
  currentBrushColor: number;
}>();
</script>
<template>
  <v-card flat :color="color" class="mx-2" height="25" width="25">
    <div class="h-full align-middle grid content-center justify-center">
      <v-scale-transition>
        <v-icon
          v-if="currentBrushColor == idx"
          color="white"
          size="15"
          icon="mdi-check"
          class="my-auto mx"
        />
      </v-scale-transition>
    </div>
  </v-card>
</template>
