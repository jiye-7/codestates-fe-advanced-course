import axios, { AxiosResponse } from 'axios';
import { IPostInterface } from 'types/PostInterface';

export const getPostsAPI = () => {
	return axios
		.get('https://jsonplaceholder.typicode.com/posts')
		.then((response: AxiosResponse<IPostInterface[]>) => response.data);
};
