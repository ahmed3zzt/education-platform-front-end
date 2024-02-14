<template>
	<div class="hero flex items-center justify-between gap-6">
		<div class="w-1/2  hidden lg:block">
			<img src="../assets/main.png" class="md:h-full">
		</div>
		<div class="p-4 md:p-0">
			<h1 class="text-5xl md:text-8xl">Mohamed Elsayed</h1>
			<br>
			<p class="text-lg md:text-xl">
				An English teacher for all levels of high school 
				with more than 10 years of experience
			</p>
			<div class="flex gap-4 my-4 w-full md:w-1/2">
				<button class="btn btn-primary w-2/4">ابدا الان</button>
				<button class="btn btn-outline btn-primary w-1/4 md:w-2/4">الدورات</button>
			</div>
		</div>

	</div>


</template>

<script setup>
</script>

<style lang="css" scoped>
	.hero{
		height:calc(100vh - 72px);
		padding-top: 98px;
	}
</style>