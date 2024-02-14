<template>

  <div class="h-screen flex">
    <div
      class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
    >
      <div class="bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
        <h1 class="font-bold text-6xl font-sans text-primary">
          Mohamed Elsayed
        </h1>
        <p class="mt-1 text-lg text-gray-400">
          Start Learning Today Get The Modern Quellity Of Education
        </p>
      </div>
    </div>
    <div class="flex w-full lg:w-1/2 justify-center items-center space-y-8">
      <div class="w-full px-8 md:px-32 lg:px-24">
        <form class="rounded-md shadow-2xl p-7" dir="rtl">
          <h1 class="font-bold text-2xl mb-1">تسجيل مستخدم جديد</h1>
          <br />
          <p class="text-sm font-normal mb-8">
            ابدا الان! قم بانشاء حسابك الخاص
          </p>
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
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#c2c2c2"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <input
              id="username"
              class="pr-2 pt-2 w-full outline-none border-none bg-base-100"
              type="username"
              name="username"
              placeholder="اسم المستخدم"
            />
          </div>
          <div
            class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="m-1 w-8"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                  stroke="#c2c2c2"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <input
              id="phone"
              class="pr-2 pt-2 w-full outline-none border-none bg-base-100"
              type="phone"
              name="phone"
              placeholder="رقم الهاتف"
            />
          </div>
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
              id="repeatPassword"
              class="pr-2 pt-2 w-full outline-none border-none bg-base-100"
              type="repeatPassword"
              name="repeatPassword"
              placeholder="اعاده ادخال كلمه السر"
            />
          </div>

          <button
            type="submit"
            class="block w-full mt-5 py-2 rounded-2xl bg-primary hover:-translate-y-1 transition-all duration-500 font-semibold mb-2 text-base-200"
          >
            تسجيل حساب جديد
          </button>
          <div class="flex justify-between mt-4">
            <router-link
              to="/login"
              class="text-sm ml-2 cursor-pointer hover:text-primary hover:-translate-y-1 duration-500 transition-all"
              >لديك حساب قم بتسجيل الدخول؟
            </router-link>
            <router-link
              to="/"
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
<style scoped>
.login_img_section {
  background: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/register.jpeg") center center;

  background-size: cover;
}
</style>