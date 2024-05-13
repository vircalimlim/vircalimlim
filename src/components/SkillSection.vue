<script setup lang="ts">
import TechCard from './TechCard.vue';

</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Tech Stack</h2>
    </div>

    <div class="mt-9 pl-5">
        <div class="">
            <h1 class="skill-category text-lg text-slate-500">Main</h1>
            <div class="flex flex-wrap justify-start">
                <TechCard title="PHP" url="/public/icons/php.svg" />
                <TechCard title="LARAVEL" url="/public/icons/laravel.svg" />
                <TechCard title="MYSQL" url="/public/icons/mysql.svg" />
                <TechCard title="VUEJS" url="/public/icons/vuejs.svg" />
                <TechCard title="NUXTJS" url="/public/icons/nuxtjs.svg" />
                <TechCard title="NODEJS" url="/public/icons/nodejs.svg" />
                <TechCard title="TYPESCRIPT" url="/public/icons/typescript.svg" />
                <TechCard title="FIREBASE" url="/public/icons/firebase.svg" />
                <TechCard title="TAILWIND" url="/public/icons/tailwind.svg" />
                <TechCard title="BOOTSTRAP" url="/public/icons/bootstrap5.svg" />
                <TechCard title="HTML" url="/public/icons/html.svg" />
                <TechCard title="CSS" url="/public/icons/css.svg" />
                <TechCard title="JAVASCRIPT" url="/public/icons/javascript.svg" />

            </div>
        </div>
        <div class="mt-5">
            <h1 class="skill-category text-lg text-slate-500">Other</h1>
            <div class="flex flex-wrap justify-start">
                <TechCard title="FLUTTER" url="/public/icons/flutter.svg" />
                <TechCard title="REACTJS" url="/public/icons/reactjs.svg" />
                <TechCard title="NEXTJS" url="/public/icons/nextjs.svg" />
                <TechCard title="HOSTINGER" url="/public/icons/hostinger.svg" />
                <TechCard title="CHAKRAUI" url="/public/icons/chakraui.svg" />
                <TechCard title="DAISYUI" url="/public/icons/daisyui.svg" />
                <TechCard title="JQUERY" url="/public/icons/jquery.svg" />
            </div>
        </div>
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