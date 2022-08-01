import React from 'react';
import Posts from 'components/Posts/Posts';

function App(): JSX.Element {
	return (
		<div className="App">
			<header className="App-header">
				<h1>게시물 프로젝트</h1>
			</header>
			<Posts />
		</div>
	);
}

export default App;
