import { posts } from './index';

// 학습 노트 데이터 목록을 조회하는 API
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(id) {
	return posts.get(id);
}

// 학습 노트 데이터를 생성하는 API
function createPost(data) {
	return posts.post('/', data);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(id) {
	return posts.delete(id);
}

// 학습 노트 데이터를 수정하는 API
function editPost(id, data) {
	return posts.put(id, data);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
