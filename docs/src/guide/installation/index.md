# Installation

To install Echo UI in a Vue project, you can use your favorite package manager.

::: code-group

```bash [npm]
npm install echo-vue-ui
```

```bash [yarn]
yarn add echo-vue-ui
```

```bash [pnpm]
pnpm add echo-vue-ui
```

```bash [bun]
bun add echo-vue-ui
```

:::

Once installed, you can import the CSS file in your project's entry file and import theme component in your App


::: code-group

```ts [main.ts]
import { createApp } from 'vue'
import App from './App.vue'

import "echo-vue-ui/dist/style.css" // [!code ++]

createApp(App).mount('#app')
```

```vue{2,6,8} [App.vue]
<script setup lang="ts">
import { EchoTheme } from "echo-vue-ui";
</script>

<template>
  <EchoTheme>
    <!-- Your app here -->
  </EchoTheme>
</template>
```

:::

After that, you can start using the components in your Vue components.

```vue
<setup script lang="ts">
import { EchoButton } from "echo-vue-ui";
</setup>

<template>
  <EchoButton>Click me</EchoButton>
</template>
```