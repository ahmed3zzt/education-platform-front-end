<template>
  <div class="w-full  course-title p-10 lg:p-32 h-[40vh] mb-32 bg-base-300" dir="rtl">
    <div class="w-[50vw]">
      <h1 class="text-2xl lg:4xl text-primary font-semibold">
      الشهر الاول اولي ثانوي ترم ثاني
    </h1>
    <p class="my-4 text-content text-wrap">
      شرح الشهر الاول اولي ثانوي ترم تاني باحدث الاسليب تحت قياده الامبراطور
      محمد السيد فؤاد وشرح الوحديتين الاولي والثانيه كبدايه للترم الجديد 2024
    </p>
    </div>
  </div>
  <div class="container m-auto p-4 lg:p-0">
    <div class="grid-structure ">
      <div class="left " dir="rtl">
        <div class="p-4 shadow-lg rounded-lg w-full lg:w-[500px]  static mt-0 lg:fixed lg:mt-[-45vh] bg-base-300" dir="rtl">
         <figure><img src="https://placehold.co/600x400" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-primary">قم بالاشتراك الان</h2>
    <p>بعد مشاهده ما نقدمه يمكنك الاشتراك الان؟</p>
    <div class="flex w-full justify-between mt-1 items-center">
      <p class="price bold text-primary text-3xl pt-2 ">
        150
      </p>
      <div class="relative flex  group mt-2 ">
        <div
            class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <a href="#" title="Get quote now"
            class="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-primary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">الشراء الان
        </a>
    </div>
    </div>
        </div>
      </div>
      </div>
      <div class="right">
        <div class=" p-4 shadow-lg rounded-lg my-6 bg-base-300" dir="rtl">
        <h1 class="text-primary text-xl my-4">هتتعلم أي</h1>
        <span class="w-full h-1 bg-base-200 block rounded-sm"></span>
        <p class="text-lg leading-tight my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id pariatur aspernatur eius expedita, reprehenderit cupiditate dolorem quod quisquam ad. Ipsam, exercitationem aperiam eius doloremque nemo impedit enim consequatur maiores.</p>
      </div>
      <div class=" p-4 shadow-lg rounded-lg mt-6 bg-base-300" dir="rtl">
        <h1 class="text-primary text-2xl my-4">محتوي الكورس</h1>
        <span class="w-full h-1 bg-base-200 block rounded-sm"></span>
        <div class="collapse collapse-arrow bg-base-200 my-4">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-arrow bg-base-200 my-4">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

    <Footer></Footer>
</template>

<script setup>
import Footer from "../components/footer.vue";
</script>

<style >

.grid-structure {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 080px;
  grid-row-gap: 0px;
}
@media screen and (max-width: 950px) {
  .grid-structure {
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: -40px;
}
.right{
  margin-top: -20vh;
}
}
</style>