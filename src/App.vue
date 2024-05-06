<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import { RiGithubLine, RiLinkedinLine, RiInstagramLine } from '@remixicon/vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="flex justify-between my-10">
    <div class="w-[10%] hidden md:block text-center">
      <ul class="flex flex-col items-center absolute bottom-0 left-8">
        <li class="py-3">
          <a href="https://github.com/bchiang7" aria-label="GitHub" target="_blank" rel="noreferrer">
            <RiGithubLine size="25px" class="hover:scale-125 hover:fill-[#64ffda]" />
          </a>
        </li>
        <li class="py-3">
          <a href="https://www.instagram.com/bchiang7" aria-label="Instagram" target="_blank" rel="noreferrer">
            <RiInstagramLine size="25px" class="hover:scale-125 hover:fill-[#64ffda]" />
          </a>
        </li>
        <li class="py-3">
          <a href="https://www.linkedin.com/in/bchiang7" aria-label="Linkedin" target="_blank" rel="noreferrer">
            <RiLinkedinLine size="25px" class="hover:scale-125 hover:fill-[#64ffda]" />
          </a>
        </li>
        <li class="pt-3">
          <div class="h-28 border-r border-gray-400"></div>
        </li>
      </ul>
    </div>
    <div class="w-full">
      <RouterView />
    </div>
    <div class="w-[10%] hidden md:block text-center">
      <ul class="flex flex-col items-center absolute bottom-0 right-8">
        <li class="py-3">
          <a class="font-[SFMonoRegular] text-[12px] vertical-rl hover:text-[#64ffda] hover:scale-105"
            href="mailto:virgiliocalimlim@gmail.com">virgiliocalimlim@gmail.com</a>
        </li>
        <li class="pt-3">
          <div class="h-28 border-r border-gray-400"></div>
        </li>
      </ul>
    </div>
  </main>
  <footer>

  </footer>
</template>
