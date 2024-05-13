<script setup lang="ts">
import { gsap } from "gsap";

const onBeforeEnter = (el: Object) => {
    el.style.opacity = 0;
    el.style.transform = 'translateX(-200px)'
}

const enter = (el: Object, done) => {
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