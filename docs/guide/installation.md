# Installation

To install Echo UI in a Vue project, you can use your favorite package manager.

::: code-group

```bash [npm]
npm install echo-ui
```

```bash [yarn]
yarn add echo-ui
```

```bash [pnpm]
pnpm add echo-ui
```

```bash [bun]
bun add echo-ui
```

:::

Once installed, you can import the CSS file in your project's entry file.

```ts
import { createApp } from 'vue'
import App from './App.vue'

import "echo-ui/dist/echo-ui.css" // [!code ++]

createApp(App).mount('#app')
```

After that, you can start using the components in your Vue components.

```vue
<setup script lang="ts">
import { EchoButton } from 'echo-ui'
</setup>

<template>
  <EchoButton>Click me</EchoButton>
</template>
```