<script setup lang="ts">
import type { TInitialData } from '@/type';
import { inject } from 'vue';

const initialData = inject<TInitialData>('boardsList');

function editHandle() {
	console.log('edit');
}
function removeHandle() {
	console.log('remove');
}
</script>

<template>
	<q-list class="border-list" v-if="initialData?.boardOrder.length">
		<q-card
			class="my-card q-pa-md"
			flat
			bordered
			horizontal
			clickable
			v-ripple
			v-for="board_id in initialData?.boardOrder"
		>
			<RouterLink class="my-card-link" to="/" tabindex="-1">

        <q-card-section horizontal class="my-card-title">
          {{ initialData?.boards[board_id].title }}
        </q-card-section>
        <q-card-actions horizontal class="justify-around q-pa-none no-wrap">
          <q-btn
            flat
            round
            color="positive"
            size="0.75em"
            icon="fa-solid fa-pen-to-square"
            @click.stop="editHandle"
          />
          <q-btn
            flat
            round
            color="red"
            size="0.75em"
            icon="fa-solid fa-trash"
            @click.stop="removeHandle"
          />
        </q-card-actions>
      </RouterLink>
		</q-card>
	</q-list>
	<div class="notification-wrapper" v-else>
		<span class="notification-text">The list of boards is empty</span>
		<q-icon size="1.5em" name="info" />
	</div>
</template>
<style lang="scss" scoped>
.my-card {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	user-select: none;
	border-radius: 15px;
}
.my-card:not(:last-child) {
	margin-bottom: 15px;
}
.my-card-link {
  display: flex;
	align-items: center;
	justify-content: space-between;
}
.my-card-title {
	margin: 0;
	max-width: 100%;
	font-size: 1.25rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.border-list {
	width: 100%;
}
.notification-wrapper {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	color: $grey-6;
	background-color: $grey-2;
	font-size: 1.5em;
	user-select: none;
}
.notification-text {
	margin-right: 5px;
}
</style>
