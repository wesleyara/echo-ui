<script setup lang="ts">
import { echoThemeOptions } from "@/theme";
import { EchoThemeOptions } from "@/theme/models/theme.models";
import { onBeforeMount, provide, watch } from "vue";

import { EchoThemeProps } from "../models/echo-theme.models";

const modelValue = defineModel({
  default: "dark",
  type: String,
});

const props = withDefaults(defineProps<EchoThemeProps>(), {
  customTheme: () => echoThemeOptions,
});

provide("EchoThemeOptions", props.customTheme);

const generateClassAndVar = (colors: EchoThemeOptions["colors"]) => {
  const variables = [];

  for (const color in colors) {
    let colorRef = color;

    if (color === "primary" && modelValue.value === "light") {
      colorRef = "secondary";
    }

    if (color === "secondary" && modelValue.value === "light") {
      colorRef = "primary";
    }

    const colorVariants = colors[color];

    for (const variant in colorVariants) {
      const variantValue = variant as keyof typeof colorVariants;

      if (variantValue === "default") {
        const variable = `--echo-ui-${colorRef}: ${colorVariants[variantValue]};`;

        variables.push(variable);
      } else {
        const variable = `--echo-ui-${colorRef}-${variantValue}: ${colorVariants[variantValue]};`;

        variables.push(variable);
      }
    }
  }

  return { variables };
};

onBeforeMount(() => {
  const themeSelected = localStorage.getItem("EchoTheme");

  if (themeSelected && (themeSelected === "dark" || themeSelected === "light")) {
    modelValue.value = themeSelected;
  } else {
    localStorage.setItem("EchoTheme", modelValue.value);
  }
});

watch(
  modelValue,
  value => {
    localStorage.setItem("EchoTheme", value);
    const { variables } = generateClassAndVar(echoThemeOptions.colors);

    document.head.appendChild(
      Object.assign(document.createElement("style"), {
        textContent: `:root { ${variables.join(" ")} }`,
      }),
    );
  },
  { immediate: true },
);
</script>

<template>
  <div id="echo-theme">
    <slot />
  </div>
</template>
