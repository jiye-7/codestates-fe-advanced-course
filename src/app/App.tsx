import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Posts from 'components/Posts/Posts';
import PostDetail from 'components/PostDetail/PostDetail';

function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<main className="App">
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/posts/:id" element={<PostDetail />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
