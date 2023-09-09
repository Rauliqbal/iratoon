<script setup>

const query = useState('query')
</script>
<template>
    <form class="flex gap-4 items-center bg-slate-100 placeholder:text-slate-400 px-3 py-3 rounded-xl">
        <i class="ai-search text-2xl text-slate-400"></i>
        <input class="w-full outline-none bg-transparent" type="search" v-model="query" placeholder="cari manga">
    </form>
</template>