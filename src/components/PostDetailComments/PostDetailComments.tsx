import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Comment from 'components/Comment/Comment';
import { getComments, getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import styled from 'styled-components';
import { Summary, Title, Author } from '../Post/Post';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	background-color: pink;
	border-radius: 20px;
`;

const PostContent = styled.p`
	// margin: 0.5rem 0rem;
`;

const TotalComment = styled.h4`
	font-size: 1rem;
	text-align: right;
`;

const PostDetailComments = (): JSX.Element | null => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { detailPost, comments } = useSelector((state: { post: PostsState }) => state.post);

	/* useEffect(() => {
		const dispatchComments = async () => {
			dispatch(await getComments(Number(id)));
		};
		if (isToggle) {
			dispatchComments();
		}
	}, [dispatch, id, isToggle]);

	if (!isToggle) {
		return null;
	} */

	useEffect(() => {
		const dispatchComments = async () => {
			dispatch(await getPost(Number(id)));
			dispatch(await getComments(Number(id)));
		};

		dispatchComments();
	}, [dispatch, id]);

	return (
		<Container>
			<button onClick={() => navigate('/')}>리스트로 가기</button>
			<Summary>
				<Title>{detailPost.title}</Title>
				<Author>작성자 {detailPost.userId}</Author>
			</Summary>
			<PostContent>{detailPost.body}</PostContent>
			<TotalComment>댓글 {comments.length}개</TotalComment>
			{comments?.map(({ id, name, email, body }: IComments) => (
				<Comment key={id} name={name} email={email} body={body} />
			))}
		</Container>
	);
};

export default PostDetailComments;
