<script setup lang="ts">
import { ThemeOptions } from "@/theme/models/theme.models";
import { computed, inject } from "vue";

import { EchoIconProps } from "../models/echo-icon.models";

const props = withDefaults(defineProps<EchoIconProps>(), {
  type: "outlined",
  size: "md",
});

const echoThemeOptions = inject("EchoThemeOptions") as ThemeOptions;

const getIconStyles = computed(() => {
  const sizes = echoThemeOptions.sizes;

  return {
    fontSize: sizes[props.size].size,
  };
});

const getIconClasses = computed(() => {
  return `material-symbols-${props.type}`;
});
</script>

<template>
  <span :class="getIconClasses" :style="getIconStyles">{{ icon }}</span>
</template>
