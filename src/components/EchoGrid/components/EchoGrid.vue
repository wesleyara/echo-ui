<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed } from "vue";

import { EchoGridProps } from "../models/echo-grid.models";

const props = defineProps<EchoGridProps>();

const gridClasses = computed(() => {
  const defaultClasses = `
    grid
    w-full
    gap-4
  `;

  const mergedClasses = cn(defaultClasses, props.class);

  return mergedClasses;
});
</script>

<template>
  <div :class="gridClasses">
    <slot />
  </div>
</template>
