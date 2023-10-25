<script setup lang="ts">
import BoardsList from '@/components/BoardsList.vue';
import BoardAddBtn from '../components/BoardAddBtn.vue';
</script>

<template>
	<q-page class="row items-start justify-between" style="min-height: 0;">
		<BoardAddBtn />
		<div class="col-xs-12 col-sm-6 boards-list-wrapper">
			<BoardsList />
		</div>
	</q-page>
</template>
<style lang="scss" scoped>
.boards-list-wrapper {
	display: flex;
	justify-content: center;
	min-height: 100px;
}
</style>
