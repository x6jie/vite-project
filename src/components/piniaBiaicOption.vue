<template>
  <h1>Option</h1>
  <div>{{ count }}</div>
  <button @click="appStore.useCounterStoreForOption.increment()">+1</button>
</template>

<script setup lang="ts">
import appStore from "../store";
import { mapActions, mapState } from "pinia";
import { computed } from "@vue/runtime-core";
const count = computed(() => {
  return appStore.useCounterStoreForOption.getCount;
});
// const { count } = appStore.useCounterStoreForOption.$state;
console.log(appStore.useCounterStoreForOption);
</script>

<style>
</style>