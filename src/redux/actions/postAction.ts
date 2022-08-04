import { GET_POSTS, GET_POSTS_ERROR, GET_POST, GET_COMMENTS, GET_COMMENTS_ERROR, GET_POST_ERROR } from './types';
import { getPostsAPI, getCommentsAPI, getPostAPI } from 'redux/apis/postApi';
import { IPostInterface } from 'types/PostInterface';
import { AxiosError } from 'axios';

export const getPosts = () => {
	return getPostsAPI()
		.then((pageData: IPostInterface[]) => ({
			type: GET_POSTS,
			payload: pageData,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_POSTS_ERROR, err }));
};

export const getPost = (id: number) => {
	return getPostAPI(id)
		.then((data) => ({
			type: GET_POST,
			payload: data,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_POST_ERROR, err }));
};

export const getComments = (id: number) => {
	return getCommentsAPI(id)
		.then((data) => ({
			type: GET_COMMENTS,
			payload: data,
		}))
		.catch((err: Error | AxiosError) => ({ type: GET_COMMENTS_ERROR, err }));
};
