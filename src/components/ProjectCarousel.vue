<script setup lang="ts">
import {ref} from 'vue';
import { Carousel, Slide, Navigation, Pagination, } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const {images} = defineProps({
    'images': {
        type: Array<string>,
        required: true,
    }
});

const emit = defineEmits(['handleClose']);

const currentSlide = ref(0);

const slideTo = (val: any) => {
  currentSlide.value = val
};

const handleClose = () => {
    emit('handleClose');
}
</script>

<template>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide" >
      <Slide v-for="image in images" :key="image">
        <div class="flex justify-center p-2">
            <div class="relative w-full md:w-[85%]">
                <span @click="handleClose" class="text-[35px] absolute right-2 text-[#eb4432] hover:text-red-400 cursor-pointer">&times;</span>
                <img :src="image" class="object-fill w-full">
            </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>

<style>
.carousel__prev, .carousel__next {
    color: white;
    font-size: 50px;
}

.carousel__prev:hover, .carousel__next:hover {
    color: #eb4432;
}

.carousel__pagination-button--active::after {
    background-color: #eb4432;
}
</style>
  