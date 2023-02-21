import { setTimeout } from "timers/promises"

// pretend this is an ORM or database client :)
export const db = {
	getBlogPostList: async (
		limit: number = 100,
		skip: number = 0,
		timeout: number = 0,
	) => {
		const res = await fetch(
			`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
		)
		const postData = await res.json()
		await setTimeout(timeout)
		return postData.posts
	},
	getBlogPost: async (articleId: string) => {
		const res = await fetch(`https://dummyjson.com/posts/${articleId}`)
		return await res.json()
	},
	getBlogPostComments: async () => {
		const res = await fetch("https://dummyjson.com/comments")
		const json = await res.json()
		await setTimeout(2000)
		return json.comments
	},
}
