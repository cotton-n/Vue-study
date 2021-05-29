import { posts } from './index';

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
	return posts.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPost(data) {
	return posts.post('/', data);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(id) {
	return posts.delete(`/${id}`);
}

export { fetchPosts, createPost, deletePost };
