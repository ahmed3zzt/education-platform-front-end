<template>
  <div class="h-screen flex">
    <div
      class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
    >
      <div class="bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="font-bold text-6xl font-sans text-primary">Mohamed Elsayed</h1>
        <p class="mt-1 text-lg text-gray-400">
          Start Learning Today Get The Modern Quellity Of Education
        </p>
        
      </div>
    </div>
    <div class="flex w-full lg:w-1/2 justify-center items-center space-y-8">
      <div class="w-full px-8 md:px-32 lg:px-24">
        <form class="rounded-md shadow-2xl p-7" dir="rtl">
          <h1 class="font-bold text-2xl mb-1">تسجيل دخول</h1>
          <br />
          <p class="text-sm font-normal mb-8">
           مرحبا بعودتك! قم بالتسجيل وابدا تعلم
          </p>

          <div
            class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1 w-8"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                  stroke="#c2c2c2"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <input
              id="email"
              class="pr-2 pt-2 w-full outline-none border-none bg-base-100"
              type="email"
              name="email"
              placeholder="البريد الالكتروني "
            />
          </div>
          <div
            class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 ml-1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 10V14M10.2676 11L13.7317 13M13.7314 11L10.2673 13"
                  stroke="#c2c2c2"
                  stroke-width="1"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M6.73241 10V14M4.99999 11L8.46409 13M8.46386 11L4.99976 13"
                  stroke="#c2c2c2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M17.2681 10V14M15.5356 11L18.9997 13M18.9995 11L15.5354 13"
                  stroke="#c2c2c2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8"
                  stroke="#c2c2c2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </g>
            </svg>
            <input
              id="password"
              class="pr-2 pt-2 w-full outline-none border-none bg-base-100"
              type="password"
              name="password"
              placeholder="كلمه السر"
            />
          </div>

          <button
            type="submit"
            class="block w-full mt-5 py-2 rounded-2xl bg-primary hover:-translate-y-1 transition-all duration-500 font-semibold mb-2 text-base-200"
          >
            تسجيل دخول
          </button>
          <div class="flex justify-between mt-4">
            <router-link to="/register"
              class="text-sm ml-2 cursor-pointer hover:text-primary hover:-translate-y-1 duration-500 transition-all"
              >ليس لديك حساب قم بتسجيل حساب جديد؟
            </router-link>
            <router-link to="/"
              class="text-sm ml-2 cursor-pointer hover:text-primary hover:-translate-y-1 duration-500 transition-all"
              >الرجوع للصفحه الرئيسيه؟
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>

</script>
  
  <style>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/login.jpeg") center center;

  background-size: cover;
}
</style>