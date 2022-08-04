import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Posts from 'components/Posts/Posts';
import PostDetailComments from 'components/PostDetailComments/PostDetailComments';

function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<main className="App">
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/post/:id" element={<PostDetailComments />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
