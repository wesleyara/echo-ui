<script setup>
import { DemoCard } from '../../../components';
import { EchoButton } from "../../../../src/index.ts";
</script>


# EchoButton

The `EchoButton` component is a button component that can be used to trigger actions when clicked.


## Exemplo de Botão


<DemoCard>
  <EchoButton>Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton>Click me</EchoButton>
</template>
```

## Usage

```vue
<script setup lang="ts">
import { EchoButton } from "echo-ui";
</script>

<template>
  <EchoButton>Click me</EchoButton>
</template>
```

## API Reference

| Prop          | Default   | Description                                                                                         |
|---------------|-----------|-----------------------------------------------------------------------------------------------------|
| `variant`     | `primary` | `EchoButtonVariant` <br> The variant of the button.                                                 |
| `disabled`    | `-`       | `boolean` <br> Whether the button is disabled.                                                      |
| `size`        | `md`      | `keyof EchoThemeOptions["sizes"]` <br> The size of the button. [Theme docs](../../guide/theme/index.md) |
| `icon`        | `-`       | `string` <br> The name of the icon to display.                                                      |
| `iconPosition`| `left`    | `'left' \| 'right'` <br> The position of the icon.                                                  |
| `iconSize`    | `md`      | `keyof EchoThemeOptions["sizes"]` <br> The size of the icon. [Theme docs](../../guide/theme/index.md)   |
| `class`       | `-`       | `string` <br> Additional classes to apply to the button.                                            |

---

| Data Attribute | Value |
|----------------|------------------------------|
| `[data-disabled]` | `'enabled' \| 'disabled'` |

## Examples

### Primary Button

<DemoCard>
  <EchoButton>Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton>Click me</EchoButton>
</template>
```

### Secondary Button

<DemoCard card-classes="bg-[var(--echo-ui-secondary)]">
  <EchoButton variant="secondary">Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton variant="secondary">Click me</EchoButton>
</template>
```

### Disabled Button

<DemoCard>
  <EchoButton disabled>Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton disabled>Click me</EchoButton>
</template>
```

### Icon Left Button

<DemoCard>
  <EchoButton icon="check">Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton icon="check">Click me</EchoButton>
</template>
```

### Icon Right Button


<DemoCard>
  <EchoButton icon="check" icon-position="right">Click me</EchoButton>
</DemoCard>

```vue [index.vue]
<template>
  <EchoButton icon="check" icon-position="right">Click me</EchoButton>
</template>
```

