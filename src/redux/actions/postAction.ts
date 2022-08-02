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

export const getPost = (id: string) => {
	return {
		type: GET_POST,
		payload: parseInt(id, 10),
	};
};

export const getComments = (id: string) => {
	return getCommentsAPI(parseInt(id, 10))
		.then((data) => ({
			type: GET_COMMENTS,
			payload: data,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_COMMENTS_ERROR }));
};
