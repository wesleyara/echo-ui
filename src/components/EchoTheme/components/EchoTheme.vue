<script setup lang="ts">
import { themeOptions } from "@/theme";
import { ThemeOptions } from "@/theme/models/theme.models";
import { onBeforeMount, provide, watch } from "vue";

const modelValue = defineModel({
  default: "dark",
  type: String,
});

provide("EchoThemeOptions", themeOptions);

const generateClassAndVar = (colors: ThemeOptions["colors"]) => {
  const variables = [];
  const classes = [];

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
        const textClass = `.echo-ui-text-${colorRef} { color: var(--echo-ui-${colorRef}); }`;
        const bgClass = `.echo-ui-bg-${colorRef} { background-color: var(--echo-ui-${colorRef}); }`;
        const borderClass = `.echo-ui-border-${colorRef} { border-color: var(--echo-ui-${colorRef}); }`;

        variables.push(variable);
        classes.push(textClass, bgClass, borderClass);
      } else {
        const variable = `--echo-ui-${colorRef}-${variantValue}: ${colorVariants[variantValue]};`;
        const textClass = `.echo-ui-text-${colorRef}-${variantValue} { color: var(--echo-ui-${colorRef}-${variantValue}); }`;
        const bgClass = `.echo-ui-bg-${colorRef}-${variantValue} { background-color: var(--echo-ui-${colorRef}-${variantValue}); }`;
        const borderClass = `.echo-ui-border-${colorRef}-${variantValue} { border-color: var(--echo-ui-${colorRef}-${variantValue}); }`;

        variables.push(variable);
        classes.push(textClass, bgClass, borderClass);
      }
    }
  }

  return { variables, classes };
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
    const { classes, variables } = generateClassAndVar(themeOptions.colors);

    document.head.appendChild(
      Object.assign(document.createElement("style"), {
        textContent: `:root { ${variables.join(" ")} } ${classes.join(" ")}`,
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
