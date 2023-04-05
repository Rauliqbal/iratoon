<script setup>
import "swiper/css";
import "swiper/css/free-mode";

const { data: mangas } = await useLazyFetch("https://komiku-api.fly.dev/api/comic/popular/page/1");
</script>
<template>
   <div>
      <h2 class="font-semibold mt-6">Popular Manga</h2>
      <Swiper :slidesPerView="2" :spaceBetween="16" :freeMode="true" :autoplay="{ delay: 5000 }" :modules="[SwiperFreeMode, SwiperAutoplay]" class="mySwiper mt-4">
         <SwiperSlide v-for="manga in mangas.data.slice(4, 10)" :key="manga.id">
            <NuxtLink :to="manga.endpoint">
               <div class="h-28 overflow-hidden rounded-md shadow-xl shadow-slate-200">
                  <img class="w-full h-full object-cover" :src="manga.image" :alt="'Photo' + manga.title" />
               </div>
               <div class="mt-[10px]">
                  <h5 class="line-clamp-1 font-semibold">{{ manga.title }}</h5>
                  <h6 class="text-sm text-gray-500">{{ manga.type }}</h6>
               </div>
            </NuxtLink>
         </SwiperSlide>
      </Swiper>
   </div>
</template>
