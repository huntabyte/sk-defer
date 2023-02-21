import { db } from "$lib/server/db"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
	return {
		posts: db.getBlogPostList(10),
		lazy: {
			posts: db.getBlogPostList(90, 10, 3000),
		},
	}
}
