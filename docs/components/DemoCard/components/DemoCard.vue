<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";
import { useData } from "vitepress";
import { computed, ref } from "vue";

import { cn, EchoButton } from "../../../lib";
import { DemoCardProps } from "../models/demo-card.models";

const props = defineProps<DemoCardProps>();

const { isDark } = useData();

const tab = ref("preview");

const codeTheme = computed(() => (isDark.value ? "github-dark" : "github"));

const getCardClasses = computed(() => {
  const defaultClasses = `
    flex
    min-h-[300px]
    w-full
    items-center
    justify-center
  `;

  const mergedClasses = cn(defaultClasses, props.cardClasses);

  return mergedClasses;
});

const handleChangeTab = (currentTab: string) => {
  tab.value = currentTab;
};
</script>

<template>
  <section class="flex min-h-[300px] flex-col rounded-lg border border-[var(--echo-ui-disabled)]">
    <span class="flex gap-2 border-b border-[var(--echo-ui-disabled)] p-2">
      <EchoButton
        icon="visibility"
        iconSize="sm"
        variant="outlined"
        @click="handleChangeTab('preview')"
      >
        Preview
      </EchoButton>
      <EchoButton icon="code" iconSize="sm" variant="outlined" @click="handleChangeTab('code')">
        Code
      </EchoButton>
    </span>

    <span v-if="tab === 'preview'" :class="getCardClasses">
      <slot />
    </span>
    <VCodeBlock
      v-else
      class="h-[300px] min-h-[300px] overflow-auto"
      :code="code"
      highlightjs
      lang="typescript"
      :theme="codeTheme"
    />
  </section>
</template>
