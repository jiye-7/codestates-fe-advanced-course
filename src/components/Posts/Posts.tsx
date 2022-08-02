import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPostInterface } from 'types/PostInterface';
import { getPosts } from 'redux/actions/postAction';
import Post from 'components/Post/Post';
import Styled from 'styled-components';

const Container = Styled.div`

`;

const Posts: FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState<IPostInterface[]>([]);

	useEffect(() => {
		const allPosts = async (): Promise<void> => {
			try {
				const data = dispatch(await getPosts());

				if (data.type === 'GET_POSTS') {
					setPosts(data.payload);
				}
			} catch (err) {
				console.log(err);
			}
		};
		allPosts();
	}, [dispatch]);
	return (
		<Container>
			{posts?.map(({ id, title, userId, body }: IPostInterface) => (
				<Post key={id} id={id} title={title} userId={userId} body={body} page="posts" />
			))}
		</Container>
	);
};

export default Posts;
