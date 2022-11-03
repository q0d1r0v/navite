<script lang="ts" setup>
interface IType {
  counter: number;
}

import useStore from '~/store/index';

const store = useStore();

function increment() {
  store.increment()
}

function decrement() {
  store.decrement()
}
</script>

<template>
  <div class="text-center text-xl mt-3">Vue 3 + TypeScript + Vite + Pinia + Naive UI + Tailwind CSS</div>

  <div>
    <div class="w-[200px] mx-auto mt-3" style="display: flex; align-items: center; justify-content: center;">
      <n-button type="error" ghost @click="decrement()"> - </n-button>
      <span class="mx-3">{{store.counter}}</span>
      <n-button type="success" ghost @click="increment()"> + </n-button>
    </div>
  </div>
</template>
