<script setup lang="ts">
import TechCard from './TechCard.vue';

const main_techs = [
    { title: 'LARAVEL', url: 'laravel.svg' },
    { title: 'PHP', url: 'php.svg' },
    { title: 'MYSQL', url: 'mysql.svg' },
    { title: 'VUEJS', url: 'vuejs.svg' },
    { title: 'NUXTJS', url: 'nuxtjs.svg' },
    { title: 'reactjs', url: 'reactjs.svg' },
    { title: 'nextjs', url: 'nextjs.svg' },
    { title: 'jquery', url: 'jquery.svg' },
    { title: 'NODEJS', url: 'nodejs.svg' },
    { title: 'typescript', url: 'typescript.svg' },
    { title: 'firebase', url: 'firebase.svg' },
    { title: 'tailwind', url: 'tailwind.svg' },
    { title: 'bootstrap', url: 'bootstrap5.svg' },
    { title: 'chakraui', url: 'chakraui.svg' },
    { title: 'daisyui', url: 'daisyui.svg' },
    { title: 'flutter', url: 'flutter.svg' },
    { title: 'expo', url: 'react-expo.svg' },
    { title: 'html', url: 'html.svg' },
    { title: 'css', url: 'css.svg' },
    { title: 'javascript', url: 'javascript.svg' },
]

const other_techs = [
    { title: 'flutter', url: 'flutter.svg' },
    { title: 'reactjs', url: 'reactjs.svg' },
    { title: 'nextjs', url: 'nextjs.svg' },
    { title: 'chakraui', url: 'chakraui.svg' },
    { title: 'daisyui', url: 'daisyui.svg' },
    { title: 'jquery', url: 'jquery.svg' },
]

</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Tech Stack</h2>
    </div>

    <div class="mt-9">
        <div class="">
            <!-- <h1 class="skill-category text-lg text-slate-500">Main</h1> -->
            <div class="max-w-lg flex flex-wrap justify-start">
                <TechCard :techs="main_techs" />
            </div>
        </div>
        <!-- <div class="mt-5">
            <h1 class="skill-category text-lg text-slate-500">Other</h1>
            <div class="flex flex-wrap justify-start">
                <TechCard :techs="other_techs" />
            </div>
        </div> -->
    </div>
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
}

.skill-category {
    display: flex;
    align-items: center;
    font-family: "SFMonoRegular"
}

.skill-category::before {
    content: '▶';
    color: #eb4432;
    font-size: 15px;
    margin-right: 10px;
}


@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

}
</style>