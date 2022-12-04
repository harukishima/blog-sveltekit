<script lang="ts">
	import type { PageData } from './$types';
	import 'github-markdown-css/github-markdown.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<div>
	<div class="flex flex-col m-16">
		<h1 class="flex justify-center mb-12 text-4xl font-sans font-bold italic">
			{data.post.title}
		</h1>
		<div class="markdown-body">
			{#if data.post.content}
				{@html data.post.content}
			{:else}
				<p class="text-center">No content</p>
			{/if}
		</div>
	</div>
</div>
