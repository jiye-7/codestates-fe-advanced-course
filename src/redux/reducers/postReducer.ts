import { IComments, IPostInterface } from './../../types/PostInterface';
import { GET_POSTS, GET_POST, GET_COMMENTS, INITIALIZATION_STATE } from 'redux/actions/types';

export type PostsState = {
	posts: IPostInterface[];
	detailPost: IPostInterface;
	comments: IComments[];
};

const initialState: PostsState = {
	posts: [],
	detailPost: {
		userId: -1,
		id: -1,
		title: '',
		body: '',
	},
	comments: [],
};

const postReducer = (state: PostsState = initialState, action: { type: string; payload: unknown }) => {
	switch (action.type) {
		case GET_POSTS:
			const data = action.payload as IPostInterface[];
			return { ...state, posts: data };
		case GET_POST:
			const postData = action.payload as IPostInterface;
			// const id = action.payload as number;
			// const findPost = state.posts.find((post: IPostInterface) => post.id === id && post);
			// return { ...state, detailPost: findPost };
			return { ...state, detailPost: postData };
		case GET_COMMENTS:
			const comments = action.payload as IComments[];
			return { ...state, comments };
		case INITIALIZATION_STATE:
			return {
				...state,
				detailPost: {
					userId: -1,
					id: -1,
					title: '',
					body: '',
				},
				comments: action.payload,
			};
		default:
			return state;
	}
};

export default postReducer;
