<script setup>
import { DemoCard } from '../../../components';
import { EchoButton } from "../../../lib";
import { buttonCode, secondaryButtonCode, disabledButtonCode, textButtonCode, iconLeftButtonCode, iconRightButtonCode } from "./code";
</script>

# EchoButton

The `EchoButton` component is a button component that can be used to trigger actions when clicked.

<DemoCard :code="buttonCode">
  <EchoButton>Click me</EchoButton>
</DemoCard>

## API Reference

| Prop           | Default   | Description                                                                        |
| -------------- | --------- | ---------------------------------------------------------------------------------- |
| `variant`      | `primary` | `EchoButtonVariant` <br> The variant of the button.                                |
| `disabled`     | `-`       | `boolean` <br> Whether the button is disabled.                                     |
| `size`         | `md`      | `string` <br> The size of the button. [See Theme docs](../../guide/theme/index.md) |
| `icon`         | `-`       | `string` <br> The name of the icon to display.                                     |
| `iconPosition` | `left`    | `'left' \| 'right'` <br> The position of the icon.                                 |
| `iconSize`     | `md`      | `string` <br> The size of the icon. [See Theme docs](../../guide/theme/index.md)   |
| `class`        | `-`       | `string` <br> Additional classes to apply to the button.                           |

---

| Data Attribute    | Value                     |
| ----------------- | ------------------------- |
| `[data-disabled]` | `'enabled' \| 'disabled'` |

## Examples

### Primary Button

<DemoCard :code="buttonCode">
  <EchoButton>Click me</EchoButton>
</DemoCard>

### Secondary Button

<DemoCard card-classes="bg-[var(--echo-ui-secondary)]" :code="secondaryButtonCode">
  <EchoButton variant="secondary">Click me</EchoButton>
</DemoCard>

### Disabled Button

<DemoCard :code="disabledButtonCode">
  <EchoButton disabled>Click me</EchoButton>
</DemoCard>

### Text Button

<DemoCard :code="textButtonCode">
  <EchoButton variant="text">Click me</EchoButton>
</DemoCard>

### Icon Left Button

<DemoCard :code="iconLeftButtonCode">
  <EchoButton icon="check">Click me</EchoButton>
</DemoCard>

### Icon Right Button

<DemoCard :code="iconRightButtonCode">
  <EchoButton icon="check" icon-position="right">Click me</EchoButton>
</DemoCard>
