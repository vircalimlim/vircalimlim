<script setup lang="ts">
const props = defineProps({
    url: { type: String, required: true },
    title: { type: String, required: true }
})
</script>

<template>
    <div
        class="skill-wrapper flex flex-col justify-around items-center rounded bg-slate-100 h-16 w-16 hover:bg-slate-50 m-2">
        <img class="bg-transparent object-cover h-7 w-7 inline-block" :src="url" alt="tech-icon">
        <span class="bg-transparent text-[12px] text-[#0a192f] font-semibold">{{ title }}</span>
    </div>
</template>

<style scoped>
.skill-wrapper:hover {
    scale: 1.05;
}

.skill-wrapper:hover span {
    color: #eb4432;
}
</style>