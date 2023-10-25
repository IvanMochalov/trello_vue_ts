<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { type InjectionKey, provide } from 'vue';
import { initialData } from './data/source';
import useLocalStorage from './hooks/useLocalStorage';

let initialValue = useLocalStorage(initialData, 'boardsList');
const key: InjectionKey<string> = Symbol();

provide('boardsList', initialValue);
</script>

<template>
	<q-layout view="hhh lpr fff" class="q-pa-xl">
		<q-header class="bg-transparent text-white">
			<q-toolbar class="justify-center q-pt-xl">
				<RouterLink to="/" tabindex="-1">
					<q-btn round color="positive" size="1.5em" icon="tag_faces" />
				</RouterLink>
			</q-toolbar>
		</q-header>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<style scoped></style>
