<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Anon blog</title>
</svelte:head>

<div class="flex m-16 flex-wrap">
	{#each data.posts as post}
		<div class="flex flex-col m-4 border-solid border-gray-400 border-2 rounded px-4 py-2 pb-6">
			<img src={post.image || '/placeholder.jpg'} class="w-72 h-64 object-cover" alt={post.title} />
			<a href="/post/{post.slug}" class="text-2xl font-sans font-bold italic">
				{post.title}
			</a>
			<p class="text-sm font-sans">
				Author: <strong>{post.author}</strong>
			</p>
		</div>
	{/each}
</div>
<div class="flex justify-center mb-12">
	<a
		href="?page={data.pageNumber - 1}"
		class="px-4 py-2 shadow rounded bg-blue-500 w-24 hover:bg-white hover:text-black text-white"
		>Previous</a
	>
	<a
		href="?page={data.pageNumber + 1}"
		class="px-4 py-2 shadow rounded bg-blue-500 ml-4 hover:bg-white hover:text-black text-white w-24"
		>Next</a
	>
</div>
