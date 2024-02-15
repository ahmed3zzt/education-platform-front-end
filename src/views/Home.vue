<template>
  <div class="container m-auto">
    <Hero />
    <br />
    <br />
    <br />
    <br />
    <div dir="rtl">
      <Courses />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Courses from "../components/courses.vue";
import Footer from "../components/footer.vue";
</script>

<style>
</style>