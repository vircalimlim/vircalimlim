<script setup lang="ts">

const { techs } = defineProps({
    techs: { type: Array<string>, required: true }
})

</script>

<template>
    <ul class="flex flex-wrap" aria-label="Technologies used">
        <li v-for="tech in techs" class="mr-1.5 mt-2">
            <div
                class="flex items-center rounded-full border border-red-500 px-3 py-1 text-xs font-bold leading-5 text-slate-200 hover:border-red-400 hover:text-slate-300">
                {{ tech }}</div>
        </li>
    </ul>
</template>