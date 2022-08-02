import { GET_POSTS, GET_POST } from 'redux/actions/types';
import { IPostInterface } from 'types/PostInterface';

export type PostsState = {
	posts: IPostInterface[];
	detailPost: IPostInterface;
};

const initialState: PostsState = {
	posts: [],
	detailPost: {
		userId: -1,
		id: -1,
		title: '',
		body: '',
		page: '',
	},
};

const postReducer = (state: PostsState = initialState, action: { type: string; payload: unknown }) => {
	switch (action.type) {
		case GET_POSTS:
			const data = action.payload as IPostInterface[];
			return { ...state, posts: data };
		case GET_POST: {
			const id = action.payload as number;
			const findPost = state.posts.find((post: IPostInterface) => {
				return post.id === id && post;
			});

			return { ...state, detailPost: findPost };
		}
		default:
			return state;
	}
};

export default postReducer;
