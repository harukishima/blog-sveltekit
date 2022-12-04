<script lang="ts">
	import Editor from '@toast-ui/editor';
	import '@toast-ui/editor/dist/toastui-editor.css';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';

	let editorElement: HTMLDivElement;
	let editor: Editor;

	$: {
		if (editorElement)
			editor = new Editor({
				el: editorElement,
				initialEditType: 'markdown',
				previewStyle: 'vertical',
				height: '500px'
			});
	}
	let title: string = '',
		tags: string = '',
		author: string = '';
	let file: FileList;
	const fileUpload = async (fileList: FileList) => {
		if (fileList && fileList.length > 0) {
			const formData = new FormData();
			formData.append('file', fileList[0]);
			const res = await fetch(`https://images.menttech.live`, {
				method: 'POST',
				body: formData
			});
			const data = await res.json();
			return `https://images.menttech.live/${data.filename}`;
		}
	};
	const submitPost = async () => {
		if (!title) return;
		const image = await fileUpload(file);
		if (!image) return;
		const res = await fetch(`${PUBLIC_BASE_URL}/post`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				tags: tags ? tags.split(' ') : [],
				author: author || 'Anonymous',
				content: editor.getMarkdown(),
				image
			})
		});
		const newPost = await res.json();
		goto(`/post/${newPost.slug}`);
	};
</script>

<svelte:head>
	<title>New Post</title>
</svelte:head>

<div>
	<div class="flex flex-col m-16">
		<h1 class="flex justify-center mb-12 text-4xl font-sans font-bold italic">New post</h1>
		<div>
			<div class="flex flex-col">
				<label for="title" class="mb-2 text-xl font-sans font-bold"
					>Title <span class="text-red-500">*</span></label
				>
				<input
					bind:value={title}
					type="text"
					id="title"
					class="p-2 border border-gray-300 rounded"
				/>
			</div>
			<div class="flex flex-col">
				<label for="title" class="mb-2 text-xl font-sans font-bold">Cover image</label>
				<input
					accept="image/png, image/jpeg"
					bind:files={file}
					type="file"
					id="title"
					class="p-2 border border-gray-300 rounded"
				/>
			</div>
			<div class="flex flex-col mt-4">
				<label for="content" class="mb-2 text-xl font-sans font-bold"
					>Content <span class="text-red-500">*</span></label
				>
				<div class="border border-gray-300 rounded" bind:this={editorElement} />
			</div>
			<div class="flex flex-col mt-4">
				<label for="tags" class="mb-2 text-xl font-sans font-bold">Tags</label>
				<input bind:value={tags} type="text" id="tags" class="p-2 border border-gray-300 rounded" />
			</div>
			<div class="flex flex-col mt-4">
				<label for="author" class="mb-2 text-xl font-sans font-bold">Author</label>
				<input
					bind:value={author}
					type="text"
					id="author"
					class="p-2 border border-gray-300 rounded"
					placeholder="Leave black for anonymous"
				/>
			</div>
		</div>
		<button
			on:click={submitPost}
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 w-1/4 self-center"
			>Submit post</button
		>
	</div>
</div>
