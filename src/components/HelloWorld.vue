<template>
  <h1>Setup</h1>
  <div>{{ count }}</div>
  <button @click="changeCount">+1</button>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import appStore from "../store";
console.log(appStore);

const { count } = storeToRefs(appStore.useCounterStoreForSetup);
const { changeCount } = appStore.useCounterStoreForSetup;
const eventList = reactive({
  handlerClick: () => {},
});
</script>

<style>
</style>