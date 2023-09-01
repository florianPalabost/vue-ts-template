<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="">
        <nav class="flex items-center justify-between flex-wrap bg-slate-500 p-6">
            <div class="w-full flex items-center flex-shrink-0 text-white mr-6">
                <RouterLink to="/" class="font-semibold text-xl">Home</RouterLink>
                <div class="w-full block flex-grow lg-flex lg:items-center lg:w-auto" id="navbarNavAltMarkup">
                    <div class="text-sm lg:flex-grow ml-5">
                        <RouterLink to="/about" class="mt-4 lg-inline-block lg:mt-O hover:text-white mr-4"
                            >About</RouterLink
                        >
                        <RouterLink to="/sample" class="mt-4 lg-inline-block lg:mt-O hover:text-white mr-4"
                            >Sample</RouterLink
                        >
                    </div>
                </div>
                <span class="navbar-text me-auto fs-2"> Sample Header </span>
            </div>
        </nav>
    </header>
</template>
<style scoped></style>
