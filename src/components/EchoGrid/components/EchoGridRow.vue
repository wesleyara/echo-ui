<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed } from "vue";

import { EchoGridRowProps } from "../models/echo-grid-row.models";

const props = defineProps<EchoGridRowProps>();

const gridRowClasses = computed(() => {
  const defaultClasses = `
    grid
    grid-cols-12
    gap-4
  `;

  const mergedClasses = cn(defaultClasses, props.class);

  return mergedClasses;
});
</script>

<template>
  <div :class="gridRowClasses">
    <slot />
  </div>
</template>
