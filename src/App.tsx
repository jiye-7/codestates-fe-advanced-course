import React, { useEffect, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

function App(): JSX.Element {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const allPosts = async (): Promise<void> => {
			try {
				const { data }: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');

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
		<div className="App">
			<header className="App-header">
				<p>게시물 프로젝트</p>
				<div>
					{posts?.map(({ id, title, body }: Post) => (
						<div key={id}>
							<h2>{title}</h2>
							<p>{body}</p>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
