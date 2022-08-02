import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from 'components/Post/Post';
import { IPostInterface } from 'types/PostInterface';
import { getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';

interface Params {
	id: string;
}

const PostDetail = (): JSX.Element => {
	const dispatch = useDispatch();
	const { detailPost } = useSelector((state: { post: PostsState }) => state.post);
	const { id } = useParams<keyof Params>() as Params;
	const [post, setPost] = useState<IPostInterface>();

	useEffect(() => {
		dispatch(getPost(id));
	}, [dispatch, id, detailPost]);

	return (
		<div>
			<Post
				userId={detailPost.userId}
				id={detailPost.id}
				title={detailPost.title}
				body={detailPost.body}
				page="post-detail"
			/>
		</div>
	);
};

export default PostDetail;
