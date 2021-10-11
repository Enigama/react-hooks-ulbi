import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com';
export default class PostService {
	static async getAll(limit = 10, page = 1) {
		return await axios.get(`${API}/posts`, {
			params: {
				_limit: limit,
				_page: page
			}
		})
	}
	static async getById(id) {
		return await axios.get(`${API}/posts/${id}`)
	}
	static async getCommentsByPostId(id) {
		return axios.get(`${API}/comments?postId=${id}`)
	}
}
