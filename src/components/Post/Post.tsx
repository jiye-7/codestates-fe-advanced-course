import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import { IPostInterface } from 'types/PostInterface';

const Container = Styled.div`
  background-color: skyblue;
  font-size: 16px;
`;

const Post = ({ id, title, userId, body: content, page }: IPostInterface): JSX.Element => {
	const navigate = useNavigate();

	const onDetailPage = (id: number): void => {
		navigate(`/posts/${id}`);
	};

	const renderPost = () => {
		if (page === 'posts') {
			return (
				<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDetailPage(id)}>
					<h2>{title}</h2>
					<h4>작성자 {userId}</h4>
				</Container>
			);
		} else if (page === 'post-detail') {
			return (
				<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDetailPage(id)}>
					<h2>{title}</h2>
					<h4>작성자 {userId}</h4>
					<p>{content}</p>
				</Container>
			);
		}
	};

	return <>{renderPost()}</>;
};

export default Post;
