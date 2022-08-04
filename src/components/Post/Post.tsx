import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
	id: number;
	title: string;
	userId: number;
	body: string;
	rememberPage: number;
}

export const Container = styled.div`
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

export const Summary = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
	font-size: 1.1rem;
	transition: font 0.3s ease;

	&:hover {
		font-size: 1.12rem;
	}
`;

export const Author = styled.h2`
	font-size: 1rem;
`;

export const Line = styled.hr`
	border-bottom: 3px solid rgb(192, 190, 190);
`;

const Post = ({ id, title, userId, rememberPage }: IProps): JSX.Element => {
	const navigate = useNavigate();
	const onDisplayDetailPageAndComments = (): void => {
		navigate(`/post/${id}`, { state: { rememberPage } });
	};

	const renderPost = () => {
		return (
			<Container onClick={(e: React.MouseEvent<HTMLElement>) => onDisplayDetailPageAndComments()}>
				<Summary>
					<Title>{title}</Title>
					<Author>작성자 {userId}</Author>
				</Summary>
				<Line />
			</Container>
		);
	};

	return <>{renderPost()}</>;
};

export default Post;
