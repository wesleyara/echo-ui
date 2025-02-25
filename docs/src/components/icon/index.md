<script setup>
import { DemoCard } from '../../../components';
import { EchoIcon } from "../../../lib";
import { iconCode, largeIconCode, extraLargeIconCode } from "./code";
</script>

# EchoIcon

The `EchoIcon` component is used to display icons within the user interface.

<DemoCard :code="iconCode">
  <EchoIcon icon="check" />
</DemoCard>

## API Reference

| Prop   | Default    | Description                                                                                       |
| ------ | ---------- | ------------------------------------------------------------------------------------------------- |
| `icon` | `-`        | `string` <br> The name of the icon to display. [Material Symbols](https://fonts.google.com/icons) |
| `size` | `md`       | `string` <br> The size of the icon. [See Theme docs](../../guide/theme/index.md#sizes)            |
| `type` | `outlined` | `'outlined' \|  'sharp' \| 'rounded'` <br> The type of the icon.                                  |

## Examples

### Check Icon

<DemoCard :code="iconCode">
  <EchoIcon icon="check" />
</DemoCard>

### Large Check Icon

<DemoCard :code="largeIconCode">
  <EchoIcon icon="check" size="lg" />
</DemoCard>

### Extra Large Check Icon

<DemoCard :code="extraLargeIconCode">
  <EchoIcon icon="check" size="xl" />
</DemoCard>
