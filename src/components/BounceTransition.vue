<script setup lang="ts">
import { gsap } from "gsap";

const onBeforeEnter: any = (el: HTMLElement) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-100px)'
}

const enter: any = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
        duration: 2.5,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
    })
}
</script>

<template>
    <Transition appear @before-enter="onBeforeEnter" @enter="enter">
        <slot></slot>
    </Transition>
</template>