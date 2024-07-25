<script setup lang="ts">
import TechButton from './TechButton.vue';

const { techs } = defineProps({
    url: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    project_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techs: {
        type: Array<string>,
        required: true,
    }
})

const redirectToUrl = (url: string) => {
    window.open(url, '_blank')
}
</script>

<template>
    <div @click="redirectToUrl(url)"
        class="flex flex-wrap-reverse sm:flex-nowrap items-start space-y-4 sm:space-y-0 space-y-reverse sm:space-x-5 md:space-x-8 p-4 mb-2 rounded cursor-pointer hover:bg-slate-700">
        <div class="w-lg">
            <img class="w-48 h-24 sm:h-20 object-cover rounded shadow-xl cursor-pointer" :src="imgUrl"
                :alt="project_name">
        </div>
        <div class="w-full flex flex-col space-y-2">
            <h3 class="text-lg text-slate-200">{{ project_name }}</h3>
            <p class="text-justify text-[18px]">
                {{ description }}
            </p>
            <TechButton :techs="techs" />
        </div>
    </div>
</template>