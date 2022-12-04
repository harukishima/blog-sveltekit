<script lang="ts">
	import '../app.css';
</script>

<header>
	<nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
		<a
			href="/"
			data-sveltekit-preload-data="hover"
			class="flex items-center flex-shrink-0 text-white mr-6"
		>
			<svg
				class="fill-current h-8 w-8 mr-2"
				width="54"
				height="54"
				viewBox="0 0 54 54"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27 0C12.088 0 0 12.088 0 27s12.088 27 27 27 27-12.088 27-27S41.912 0 27 0zm0 50.4C13.192 50.4 2.4 39.608 2.4 25.8 2.4 11.992 13.192 1.2 27 1.2c13.808 0 24.6 10.792 24.6 24.6 0 13.808-10.792 24.6-24.6 24.6z"
				/>
				<path
					d="M27 9.6c-9.912 0-18 8.088-18 18s8.088 18 18 18 18-8.088 18-18-8.088-18-18-18zm0 32.4c-8.272 0-15-6.728-15-15s6.728-15 15-15 15 6.728 15 15-6.728 15-15 15z"
				/>
				<path
					d="M27 18c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 12.4c-2.472 0-4.4-1.928-4.4-4.4s1.928-4.4 4.4-4.4 4.4 1.928 4.4 4.4-1.928 4.4-4.4 4.4z"
				/>
			</svg>
			<span class="font-semibold text-xl tracking-tight">Anon blog</span>
		</a>
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow" />
			<div>
				<a
					data-sveltekit-preload-code="hover"
					href="/post/new"
					class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
					>New post</a
				>
			</div>
		</div>
	</nav>
</header>
<slot />
