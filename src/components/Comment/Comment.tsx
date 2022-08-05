import styled from 'styled-components';

interface IProps {
	name: string;
	email: string;
	content: string;
}

const Container = styled.div`
	margin: 1rem 1rem;
`;

const CommentDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Author = styled.h3`
	font-size: 1.1rem;
	text-weight: bold;
	margin-bottom: 0.5rem;
`;

const Email = styled.h5`
	font-size: 0.8rem;
	color: gray;
`;

const Content = styled.p`
	font-size: 1rem;
	color: rgb(59, 56, 56);
`;

const DescriptionSpan = styled.span`
	font-size: 0.9rem;
	color: rgb(72, 72, 72);
`;

const Comment = ({ name, email, content }: IProps): JSX.Element => {
	return (
		<Container>
			<CommentDiv>
				<Author>
					<DescriptionSpan>name: </DescriptionSpan>
					{name}
				</Author>
				<Email>{email}</Email>
			</CommentDiv>
			<Content>
				<DescriptionSpan>content: </DescriptionSpan>
				{content}
			</Content>
		</Container>
	);
};

export default Comment;
