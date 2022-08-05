import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Posts from 'components/Post/Posts';
import PostDetail from 'components/Post/PostDetail';

function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<main className="App">
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/post/:id" element={<PostDetail />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
