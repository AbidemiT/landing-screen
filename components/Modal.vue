<script setup lang="ts">
const { currentData } = defineProps<{
    currentData: { name: string; location: string; photo: string };
}>();

const { location, name, photo } = currentData;
</script>

<template>
    <div class="modal">
        <div class="content-wrapper">
            <img class="w-full rounded-t-md" :src="photo" :alt="`${name} photo`" />
            <div class="details">
                <h3>{{ name }}</h3>
                <p>{{ location }}</p>
            </div>
        </div>
        <button class="btn" @click="$emit('open', 'close')">x</button>
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

.content-wrapper {
    @apply bg-white rounded-md flex flex-col items-start max-w-[30%];
}

.details {
    @apply p-24 flex flex-col justify-start bg-white;
}

.btn {
    @apply absolute text-red-400 top-56 right-5;
}
</style>