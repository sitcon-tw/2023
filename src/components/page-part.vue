<template>
    <section :id="`${props.name}-container`">
        <slot />
    </section>
</template>

<style scoped>
    section {
        padding-top: 5em;
        background-color: var(--background-color);
        height: 100%;
    }
</style>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>
