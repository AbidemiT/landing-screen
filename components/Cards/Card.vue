<template>
    <button @click="handleClick" type="button"
        class="relative after:absolute after:w-full after:h-full after:bg-black after:opacity-50 after:left-0 after:bottom-0  shadow-md rounded-sm overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <img class="object-cover cursor-pointer h-full max-w-full rounded-sm" :src="`${photo}`" loading="lazy"
            :alt="`${name} photo`" />
        <div class="absolute bottom-0 text-white text-left z-10 p-12">
            <h3 class="text-xl font-semibold">{{ name }}</h3>
            <p class="text-sm font-light">{{ location }}</p>
        </div>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open', data: { name: string; location: string; photo: string }): void;
}>();

const { name, location, photo } = defineProps<{
    name: string;
    location: string;
    photo: string;
}>();

const handleClick = () => {
    emit('open', { name, location, photo });
};
</script>

<style scoped></style>