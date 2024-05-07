<script setup lang="ts">
</script>

<template>
    <div>
        <h2 class="header-title text-[#ccd6f6] text-[32px] font-[600]">About me</h2>
    </div>

    <div class="flex items-start flex-wrap pb-5">
        <div class="w-full md:w-[60%] mt-5 font-[400]">
            <p class="my-4">Hello! My name is Virgilio and I enjoy creating things that live on the internet. My
                interest in
                web
                development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking
                together a custom reblog button taught me a lot about HTML &amp; CSS!
            </p>
            <p class="my-4">Fast-forward to today, and I’ve had the privilege of working at <a
                    href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising
                    agency</a>,
                <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a
                    href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and
                <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led
                    design studio</a>. My main focus these days is building accessible, inclusive products and digital
                experiences at <a href="https://upstatement.com/" rel="noopener noreferrer"
                    target="_blank">Upstatement</a>
                for a variety of clients.
            </p>
            <p class="my-4">I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app"
                    rel="noopener noreferrer" target="_blank">launched a course</a> that covers everything you need to
                build
                a web app with the Spotify API using Node &amp; React.
            </p>
            <p class="my-4">Skills I've learned through the years:</p>
            <ul class="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Eleventy</li>
                <li>Node.js</li>
                <li>WordPress</li>
            </ul>
        </div>
        <div class="w-full md:w-[40%] mt-9 relative">
            <div class="flex justify-center image-container md:pl-2">
                <img class="object-cover rounded z-10 mx-auto"
                    src="https://v4.brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" alt="Vir">
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