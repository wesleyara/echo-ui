<script setup lang="ts">
import { EchoThemeOptions } from "@/theme/models/theme.models";
import { computed, inject } from "vue";

import { EchoIconProps } from "../models/echo-icon.models";

const props = withDefaults(defineProps<EchoIconProps>(), {
  type: "outlined",
  size: "md",
});

const echoThemeOptions = inject("EchoThemeOptions") as EchoThemeOptions;

const getIconStyles = computed(() => {
  const sizes = echoThemeOptions.sizes;

  const size = sizes[props.size].iconSize;

  return {
    fontSize: `${size}px`,
  };
});

const getIconClasses = computed(() => {
  return `material-symbols-${props.type}`;
});
</script>

<template>
  <span :class="getIconClasses" :style="getIconStyles">{{ icon }}</span>
</template>
