<template>
    <div class="relative w-full">
        <div class=" absolute left-5 top-[34%] pointer-events-none">
            <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <input class="input" placeholder="Search for photo" type="search" name="search"
            id="search" @input="debouncedOnInput">
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const query = ref<string>('');
const emit = defineEmits(['search']);

const debounce = (func: Function, wait: number) => {
    let timeout: number | undefined;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => func(...args), wait);
    };
};

const onInput = (e: Event) => {
    query.value = (e.target as HTMLInputElement).value;
    emit('search', query.value);
};

const debouncedOnInput = debounce(onInput, 1000);
</script>

<style scoped>
.input {
    @apply w-full h-56 bg-white rounded-md shadow-lg py-4 px-56 outline-none;
}
</style>