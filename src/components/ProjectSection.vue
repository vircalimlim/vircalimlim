<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import TechButton from './TechButton.vue';

</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">Projects</h2>
    </div>

    <div class="mt-5">

        <ProjectCard url="https://react-next-shopping.vercel.app" imgUrl="/images/tokoshop.PNG" project_name="TokoShop"
            description="TokoShop offers a user-friendly interface for online shopping, where users can browse, select, and purchase various products. Key features include browsing products, managing orders, and user login. The design is modern and responsive, aiming to provide a seamless shopping experience."
            :techs="['Nextjs', 'Firebase', 'Axios', 'Stripe', 'ChakraUi']" />

        <ProjectCard url="https://vpc-movies.vercel.app" imgUrl="/images/movies.PNG" project_name="TMDB Cinema"
            description="TMDB Cinema is a movie discovery platform using TMDB api, where you can explore popular, top-rated, and upcoming movies. Watch trailers for specific films, search for your favorite movies, and view detailed information about each one. The site features infinite scrolling for a seamless browsing experience, making it easy to find your next favorite film."
            :techs="['React', 'React Router', 'Bootstrap', 'Axios', 'TMDB API']" />

        <!-- <div
            class="flex flex-wrap-reverse sm:flex-nowrap items-start space-y-4 sm:space-y-0 space-y-reverse sm:space-x-5 md:space-x-8 p-4 mb-2 rounded hover:bg-slate-700">
            <div class="w-lg">
                <img class="w-48 h-24 sm:h-20 object-cover rounded shadow-xl cursor-pointer"
                    src="https://blog.masterofproject.com/wp-content/uploads/2019/10/project-plan-example-2.jpg"
                    alt="project-image">
            </div>
            <div class="w-full flex flex-col space-y-2">
                <h3 class="text-lg text-slate-200">Project Name</h3>
                <p class="text-justify text-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laborum minus aut voluptatibus
                    magni ipsam aspernatur. Modi deserunt eum soluta reiciendis qui quibusdam culpa sed laudantium,
                    assumenda voluptas praesentium consequatur!
                </p>
                <TechButton :techs="['Laravel', 'Php', 'Mysql', 'Vue', 'Firebase']" />
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
    /* transform: translateY(-10px); */
}

@media (max-width: 767px) {

    .header-title::after {
        width: 70%;
        text-align: end;
    }

}
</style>