<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    var button = document.getElementById('shakeButton');
    var shakingInterval;

    function startShaking() {
        shakingInterval = setInterval(function () {
            button.classList.remove('animate-shake'); // Remove existing animation class
            void button.offsetWidth; // Trigger reflow to restart the animation
            button.classList.add('animate-shake'); // Add animation class
        }, 5000);
    }

    startShaking(); // Start shaking initially

    button.addEventListener('mouseenter', function () {
        clearInterval(shakingInterval); // Stop shaking when hovered
        button.classList.remove('animate-shake'); // Remove animation class
    });

    button.addEventListener('mouseleave', function () {
        startShaking(); // Resume shaking when hover ends
    });
})

</script>

<template>
    <div class="">
        <div class="pb-6">
            <p class="font-[SFMonoRegular] text-[#eb4432]">Hi, my name is</p>
        </div>
        <div class="pb-2">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ccd6f6]">Virgilio Calimlim.</h1>
        </div>
        <div class="pb-5">
            <h1 class="text-4xl sm:text-5xl md:text-6xl text font-extrabold text-[#8892b0]">Artisan of web development.
            </h1>
        </div>
        <div>
            <p class="w-full sm:w-4/5 md:w-3/5">
                I'm software developer who is passionate about creating user-friendly applications from concept to
                deployment. With problem-solving expertise and a commitment to staying current with industry trends, I
                thrive in collaborative environments that foster creativity. Let's work together to create something
                amazing!
            </p>
        </div>
        <div class="mt-5">
            <span class="button-pop-wrapper py-3">
                <button id="shakeButton" class="contact-button button-pop px-10 py-3">
                    Let's talk 👋
                </button>
            </span>
        </div>
    </div>
</template>

<style scoped>
@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-10px);
    }

    50% {
        transform: translateX(10px);
    }

    75% {
        transform: translateX(-10px);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-shake {
    animation: shake 0.5s ease-in-out;
}

.contact-button {
    transition: transform 0.3s ease;
}
</style>