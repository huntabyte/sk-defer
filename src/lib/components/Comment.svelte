<script lang="ts">
	export let comment: { id: number; body: string }
</script>

<div class="flex items-center justify-start gap-2">
	<div class="flex items-start h-full rounded-full justify-start">
		<div class="w-10 rounded-full flex items-start">
			<img src="https://i.pravatar.cc/150?u={comment.id}" alt="User avatar" class="rounded-full" />
		</div>
	</div>
	<div class="chat-bubble">{comment.body}</div>
</div>
