import { GET_POSTS } from 'redux/actions/types';
import { IPostInterface } from 'module/PostInterface';

type PostsState = {
	posts: IPostInterface[];
};

const initialState: PostsState = {
	posts: [],
};

const postReducer = (state: PostsState = initialState, action: { type: string; payload: unknown }) => {
	switch (action.type) {
		case GET_POSTS: {
			const data = action.payload as IPostInterface[];
			return { ...state, ...data };
		}
		default:
			return state;
	}
};

export default postReducer;
