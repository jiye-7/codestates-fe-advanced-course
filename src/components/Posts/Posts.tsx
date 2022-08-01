import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IPostInterface } from 'module/PostInterface';
import Post from 'components/Post/Post';

const Posts = (): JSX.Element => {
	const [posts, setPosts] = useState<IPostInterface[]>([]);

	useEffect(() => {
		const allPosts = async (): Promise<void> => {
			try {
				const { data }: AxiosResponse<IPostInterface[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');

				if (data) {
					setPosts(data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		allPosts();
	}, []);
	return (
		<div>
			{posts?.map(({ id, title, body }: IPostInterface) => (
				<Post key={id} title={title} body={body} />
			))}
		</div>
	);
};

export default Posts;
