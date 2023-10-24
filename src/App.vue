<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hhh lpr fff" class="q-pa-xl">

    <q-header class="bg-transparent text-white">
      <q-toolbar class="justify-center q-pt-xl">
        <RouterLink to="/">
          <q-icon size="4.4em" color="positive" name="tag_faces"/>
        </RouterLink>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>

</style>
