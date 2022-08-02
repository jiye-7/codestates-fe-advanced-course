import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from 'components/Posts/Posts';
import PostDetail from 'components/PostDetail/PostDetail';

function App(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				<h1>게시물 프로젝트</h1>
			</header>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/posts/:id" element={<PostDetail />} />
			</Routes>
		</div>
	);
}

export default App;
