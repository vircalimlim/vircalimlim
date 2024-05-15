<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const onBeforeEnter: any = (el: HTMLElement) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-200px)'
}

// https://stackoverflow.com/a/29704013 = typescript type callback function
const enter: any = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
        },
        duration: .8,
        x: 0,
        opacity: 1,
        ease: "power1.inOut",
        onComplete: done
    });
}
</script>

<template>
    <Transition appear @before-enter="onBeforeEnter" @enter="enter">
        <slot></slot>
    </Transition>
</template>