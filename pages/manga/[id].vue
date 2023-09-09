<script setup>
const { id } = useRoute().params;
const api = "https://komiku-api.fly.dev/api/comic/info/manga/" + id;

const { data: manga } = await useFetch(api);
</script>
<template>
   <main class="max-w-[425px] mx-auto relative">
      <div class="">
         <img class="w-full h-96 object-cover" :src="manga.data.thumbnail" alt="" />
      </div>
      <div class="absolute z-10 inset-x-0 bg-white rounded-t-3xl p-6 -mt-14">
         <h3 class="text-xl font-semibold line-clamp-2">{{ manga.data.title }}</h3>
         <div class="flex items-center gap-1 mt-1">
            <img class="w-4" src="~/assets/images/ic-user.svg" alt="" />

            <h5 class="text-sm text-gray-500">{{ manga.data.author }}</h5>
         </div>

         <div class="grid gap-4 mt-8">
            <DetailpageChapter v-for="manga in manga.data.chapter_list" :key="manga.id" :manga="manga" />
         </div>
         
      </div>
   </main>
</template>
