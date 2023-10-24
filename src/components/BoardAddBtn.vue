<template>
  <q-btn color="positive" icon="add" label="Add board" @click="prompt = true"/>
  <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Board name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add board" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      prompt: ref(false),

      address: ref('')
    }
  }
}
</script>

