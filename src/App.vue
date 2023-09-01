<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import AppHeader from '@/components/layout/AppHeader.vue';
</script>

<template>
    <AppHeader />
    <div class="container mx-auto">
        <suspense>
            <RouterView />
        </suspense>
    </div>
</template>

<style scoped></style>
