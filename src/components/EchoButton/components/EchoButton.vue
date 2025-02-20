<script setup lang="ts">
import { EchoIcon } from "@/components/EchoIcon";
import { cn } from "@/lib/utils";
import { EchoThemeOptions } from "@/theme/models/theme.models";
import { computed, inject } from "vue";

import { EchoButtonProps } from "../models/echo-button.models";

const props = withDefaults(defineProps<EchoButtonProps>(), {
  variant: "primary",
  size: "md",
  iconPosition: "left",
});

const echoThemeOptions = inject("EchoThemeOptions") as EchoThemeOptions;

const isDisabled = computed(() => (props.disabled ? "disabled" : "enabled"));

const getButtonClass = computed(() => {
  const defaultClasses = `
    flex
    items-center
    justify-center
    gap-2
    rounded 
    px-4 
    py-2 
    font-bold 
    text-white 
    transition 
    duration-300 
    ease-in-out 

    data-[disabled='enabled']:cursor-pointer

    data-[disabled='disabled']:opacity-50
    data-[disabled='disabled']:hover:opacity-50
    data-[disabled='disabled']:cursor-not-allowed
  `;

  const variantClasses = {
    "bg-[var(--echo-ui-secondary)] text-[var(--echo-ui-primary)] data-[disabled='enabled']:hover:opacity-90":
      props.variant === "primary",
    "bg-[var(--echo-ui-primary)] text-[var(--echo-ui-secondary)] data-[disabled='enabled']:hover:opacity-90":
      props.variant === "secondary",
    "border border-solid border-[var(--echo-ui-disabled)] text-[var(--echo-ui-secondary)] data-[disabled='enabled']:hover:bg-[var(--echo-ui-secondary)] data-[disabled='enabled']:hover:text-[var(--echo-ui-primary)]":
      props.variant === "outlined",
    "text-[var(--echo-ui-secondary)]": props.variant === "text",
  };

  const sizeClasses = echoThemeOptions.sizes[props.size].class;

  const mergedClasses = cn(defaultClasses, variantClasses, sizeClasses, props.class);

  return mergedClasses;
});
</script>

<template>
  <button :data-disabled="isDisabled" :disabled="disabled" :class="getButtonClass">
    <EchoIcon v-if="icon && iconPosition === 'left'" :icon="icon" :size="iconSize" />
    <slot />
    <EchoIcon v-if="icon && iconPosition === 'right'" :icon="icon" :size="iconSize" />
  </button>
</template>
