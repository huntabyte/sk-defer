<script lang="ts">
	export let post: { title: string; body: string; id: string }
</script>

<div class="bg-base-100 rounded-lg p-6 flex flex-col gap-2">
	<a href="/blog/{post.id}" class="text-xl font-medium link link-hover">{post.title}</a>
	<p class="text-base">{post.body.slice(0, 60) + '...'}</p>
	<a href="/blog/{post.id}" class="link link-hover self-end text-secondary">Read more</a>
</div>
