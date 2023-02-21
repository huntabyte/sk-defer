<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="post-list">
	<h1 class="text-3xl font-bold underline">Featured Posts</h1>
	{#each data.posts as post}
		<PostCard {post} />
	{/each}
	{#await data.lazy.posts}
		<p>Loading more posts...</p>
	{:then posts}
		{#each posts as post}
			<PostCard {post} />
		{/each}
	{:catch}
		<p>Error loading posts...</p>
	{/await}
</div>
