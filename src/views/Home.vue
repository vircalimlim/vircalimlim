<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillSection from '@/components/SkillSection.vue';
import ExperienceSection from '@/components/ExperienceSection.vue';
import ProjectSection from '@/components/ProjectSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<template>
  <section id="hero">
    <HeroSection />
  </section>
  <section class="pt-20" id="about">
    <AboutSection />
  </section>
  <section class="pt-20" id="techstack">
    <SkillSection />
  </section>
  <section class="pt-20" id="experience">
    <ExperienceSection />
  </section>
  <section class="pt-20" id="project">
    <ProjectSection />
  </section>
  <section class="pt-20" id="contact">
    <ContactSection />
  </section>
</template>
