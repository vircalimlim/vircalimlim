<script setup lang="ts">
import StaggerAnimation from './StaggerAnimation.vue';

const props = defineProps({
    techs: {
        type: Array<{
            url: string,
            title: string,
        }>, required: true
    },
})
</script>

<template>
    <StaggerAnimation class="flex flex-wrap justify-center sm:justify-start">
        <li v-for="(tech, index) in techs"
            class="skill-wrapper flex flex-col justify-around items-center rounded  h-16 w-16 hover:bg-gray-600 p-1 my-2"
            :data-index="index">
            <img class="bg-transparent object-cover h-7 w-7 inline-block" :src="'/icons/' + tech.url" alt="tech-icon">
            <span class="bg-transparent text-[12px] font-semibold uppercase">{{ tech.title }}</span>
        </li>
    </StaggerAnimation>
</template>

<style scoped>
.skill-wrapper:hover {
    scale: 1.1;
}

.skill-wrapper:hover span {
    color: #eb4432;
}
</style>