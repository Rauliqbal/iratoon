<script setup>
const { manga } = defineProps(["manga"]);
</script>
<template>
   <div class="flex justify-between px-4 py-2 bg-white shadow-card rounded-xl">
      <div class="flex gap-8 items-center">
         <h5 class="text-2xl text-gray-400 font-medium">{{ manga.name.slice(7, 11) }}</h5>
         <h5 class="font-medium">{{ manga.name }}</h5>
      </div>

      <NuxtLink :to="'/manga/chapter' + manga.endpoint">
         <div class="p-3 bg-blue-400 hover:bg-blue-700 transition duration-300 rounded-full">
            <img class="w-6 h-6" src="~/assets/images/ic-book.svg" />
         </div>
      </NuxtLink>
   </div>
</template>
