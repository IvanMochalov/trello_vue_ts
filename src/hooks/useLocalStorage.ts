import type { TInitialData } from '@/type';
import { onMounted, reactive, watch } from 'vue';

export default function (initialData: TInitialData, key: string) {
	let initialValue = reactive(initialData);

	onMounted(() => {
		const storageData = localStorage.getItem(key);

		if (storageData) {
			initialValue = reactive(JSON.parse(storageData));
		}

		localStorage.setItem(key, JSON.stringify(initialValue));

		watch(
			initialValue,
			val => {
				localStorage.setItem(key, JSON.stringify(val));
			},
			{ deep: true }
		);
	});

	return initialValue;
}
