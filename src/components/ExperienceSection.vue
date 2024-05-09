<script setup lang="ts">
</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Experience</h2>
    </div>

    <div class="flex items-start space-x-2 sm:space-x-4 md:space-x-10 mt-9">
        <div class="whitespace-nowrap hidden sm:block">
            <span class="text-sm font-semibold text-slate-500">August 2022 — Present</span>
        </div>
        <div class="max-w-96">
            <h3 class="text-lg text-slate-200">
                Full Stack Developer · Speedy Recovery
            </h3>
            <div class="whitespace-nowrap block sm:hidden">
                <span class="text-sm font-semibold text-slate-500">August 2022 — Present</span>
            </div>
            <ul class="experience-details">
                <li class="text-justify">
                    Led the development of an eCommerce Web App using Laravel and Vue.js from scratch with the
                    assistance of our Senior Developer, collaborating closely with the project manager and the team. I
                    also helped design the database alongside our Senior Developer and assisted mobile developers with
                    API creation. Additionally, I contributed to an existing system using Laravel and Angular. My focus
                    on quality included implementing Unit Testing throughout the process.
                </li>
                <li class="text-justify">
                    Backend — Engineered the backend tech stack, database migrations,
                    scripting, CRON jobs, security, unit testing and REST API.
                </li>
                <li class="text-justify">
                    Frontend — Utilized Vue.js and Bootstrap to create visually appealing interfaces from Figma designs.
                    Ensured cross-browser compatibility and mobile responsiveness. Collaborated closely with UI designer
                    for accurate implementation, delivering high-quality frontend solutions meeting project needs.
                </li>
            </ul>
            <ul class="flex flex-wrap" aria-label="Technologies used">
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Laravel</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Php</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Mysql</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Vue</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Firebase</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Bootstrap</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Aws</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Html</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Css</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Javascript</div>
                </li>
                <li class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold leading-5 text-white hover:bg-red-400">
                        Linux</div>
                </li>
            </ul>
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
    font-size: 18px;
    margin-right: 10px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.experience-details li::before {
    content: '▶';
    color: #eb4432;
    font-size: 10px;
    margin-right: 10px;
}


@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

}
</style>