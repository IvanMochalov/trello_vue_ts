<script setup lang="ts">
import { reactive, watch, onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { initialData } from './data/source';

let initialValue = reactive(initialData);

const storageData = localStorage.getItem('boardsList');

if (storageData) {
  initialValue = JSON.parse(storageData);
}

// test data
onMounted(() => {
  localStorage.setItem('boardsList', JSON.stringify(initialValue));
})

watch(initialValue, (val) => {
  localStorage.setItem('boardsList', JSON.stringify(val));
})
</script>

<template>
  <q-layout view="hhh lpr fff" class="q-pa-xl">
    <q-header class="bg-transparent text-white">
      <q-toolbar class="justify-center q-pt-xl">
        <RouterLink to="/">
          <q-icon size="4.4em" color="positive" name="tag_faces" />
        </RouterLink>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
