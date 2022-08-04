import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostDetailComments from '../PostDetailComments/PostDetailComments';

interface IProps {
	id: number;
	title: string;
	userId: number;
	body: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 1.5rem 0.5rem;

	&:hover {
		cursor: pointer;
	}

	&:active {
		color: gray;
	}
`;

const Summary = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1.2rem;
`;

const Title = styled.h1`
	font-size: 1.1rem;
	transition: font 0.3s ease;

	&:hover {
		font-size: 1.12rem;
	}
`;

const Author = styled.h2`
	font-size: 1rem;
`;

const Line = styled.hr`
	border-bottom: 3px solid rgb(192, 190, 190);
`;

const PostContent = styled.p`
	// margin: 0.5rem 0rem;
`;

const Post = ({ id, title, userId, body: content }: IProps): JSX.Element => {
	const navigate = useNavigate();
	const [isToggle, setIsToggle] = useState<boolean>(false);

	const onDisplayDetailPageAndComments = () => {
		setIsToggle(!isToggle);
	};

	useEffect(() => {
		const onPostDetailPage = (): void => {
			navigate(`/post/${id}`, { state: { id, title, userId, content, isToggle } });
		};
		if (isToggle) onPostDetailPage();
	}, [content, id, isToggle, navigate, title, userId]);

	const renderPost = () => {
		return (
			<>
				<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDisplayDetailPageAndComments()}>
					<Summary>
						<Title>{title}</Title>
						<Author>작성자 {userId}</Author>
					</Summary>
					<Line />
				</Container>
				{/* {isToggle && <PostDetailComments isToggle={isToggle} id={id} content={content} />} */}
			</>
		);
	};

	return <>{renderPost()}</>;
};

export default Post;
