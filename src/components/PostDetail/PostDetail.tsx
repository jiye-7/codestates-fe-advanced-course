import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from 'components/Post/Post';
import Comment from 'components/Comment/Comment';
import { getComments, getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';

interface Params {
	id: string;
}

const PostDetail = (): JSX.Element => {
	const dispatch = useDispatch();
	const { detailPost, comments } = useSelector((state: { post: PostsState }) => state.post);
	const { id } = useParams<keyof Params>() as Params;

	useEffect(() => {
		const dispatchFunc = async () => {
			dispatch(getPost(id));
			dispatch(await getComments(id));
		};
		dispatchFunc();
	}, [dispatch, id]);

	return (
		<div>
			<Post
				userId={detailPost.userId}
				id={detailPost.id}
				title={detailPost.title}
				body={detailPost.body}
				page="post-detail"
			/>
			<h3>댓글</h3>
			{comments?.map(({ id, name, email, body }: IComments) => (
				<Comment key={id} name={name} email={email} body={body} />
			))}
		</div>
	);
};

export default PostDetail;
