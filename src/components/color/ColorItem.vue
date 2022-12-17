<script lang="ts" setup>
const props = defineProps<{
  color: string;
  idx: number;
  currentBrushColor: number;
}>();
</script>
<template>
  <v-card flat :color="props.color" class="mx-2 w-[25px] h-[25px]">
    <v-scale-transition>
      <div
        v-if="props.currentBrushColor == props.idx"
        class="ma-auto my-1 w-50 h-50 align-middle grid content-center justify-center bg-black rounded-lg opacity-80"
      >
        <v-icon color="white" size="15" icon="mdi-check" class="my-auto mx" />
      </div>
    </v-scale-transition>
  </v-card>
</template>
