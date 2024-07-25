<script setup lang="ts">
import FadeInTransition from './FadeInTransition.vue';

</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">About me</h2>
    </div>

    <FadeInTransition>
        <div class="flex items-start flex-wrap">
            <div class="w-full md:w-[60%] mt-5 font-[400]">
                <p class="my-4 text-justify">
                    I'm Vir, a backend developer with {{ new Date().getFullYear() - 2022 }}
                    years of experience and frontend
                    proficiency. I take pride in building strong backend systems that leverage my expertise to ensure
                    smooth
                    operation. In addition, I enjoy creating intuitive user interfaces that integrate the frontend and
                    backend for a seamless user experience. Eager to collaborate and turn ideas into practical
                    solutions!
                </p>
            </div>
            <div class="w-full md:w-[40%] mt-9 relative">
                <div class="flex justify-center md:pl-2">
                    <img class="w-[75%] sm:w-[70%] md:w-[90%] object-cover rounded z-10 mx-auto"
                        src="/icons/programming.svg" alt="Vir">
                </div>
            </div>
        </div>
    </FadeInTransition>
</template>

<style scoped>
.header-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 100%;
}

.header-title::after {
    display: inline-block;
    content: "";
    border-top: 1px solid #8892b0;
    width: 20rem;
    margin: 0 1rem;
    /* transform: translateY(-10px); */
}

.image-container {
    display: inline-block;
    position: relative;
    padding-bottom: 12px;
    text-align: center;
}

.image-container img {
    height: 70%;
    width: 70%;
    position: relative;
    display: block;
    max-width: 100%;
}

.image-container::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 95%;
    border: 2px solid red;
    border-radius: 0.25rem;
    bottom: -1%;
    right: 10%;
    pointer-events: none;
}

@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

    .image-container {
        display: block;
    }

    .image-container img {
        height: 45%;
        width: 45%;
        display: inline-block;
    }

    .image-container::after {
        width: 45%;
        height: 95%;
        bottom: 0%;
        right: 25%;
    }
}
</style>