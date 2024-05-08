<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillSection from '@/components/SkillSection.vue';
</script>

<template>
  <section id="hero">
    <HeroSection />
  </section>
  <section class="mt-20" id="about">
    <AboutSection />
  </section>
  <section class="mt-20" id="techstack">
    <SkillSection />
  </section>
</template>
