import { db } from "$lib/server/db"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: db.getBlogPost(params.postId),
		lazy: {
			comments: db.getBlogPostComments(),
		},
	}
}
