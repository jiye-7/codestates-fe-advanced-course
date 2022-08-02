import axios, { AxiosResponse } from 'axios';
import { IPostInterface, IComments } from 'types/PostInterface';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPostsAPI = (): Promise<IPostInterface[]> => {
	return axios.get(`${BASE_URL}/posts`).then((response: AxiosResponse<IPostInterface[]>) => response.data);
};

export const getCommentsAPI = (id: number): Promise<IComments[]> => {
	return axios.get(`${BASE_URL}/comments?postId=${id}`).then((response: AxiosResponse<IComments[]>) => response.data);
};
