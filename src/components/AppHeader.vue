<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)

const scrollToSection = (target: string) => {
    isOpen.value = !isOpen.value //close menu

    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

</script>

<template>

    <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 pt-5 pb-10">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/icons/logo-2.svg" class="h-14" alt="brand" />
                <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VirCalimlim</span> -->
            </a>
            <button @click="toggleMenu" data-collapse-toggle="navbar-solid-bg" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul
                    class="flex flex-col items md:items-center font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
                    <li>
                        <a @click.prevent="scrollToSection('#about')" href="#about"
                            class="block py-2 px-3 md:p-0 text-white rounded bg-transparent hover:text-[#eb4432]"
                            aria-current="page">About</a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('#techstack')" href="#techstack"
                            class="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-transparent md:border-0 hover:text-[#eb4432]">
                            Tech Stack
                        </a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('#experience')" href="#experience"
                            class="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-transparent md:border-0 hover:text-[#eb4432]">Experience</a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('#project')" href="#project"
                            class="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-transparent md:border-0 hover:text-[#eb4432]">Projects</a>
                    </li>
                    <li>
                        <a @click.prevent="scrollToSection('#contact')" href="#contact"
                            class="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-transparent md:border-0 hover:text-[#eb4432]">Contact</a>
                    </li>
                    <li>
                        <a class="button-pop-wrapper py-2">
                            <span class="button-pop px-3 py-2">
                                Resume
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div v-show="isOpen" @click.self="toggleMenu"
                class="md:hidden fixed top-0 right-0 backdrop-blur-sm h-screen w-screen z-10">
                <div
                    class="flex flex-col md:hidden fixed right-0 top-0 p-2 min-w-[300px] bg-[#0a192f] shadow-2xl z-20 h-screen">
                    <span @click="toggleMenu" class="absolute right-4 top-7 h-10 w-10 cursor-pointer p-2">
                        <svg class="fill-[#eb4432]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z">
                            </path>
                        </svg>
                    </span>

                    <ul class="flex flex-col items-center space-y-3 md:hidden font-medium mt-20">
                        <li>
                            <a @click.prevent="scrollToSection('#about')" href="#about"
                                class="text-[25px] block py-2 px-3 text-white rounded bg-transparent hover:text-[#eb4432]"
                                aria-current="page">About</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('#techstack')" href="#techstack"
                                class="text-[25px] block py-2 px-3 text-gray-300 rounded hover:bg-transparent hover:text-[#eb4432]">
                                Tech Stack
                            </a>
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('#experience')" href="#experience"
                                class="text-[25px] block py-2 px-3 text-gray-300 rounded hover:bg-transparent hover:text-[#eb4432]">Experience</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('#project')" href="#project"
                                class="text-[25px] block py-2 px-3 text-gray-300 rounded hover:bg-transparent hover:text-[#eb4432]">Projects</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollToSection('#contact')" href="#contact"
                                class="text-[25px] block py-2 px-3 text-gray-300 rounded hover:bg-transparent hover:text-[#eb4432]">Contact</a>
                        </li>
                        <li>
                            <a class="button-pop-wrapper py-2">
                                <span class="text-[25px] button-pop px-3 py-2">
                                    Resume
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

</template>