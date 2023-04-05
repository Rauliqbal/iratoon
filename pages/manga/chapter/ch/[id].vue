<script setup>
const { id } = useRoute().params;

const { data: mangas } = await useFetch("https://komiku-api.fly.dev/api/comic/chapter/ch/" + id);
</script>
<template>
   <main class="container">
      <div class="fixed bg-white inset-x-0 px-4 py-6 flex items-center shadow-lg gap-6">
         <NuxtLink onclick="history.back()">
            <img src="~/assets/images/ic-back.svg" />
         </NuxtLink>
         <h2 class="font-semibold line-clamp-1">{{ mangas.data.title }}</h2>
      </div>
      <div class="flex flex-col gap-4 pb-4 pt-[86px]">
         <div v-for="manga in mangas.data.image" :key="manga.id">
            <img class="border-2 border-black" :src="manga" alt="komik manga" />
         </div>
      </div>
   </main>
</template>
