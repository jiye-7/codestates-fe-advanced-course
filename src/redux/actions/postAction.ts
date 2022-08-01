import { GET_POSTS, GET_POSTS_ERROR } from './types';
import { getPostsAPI } from 'redux/apis/postApi';
import { IPostInterface } from 'module/PostInterface';
import axios, { AxiosError } from 'axios';

export const getPosts = () => {
	return getPostsAPI().then((data: IPostInterface[]) => ({
		type: GET_POSTS,
		payload: data,
	}));
	// .catch((err: Error | AxiosError) => {
	// 	console.log(err);
	// });
};
