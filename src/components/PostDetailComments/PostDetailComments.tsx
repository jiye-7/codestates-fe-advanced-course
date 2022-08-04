import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Comment from 'components/Comment/Comment';
import { getComments } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import styled from 'styled-components';

/* interface IProps {
	isToggle: boolean;
	id: number;
	content: string;
} */

const Container = styled.div`
	margin-top: 0.5rem;
	background-color: pink;
	border-radius: 30px;
`;

const TotalComment = styled.h4`
	font-size: 1rem;
	text-align: right;
`;

interface ILocation {
	id: number;
	userId: number;
	content: string;
	title: string;
	isToggle: boolean;
}

const PostDetailComments = (/* { isToggle, id, content }: IProps */): JSX.Element | null => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { id, userId, content, title, isToggle } = location.state as ILocation;

	const { comments } = useSelector((state: { post: PostsState }) => state.post);

	useEffect(() => {
		const dispatchComments = async () => {
			dispatch(await getComments(id));
		};
		if (isToggle) {
			dispatchComments();
		}
	}, [dispatch, id, isToggle]);

	if (!isToggle) {
		return null;
	}

	return (
		<Container>
			<button onClick={() => navigate('/')}>리스트로 가기</button>
			<h1>detail page</h1>
			<p>{content}</p>
			<TotalComment>댓글 {comments.length}개</TotalComment>
			{comments?.map(({ id, name, email, body }: IComments) => (
				<Comment key={id} name={name} email={email} body={body} />
			))}
		</Container>
	);
};

export default PostDetailComments;
