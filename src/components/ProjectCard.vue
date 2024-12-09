<script setup lang="ts">
import TechButton from './TechButton.vue';

const emit = defineEmits(['handleCarousel'])

const { project } = defineProps({
    project: {
        type: Object,
        required:true,
    },
})

const redirectToUrl = (url?: string) => {
    if(url) window.open(url, '_blank')
}

const handleClick = (images?: Array<any>) => {
    if(!images) {
        alert('No image found.')
    }
    emit('handleCarousel', images);
}
</script>

<template>
    <div
        class="flex flex-wrap-reverse sm:flex-nowrap items-start space-y-4 sm:space-y-0 space-y-reverse sm:space-x-5 md:space-x-8 p-4 mb-2 rounded cursor-pointer hover:bg-slate-700">
        <div class="w-lg">
            <img @click="handleClick(project.images)" class="w-48 h-24 sm:h-20 object-cover rounded shadow-xl cursor-pointer" :src="project.thumbnail"
                :alt="project.title">
        </div>
        <div class="w-full flex flex-col space-y-2">
            <div @click="redirectToUrl(project.url)"  class="flex gap-x-2">
                <h3 class="text-lg text-slate-200 hover:text-[#eb4432]">{{ project.title }}</h3>
                <svg v-show="project.url" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
            </div>
            <p class="text-justify text-[18px] whitespace-pre-line">
                {{ project.description }}
            </p>
            <TechButton :techs="project.techs" />
        </div>
    </div>
</template>