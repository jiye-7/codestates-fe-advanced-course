import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPostInterface } from 'module/PostInterface';
import { getPosts } from 'redux/actions/postAction';
import Post from 'components/Post/Post';

const Posts = (): JSX.Element => {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState<IPostInterface[]>([]);

	useEffect(() => {
		const allPosts = async (): Promise<void> => {
			try {
				// const { data }: AxiosResponse<IPostInterface[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
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
		<div>
			{posts?.map(({ id, title, userId, body }: IPostInterface) => (
				<Post key={id} title={title} userId={userId} body={body} />
			))}
		</div>
	);
};

export default Posts;
