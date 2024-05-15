<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

const onBeforeEnter: any = (el: HTMLElement) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-20px)'
}

const enter: any = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
        },
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        delay: +el.dataset.index! * +0.1, //https://stackoverflow.com/a/68876658
        onComplete: done
    })
}

</script>

<template>
    <TransitionGroup tag="ul" appear @before-enter="onBeforeEnter" @enter="enter">
        <slot></slot>
    </TransitionGroup>
</template>