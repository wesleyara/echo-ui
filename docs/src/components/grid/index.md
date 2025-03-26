<script setup>
import { DemoCard } from '../../../components';
import { EchoGrid, EchoGridRow, EchoGridCol } from "../../../lib";
import { gridCode, responsiveGridCode } from './code';
</script>

# EchoGrid

The `EchoGrid` component is a grid component that can be used to create a grid layout.

<DemoCard :code="gridCode">
  <EchoGrid class='px-2'>
    <EchoGridRow>
      <EchoGridCol :size="4">
        <div class="border border-blue-100 p-4 rounded">Coluna 1 (4/12)</div>
      </EchoGridCol>
      <EchoGridCol :size="8">
        <div class="border border-green-100 p-4 rounded">Coluna 2 (8/12)</div>
      </EchoGridCol>
    </EchoGridRow>
  </EchoGrid>
</DemoCard>

## API Reference

### EchoGrid

| Prop    | Default | Required | Type                                              |
| ------- | ------- | -------- | ------------------------------------------------- |
| `class` | `-`     | `false`  | `HTMLAttributes["class"]` <br> The EchoGrid class |

### EchoGridRow

| Prop    | Default | Required | Type                                                 |
| ------- | ------- | -------- | ---------------------------------------------------- |
| `class` | `-`     | `false`  | `HTMLAttributes["class"]` <br> The EchoGridRow class |

### EchoGridCol

| Prop   | Default | Required | Type                                   |
| ------ | ------- | -------- | -------------------------------------- |
| `size` | `1`     | `true`   | `EchoGridColSize` <br> The column size |

### EchoGridColSize

| Default | Type                                                                                        |
| ------- | ------------------------------------------------------------------------------------------- |
| `1`     | `number \| Record<"2xl" \| "lg" \| "md" \| "sm" \| "xl", number>` <br> The column size type |

## Examples

### Grid Layout

<DemoCard :code="gridCode">
  <EchoGrid class='px-2'>
    <EchoGridRow>
      <EchoGridCol :size="4">
        <div class="border border-blue-100 p-4 rounded">Coluna 1 (4/12)</div>
      </EchoGridCol>
      <EchoGridCol :size="8">
        <div class="border border-green-100 p-4 rounded">Coluna 2 (8/12)</div>
      </EchoGridCol>
    </EchoGridRow>
  </EchoGrid>
</DemoCard>

### Responsive Grid Layout

<DemoCard :code="responsiveGridCode">
  <EchoGrid class='p-2'>
    <EchoGridRow>
      <EchoGridCol v-for="i in 6" :key="i" :size="{ sm: 6, md: 4, lg: 3, xl: 2 }">
        <div class="border border-blue-100 p-4 rounded">Coluna {{ i }} (12)</div>
      </EchoGridCol>
    </EchoGridRow>
  </EchoGrid>
</DemoCard>
