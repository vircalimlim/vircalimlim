<script setup lang="ts">
import { ref } from 'vue';
import ProjectCarousel from './ProjectCarousel.vue';
import ProjectCard from './ProjectCard.vue';
import TechButton from './TechButton.vue';

const projects = ref([
    {
        url: '',
        thumbnail: '/images/3prs/home.PNG',
        title: 'Research Management System',
        description: 'The system allows admins to manage user keys by generating and releasing them for students based on their semester scope and ensuring key encryption for security. Admins can post achievements, updates, and announcements, upload and categorize materials, and restrict students from downloading, printing, or copying these materials. Students can search and filter uploaded materials using keywords while being restricted from performing unauthorized actions like downloading, printing, or copying content. The system validates login keys upon access, logs user visits to materials.',
        techs: ['Laravel', 'Vue3', 'Inertia', 'MySql', 'Tailwind'],
        images: ['/images/3prs/home.PNG', '/images/3prs/dashboard.PNG', '/images/3prs/admin-achievements.PNG', '/images/3prs/admin-material.PNG', '/images/3prs/announcements.PNG', '/images/3prs/achievement.PNG', '/images/3prs/research.PNG'],
    },
    {
        url: '',
        thumbnail: '/images/timein/home.PNG',
        title: 'Attendance Management System',
        description: 'The Attendance Management System allows users to clock in and out, while admins can monitor attendance, create schedules and holidays, manage employee profiles including company and position details and record payroll. It also provides reporting capabilities on various employee metrics.',
        techs: ['Laravel', 'Vue3', 'Bootstrap', 'MySql', 'Axios'],
        images: ['/images/timein/home.PNG', '/images/timein/dashboard.PNG', '/images/timein/user.PNG', '/images/timein/register.PNG', '/images/timein/schedule.PNG', '/images/timein/attendance.PNG', '/images/timein/reports.PNG', '/images/timein/payroll.PNG',],
    },
    {
        url: 'https://react-next-shopping.vercel.app',
        thumbnail: '/images/tokoshop.PNG',
        title: 'TokoShop',
        description: 'TokoShop offers a user-friendly interface for online shopping, where users can browse, select, and purchase various products. Key features include browsing products, managing orders, and user login. The design is modern and responsive, aiming to provide a seamless shopping experience.',
        techs: ['Nextjs', 'Firebase', 'Axios', 'Stripe', 'ChakraUi'],
    },
    {
        url: 'https://vpc-movies.vercel.app',
        thumbnail: '/images/movies.PNG',
        title: 'TMDB Cinema',
        description: 'TMDB Cinema is a movie discovery platform using TMDB api, where you can explore popular, top-rated, and upcoming movies. Watch trailers for specific films, search for your favorite movies, and view detailed information about each one. The site features infinite scrolling for a seamless browsing experience, making it easy to find your next favorite film.',
        techs: ['React', 'React Router', 'Bootstrap', 'Axios', 'TMDB API'],
    },
]);
const carousel_images = ref<string[]>([]);
const is_carousel_open = ref(false);

const showCarouselImage = (images?: Array<string>) => {
    is_carousel_open.value = true;

    if(!images){
        carousel_images.value = [];
        return false;
    }

    if (is_carousel_open.value) {
        document.body.style.overflow = 'hidden';
    }

    carousel_images.value = images;
}

const hideCarousel = () => {
    is_carousel_open.value = false;
    if (!is_carousel_open.value) {
        document.body.style.overflow = 'visible';
    }

    carousel_images.value = [];
}
</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Projects</h2>
    </div>

    <div class="mt-5">
        <div v-if="carousel_images.length > 0" class="fixed top-0 right-0 z-50 h-full w-full backdrop-blur-sm">
            <div @click.self="hideCarousel" class="h-full flex items-center">
                <ProjectCarousel :images="carousel_images" @handleClose="hideCarousel"/>
            </div>
        </div>
        <ProjectCard v-for="project in projects" @handleCarousel="showCarouselImage" :project="project" />
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

@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

}
</style>