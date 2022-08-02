import { GET_POSTS, GET_POSTS_ERROR, GET_POST, GET_COMMENTS, GET_COMMENTS_ERROR } from './types';
import { getPostsAPI, getCommentsAPI } from 'redux/apis/postApi';
import { IPostInterface } from 'types/PostInterface';
import { AxiosError } from 'axios';

export const getPosts = () => {
	return getPostsAPI()
		.then((data: IPostInterface[]) => ({
			type: GET_POSTS,
			payload: data,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_POSTS_ERROR }));
};

export const getPost = (id: number) => {
	return {
		type: GET_POST,
		payload: id,
	};
};

export const getComments = (id: number) => {
	return getCommentsAPI(id)
		.then((data) => ({
			type: GET_COMMENTS,
			payload: data,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_COMMENTS_ERROR }));
};
