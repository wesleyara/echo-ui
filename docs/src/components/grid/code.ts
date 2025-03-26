export const gridCode = `
<script setup lang="ts">
import { EchoGrid, EchoGridRow, EchoGridCol } from "echo-vue-ui";
</script>

<template>
  <EchoGrid class='px-2'>
    <EchoGridRow>
      <EchoGridCol :colSize="4">
        <div class="border border-blue-100 p-4 rounded">Coluna 1 (4/12)</div>
      </EchoGridCol>
      <EchoGridCol :colSize="8">
        <div class="border border-green-100 p-4 rounded">Coluna 2 (8/12)</div>
      </EchoGridCol>
    </EchoGridRow>
  </EchoGrid>
</template>
`;

export const responsiveGridCode = `
<script setup lang="ts">
import { EchoGrid, EchoGridRow, EchoGridCol } from "echo-vue-ui";
</script>

<template>
  <EchoGrid class='p-2'>
    <EchoGridRow>
      <EchoGridCol v-for="i in 6" :key="i" :size="{ sm: 6, md: 4, lg: 3, xl: 2 }">
        <div class="border border-blue-100 p-4 rounded">Coluna {{ i }} (12)</div>
      </EchoGridCol>
    </EchoGridRow>
  </EchoGrid>
</template>
`;
