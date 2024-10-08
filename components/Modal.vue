<script setup lang="ts">
const { currentData } = defineProps<{
    currentData: { name: string; location: string; photo: string };
}>();

const { location, name, photo } = currentData;
</script>

<template>
    <div class="modal">
        <div class="bg-white rounded-md flex flex-col items-start max-w-[30%]">
            <img class="w-full rounded-t-md" :src="photo" :alt="`${name} photo`" />
            <div class="p-24 flex flex-col justify-start bg-white">
                <h3>{{ name }}</h3>
                <p>{{ location }}</p>
            </div>
        </div>
        <button class="absolute text-black top-56 right-56" @click="$emit('open', 'close')">x</button>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 0;
    height: 100dvh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>