<script setup lang="ts">
import { gsap } from "gsap";

const onBeforeEnter = (el: HTMLElement) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-200px)'
}

// https://stackoverflow.com/a/29704013 = typescript type callback function
const enter = (el: HTMLElement, done: () => void) => {
    gsap.to(el, {
        duration: .8,
        opacity: 1,
        x: 0,
        onComplete: done
    })
}
</script>

<template>
    <Transition appear @before-enter="onBeforeEnter" @enter="enter">
        <slot></slot>
    </Transition>
</template>