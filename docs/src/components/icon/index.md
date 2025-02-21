<script setup>
import { DemoCard } from '../../../components';
import { EchoIcon } from "../../../../src/index.ts";
</script>


# EchoIcon

The `EchoIcon` component is used to display icons within the user interface.


<DemoCard>
  <EchoIcon icon="check" />
</DemoCard>

## Usage

```vue [index.vue]
<script setup lang="ts">
import { EchoIcon } from "echo-vue-ui";
</script>

<template>
  <EchoIcon icon="check" />
</template> 
```

## API Reference

| Prop           | Default    | Description                                                                                           |
| -------------- | -----------| ------------------------------------------------------------------------------------------------------|
| `icon`         | `-`        | `string` <br> The name of the icon to display. [Material Symbols](https://fonts.google.com/icons)     |
| `size`         | `md`       | `string` <br> The size of the icon. [See Theme docs](../../guide/theme/index.md#sizes) |
| `type`         | `outlined` | `'outlined' \|  'sharp' \| 'rounded'` <br> The type of the icon.                                      |

## Examples

### Check Icon

<DemoCard>
  <EchoIcon icon="check" />
</DemoCard>

```vue [index.vue]
<script setup lang="ts">
import { EchoIcon } from "echo-vue-ui";
</script>

<template>
  <EchoIcon icon="check" />
</template>
```

### Large Check Icon

<DemoCard>
  <EchoIcon icon="check" size="lg" />
</DemoCard>

```vue [index.vue]
<script setup lang="ts">
import { EchoIcon } from "echo-vue-ui";
</script>

<template>
  <EchoIcon icon="check" size="lg" />
</template>
```

### Extra Large Check Icon

<DemoCard>
  <EchoIcon icon="check" size="xl" />
</DemoCard>

```vue [index.vue]
<script setup lang="ts">
import { EchoIcon } from "echo-vue-ui";
</script>

<template>
  <EchoIcon icon="check" size="xl" />
</template>
```
