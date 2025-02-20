<script setup lang="ts">
import { computed } from "vue";

import { cn } from "../../../../src/lib/utils.ts";

const props = defineProps<{ cardClasses?: string }>();

const getCardClasses = computed(() => {
  const defaultClasses = `
    flex
    min-h-[300px]
    w-full
    items-center
    justify-center
  `;

  const mergedClasses = cn(defaultClasses, props.cardClasses);

  console.log(mergedClasses);

  return mergedClasses;
});
</script>

<template>
  <section class="flex min-h-[300px] flex-col rounded-lg border border-[var(--echo-ui-disabled)]">
    <span :class="getCardClasses">
      <slot />
    </span>
  </section>
</template>
