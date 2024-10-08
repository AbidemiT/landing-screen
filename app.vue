<script setup lang="ts">
import { createApi } from 'unsplash-js';
import Card from './components/Cards/Card.vue';
import Placeholder from './components/Cards/Placeholder.vue';

interface Photo {
  name: string;
  location: string;
}

const config = useRuntimeConfig();
const searchQuery = ref('');
const isLoading = ref(false);
const open = ref('close');
const currentData = ref<Photo>({ name: '', location: '', photo: '' });

const photos = ref<Photo[]>([]);

const unsplash = createApi({
  accessKey: config.public.unsplashAccessKey,
});

console.log("config", config);


interface Photo {
  name: string;
  location: string;
  photo: string;
}

const search = async (query: string) => {
  searchQuery.value = query;
  isLoading.value = true;
  const response = await unsplash.search.getPhotos({
    query,
    perPage: 8,
    orderBy: 'latest',
  });

  photos.value = response.response?.results.map(photo => ({
    name: photo.user.name,
    location: photo.user.location || 'Unknown location',
    photo: photo.urls.small,
  })) || [];

  isLoading.value = false;
};

const toggleModal = (data: Photo) => {
  if (data.name) {
    currentData.value = data;
    open.value = 'open';
  }

  if (!data.name) {
    open.value = 'close';

  }
  
};
const firstColumn = computed(() => photos.value.slice(0, 3));
const secondColumn = computed(() => photos.value.slice(3, 6));
const thirdColumn = computed(() => photos.value.slice(6, 9));

</script>

<template>
  <main>
    <section class="bg-gray-300 h-[280px] flex items-center justify-center">
      <div class="container mx-auto">
        <div class="flex items-center justify-center h-full">
          <SearchInput @search="search" v-if="!isLoading && !searchQuery" />
        </div>
        <div class="ml-32">
          <h1 class="text-4xl font-semibold text-gray-600" v-if="isLoading">
            Searching for "{{ searchQuery }}"
          </h1>
          <h1 class="text-4xl font-semibold text-gray-600" v-if="!isLoading && searchQuery">
            Search results for "{{ searchQuery }}"
          </h1>
        </div>
      </div>
    </section>
    <section class="container mx-auto z-10 -m-52 h-screen">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-36 max-w-[900px] mx-auto" v-if="isLoading">
        <div class="grid gap-32">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div class="grid gap-32">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
        <div class="grid gap-32">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-36 max-w-[900px] mx-auto" v-if="!isLoading && searchQuery">
        <div class="grid gap-32">
          <Card v-for="({ name, location, photo }, index) in firstColumn" :name=name :location=location :photo=photo
            :key=index @open="toggleModal" />
        </div>
        <div class="grid gap-32">
          <Card v-for="({ name, location, photo }, index) in secondColumn" :name=name :location=location :photo=photo
            :key=index @open="toggleModal"/>
        </div>
        <div class="grid gap-32">
          <Card v-for="({ name, location, photo }, index) in thirdColumn" :name=name :location=location :photo=photo
            :key=index @open="toggleModal"/>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Modal v-if="open === 'open'" @open="toggleModal" :currentData=currentData />
    </Teleport>
  </main>
</template>
