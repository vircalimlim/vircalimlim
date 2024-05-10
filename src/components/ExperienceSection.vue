<script setup lang="ts">
import TechButton from './TechButton.vue';
</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Experience</h2>
    </div>

    <div class="flex items-start space-x-2 sm:space-x-4 md:space-x-10 mt-9">
        <div class="whitespace-nowrap hidden sm:block">
            <span class="text-sm font-semibold text-slate-500">August 2022 — Present</span>
        </div>
        <div class="max-w-md">
            <h3 class="text-lg text-slate-200">
                Full Stack Developer · Speedy Recovery
            </h3>
            <div class="whitespace-nowrap block sm:hidden">
                <span class="text-sm font-semibold text-slate-500">August 2022 — Present</span>
            </div>
            <ul class="experience-details">
                <li class="text-justify">
                    Led the development of an eCommerce Web App using Laravel and Vue.js from scratch, collaborating
                    closely with the project manager and the team. I
                    also helped design the database alongside our Senior Developer and assisted mobile developers with
                    API creation. Additionally, I contributed to an existing system using Laravel and Angular.
                    Implemented Unit Testing throughout the process.
                </li>
                <li class="text-justify">
                    Integrated various APIs, including Clickpay, HyperPay, and Tabby for payment integration, as well as
                    the Google Analytics API to enhance data-driven decision-making processes.
                </li>
                <li class="text-justify">
                    Backend — Engineered the backend tech stack, database migrations,
                    scripting, CRON jobs, security, unit testing and REST API.
                </li>
                <li class="text-justify">
                    Frontend — Utilized Vue.js and Bootstrap to create visually appealing interfaces from Figma designs.
                    Ensured cross-browser compatibility and mobile responsiveness. Collaborated closely with UI designer
                    for accurate implementation, delivering high-quality frontend solutions.
                </li>
            </ul>
            <TechButton
                :techs="['Laravel', 'Php', 'Mysql', 'Vue', 'Firebase', 'Aws', 'Bootstrap', 'Linux', 'Javascript', 'Css', 'Html']" />
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
    /* transform: translateY(-10px); */
}

.experience-details li {
    position: relative;
    font-size: 18px;
    padding-left: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.experience-details li::before {
    content: '▶';
    position: absolute;
    left: 0;
    top: 5px;
    color: #eb4432;
    font-size: 10px;
}


@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

}
</style>