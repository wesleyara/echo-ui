# Theme

EchoTheme is a global theme provider that allows you to customize the look and feel of your application. It provides a set of default values that can be overridden using the `v-model` prop.

## Usage

Using the `v-model` prop, you can change the theme of your application.

```vue [App.vue]
<script setup lang="ts">
import { EchoTheme, EchoThemeMode } from "echo-vue-ui";
import { ref } from "vue";

const theme = ref<EchoThemeMode>("dark");
</script>

<template>
  <EchoTheme v-model="theme">
    <!-- Your app here -->
  </EchoTheme>
</template>
```

Using the `customOptions` prop, you can override the default theme options.

```vue [App.vue]
<script setup lang="ts">
import { EchoTheme, EchoThemeOptions, echoThemeOptions } from "echo-vue-ui";

const customOptions: EchoThemeOptions = {
  ...echoThemeOptions,
  // Override the default theme options here
};
</script>

<template>
  <EchoTheme :custom-options="customOptions">
    <!-- Your app here -->
  </EchoTheme>
</template>
```

## API Reference

| Prop             | Default   | Description                                                           |
|------------------|-----------|-----------------------------------------------------------------------|
| `modelValue`     | `dark`    | `'dark' \| 'light'` <br> The current theme applied.                   |
| `customOptions`  | `-`       | `EchoThemeOptions` <br> The theme options to apply to the theme.      |

## Sizes

Echo UI provides a set of sizes that can be used to customize the look and feel of your application. 

The default size is `md`, and the property receive the type `EchoThemeOptionsSizes`. By default, the sizes are: `xs`, `sm`, `md`, `lg`, `xl` and `xxl`.

```vue [index.vue] ts{6}
<script setup lang="ts">
import { EchoIcon } from "echo-vue-ui";
</script>

<template>
  <EchoIcon icon="check" size="lg" />
</template>
```

You can also customize the sizes using the `customOptions` prop, implementing new sizes or overriding the default ones.

## About dark and light mode

Echo UI provides two themes: dark and light. The default theme is dark. When switching between themes, the `secondary` color values ​​become `primary` and the `primary` color values ​​become `secondary`.