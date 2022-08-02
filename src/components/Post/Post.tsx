import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IPostInterface } from 'types/PostInterface';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	&:hover {
		cursor: pointer;
	}

	&:active {
		color: gray;
	}
`;

const Title = styled.h1`
	font-size: 1.2rem;
	transition: font 0.3s ease;

	&:hover {
		font-size: 1.3rem;
	}
`;

const Author = styled.h2`
	font-size: 1rem;
	text-align: right;
`;

const Line = styled.hr`
	margin-top: 0.5rem;
	border-bottom: 3px solid rgb(192, 190, 190);
`;

const Post = ({ id, title, userId, body: content, page }: IPostInterface): JSX.Element => {
	const navigate = useNavigate();
	const [isToggle, setIsToggle] = useState<boolean>(false);

	const onDetailPage = (id: number): void => {
		navigate(`/posts/${id}`);
	};

	const renderPost = () => {
		if (page === 'posts') {
			return (
				<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDetailPage(id)}>
					<Title>{title}</Title>
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
