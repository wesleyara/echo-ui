<script setup lang="ts">
import { computed } from "vue";

import { EchoGridColProps } from "../models/echo-grid-col.models";

const props = withDefaults(defineProps<EchoGridColProps>(), {
  size: 1,
});

const colClass = computed(() => {
  if (typeof props.size === "object") {
    let defaultClasses = "col-span-12";

    for (const [key, value] of Object.entries(props.size)) {
      defaultClasses += ` ${key}:col-span-${value}`;
    }

    return defaultClasses;
  }

  return `col-span-${props.size}`;
});
</script>

<template>
  <div :class="colClass">
    <slot />
  </div>
</template>
