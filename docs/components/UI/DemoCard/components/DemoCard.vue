<script setup lang="ts">
import { computed, ref } from "vue";

import { EchoButton } from "../../../../../src/index.ts";
import { cn } from "../../../../../src/lib/utils.ts";

const props = defineProps<{ cardClasses?: string }>();

const tab = ref("preview");

const handleChange = (tabName: string) => {
  tab.value = tabName;
};

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
  <section class="flex flex-col rounded-lg border border-[var(--echo-ui-disabled)]">
    <span class="flex gap-2 border-b border-[var(--echo-ui-disabled)] p-2">
      <EchoButton
        variant="outlined"
        size="xs"
        icon="visibility"
        @click="() => handleChange('preview')"
      >
        Preview
      </EchoButton>
      <EchoButton variant="outlined" size="xs" icon="code" @click="() => handleChange('source')">
        Source
      </EchoButton>
    </span>

    <span :class="getCardClasses">
      <slot v-if="tab === 'preview'" name="preview" />
      <slot v-else name="source" />
    </span>
  </section>
</template>
