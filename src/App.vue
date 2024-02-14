<script setup>
  import Navbar from './components/Navbar.vue';

</script>

<template>
        <Navbar />
        <div>
            <router-view></router-view>
        </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap');

*{
    font-family: "El Messiri", sans-serif!important;
}

</style>
