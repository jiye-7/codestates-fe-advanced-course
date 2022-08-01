import React from 'react';
import Styled from 'styled-components';
import { IPostInterface } from 'module/PostInterface';

const Container = Styled.div`
  background-color: skyblue;
  font-size: 16px;
`;

const Post = ({ title, userId, body: content }: IPostInterface): JSX.Element => {
	return (
		<Container>
			<h2>{title}</h2>
			<h4>작성자 {userId}</h4>
			<p>{content}</p>
		</Container>
	);
};

export default Post;
