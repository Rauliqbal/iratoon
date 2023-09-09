<script setup></script>
<template>
   <main class="container mt-10">
      <div class="flex items-center gap-5">
         <img class="w-14 rounded-full shadow-xl" src="~/assets/images/user.png" alt="photo user" />
         <div>
            <h3 class="text-sm text-gray-500">Selamat Siang,</h3>
            <h4 class="text-2xl font-semibold">Rauliqbal</h4>
         </div>
      </div>
      <HeropageSearch class="mt-8"/>
      <HeropagePopular />
      <HeropageRecommended class="pb-4"/>
   </main>
</template>
