<script lang="ts">
	import Comment from '$lib/components/Comment.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="post">
	<h1>{data.post.title}</h1>
	<p>{data.post.body}</p>
</div>
<div class="comments">
	<h3>Comments:</h3>
	{#await data.lazy.comments}
		<p>Loading comments...</p>
	{:then comments}
		{#each comments as comment}
			<Comment {comment} />
		{/each}
	{:catch}
		<p>Error loading comments...</p>
	{/await}
</div>
