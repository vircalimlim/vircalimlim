<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import { RiGithubLine, RiLinkedinLine, RiInstagramLine } from '@remixicon/vue'
import AppFooter from './components/AppFooter.vue';
import { gsap } from "gsap";
import BounceTransition from './components/BounceTransition.vue';
import StaggerAnimation from './components/StaggerAnimation.vue';
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="flex justify-between">
    <div class="w-[10%] hidden md:block text-center">
      <StaggerAnimation class="flex flex-col items-center fixed bottom-0 left-8">
        <li class="py-3" :data-index="0">
          <a href="https://github.com/vircalimlim" aria-label="GitHub" target="_blank" rel="noreferrer">
            <RiGithubLine size="25px" class="hover:scale-125 hover:fill-[#eb4432]" />
          </a>
        </li>
        <li class="py-3" :data-index="1">
          <a href="https://www.linkedin.com/in/virgilio-jr-calimlim-72203b245/" aria-label="Linkedin" target="_blank"
            rel="noreferrer">
            <RiLinkedinLine size="25px" class="hover:scale-125 hover:fill-[#eb4432]" />
          </a>
        </li>
        <!-- <li class="py-3" :data-index="2">
          <a href="https://www.instagram.com/samp_xtacy/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <RiInstagramLine size="25px" class="hover:scale-125 hover:fill-[#eb4432]" />
          </a>
        </li> -->
        <li class="pt-3">
          <div class="h-28 border-r border-gray-400"></div>
        </li>
      </StaggerAnimation>
    </div>
    <div class="w-full md:w-[80%] px-4">
      <RouterView />
    </div>
    <div class="w-[10%] hidden md:block text-center">
      <ul class="flex flex-col items-center fixed bottom-0 right-8">
        <BounceTransition>
          <li class="py-3">
            <a class="font-[SFMonoRegular] text-[12px] vertical-rl hover:text-[#eb4432] hover:scale-105"
              href="mailto:virgiliocalimlim@gmail.com">virgiliocalimlim@gmail.com</a>
          </li>
        </BounceTransition>
        <li class="pt-3">
          <div class="h-28 border-r border-gray-400"></div>
        </li>
      </ul>
    </div>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>
