import React, { useState } from 'react';
import styled from 'styled-components';
import PostComments from '../PostComments/PostComments';

interface IProps {
	id: number;
	title: string;
	userId: number;
	body: string;
}

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

const PostContent = styled.p`
	margin: 0.5rem 0rem;
`;

const Post = ({ id, title, userId, body: content }: IProps): JSX.Element => {
	const [isToggle, setIsToggle] = useState<boolean>(false);

	const onDisplayDetailPageAndComments = () => {
		setIsToggle(!isToggle);
	};

	const renderPost = () => {
		return (
			<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDisplayDetailPageAndComments()}>
				<Title>{title}</Title>
				<Author>작성자 {userId}</Author>
				{isToggle && <PostContent>{content}</PostContent>}
				<Line />
				<PostComments isToggle={isToggle} id={id} />
			</Container>
		);
	};

	return <>{renderPost()}</>;
};

export default Post;
