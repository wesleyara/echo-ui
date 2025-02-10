<script setup>
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { ref, watch } from "vue";

import { EchoTheme } from "../../../src/index.ts";

const { Layout } = DefaultTheme;

const { isDark } = useData();

const theme = ref("light");

watch(
  isDark,
  val => {
    theme.value = val ? "dark" : "light";
  },
  { immediate: true },
);
</script>

<template>
  <EchoTheme v-model="theme">
    <Layout />
  </EchoTheme>
</template>
