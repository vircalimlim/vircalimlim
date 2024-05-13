<script setup lang="ts">
import { gsap } from "gsap";

const onBeforeEnter = (el: Object) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-100px)'
}

const enter = (el: Object, done) => {
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