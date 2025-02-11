<script setup>
import { DemoCard } from '../UI/DemoCard';
import { EchoButton } from "../../../src/index.ts";
</script>


# EchoButton

The `EchoButton` component is a button component that can be used to trigger actions when clicked.


<DemoCard>
  <EchoButton>Click me</EchoButton>
</DemoCard>

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

| Prop          | Default   | Description                                                                                |
|---------------|-----------|--------------------------------------------------------------------------------------------|
| `variant`     | `primary` | `EchoButtonVariant` <br> The variant of the button.                                        |
| `disabled`    | `-`       | `boolean` <br> Whether the button is disabled.                                             |
| `size`        | `md`      | `keyof ThemeOptions["sizes"]` <br> The size of the button. [Theme docs](../theme/index.md) |
| `icon`        | `-`       | `string` <br> The name of the icon to display.                                             |
| `iconPosition`| `left`    | `'left' \| 'right'` <br> The position of the icon.                                         |
| `iconSize`    | `md`      | `keyof ThemeOptions["sizes"]` <br> The size of the icon. [Theme docs](../theme/index.md)   |
| `class`       | `-`       | `string` <br> Additional classes to apply to the button.                                   |

---

| Data Attribute | Value |
|----------------|------------------------------|
| `[data-disabled]` | `'enabled' \| 'disabled'` |

## Examples

### Primary Button

<DemoCard>
  <EchoButton>Click me</EchoButton>
</DemoCard>

### Secondary Button

<DemoCard card-classes="bg-[var(--echo-ui-secondary)]">
  <EchoButton variant="secondary">Click me</EchoButton>
</DemoCard>

### Disabled Button

<DemoCard>
  <EchoButton disabled>Click me</EchoButton>
</DemoCard>

### Icon Left Button

<DemoCard>
  <EchoButton icon="check">Click me</EchoButton>
</DemoCard>

### Icon Right Button

<DemoCard>
  <EchoButton icon="check" icon-position="right">Click me</EchoButton>
</DemoCard>

