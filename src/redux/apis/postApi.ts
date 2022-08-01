import axios, { AxiosResponse } from 'axios';
import { IPostInterface } from 'module/PostInterface';

export const getPostsAPI = () => {
	return axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then((response: AxiosResponse<IPostInterface[]>) => response.data);
};
