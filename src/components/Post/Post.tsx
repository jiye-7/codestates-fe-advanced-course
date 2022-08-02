import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import { IPostInterface } from 'types/PostInterface';

const Container = Styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;	
`;

const Author = Styled.h4`
	text-align: right;
`;

const Line = Styled.hr`
	margin-top: 0.5rem;
	border-bottom: 3px solid rgb(192, 190, 190);
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
					<h1>{title}</h1>
					<Author>작성자 {userId}</Author>
					<Line />
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
