import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getComments, getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import Comment from 'components/Comment/Comment';
import styled from 'styled-components';
import { Summary, Title, Author, Line } from '../Post/Post';

const ToPage = styled.button`
	width: 7rem;
	padding: 0.5rem 0;
	border-radius: 0.5rem;
	margin-bottom: 2rem;
	&:hover {
		cursor: pointer;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 1.4rem;
	border-radius: 20px;
`;

const PostContent = styled.p`
	margin: 0rem 0.5rem 1.5rem 0rem;
	font-weight: bold;
`;

const DescriptionSpan = styled.span`
	font-size: 0.8rem;
	color: rgb(72, 72, 72);
`;

const TotalComment = styled.h4`
	font-size: 1rem;
	text-align: left;
	margin-top: 1.5rem;
	&:hover {
		cursor: pointer;
	}
`;

const PostDetailComments = (): JSX.Element | null => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { detailPost, comments } = useSelector((state: { post: PostsState }) => state.post);
	const [isToggle, setIsToggle] = useState<boolean>(false);

	useEffect(() => {
		const dispatchPostAndComments = async () => {
			dispatch(await getPost(Number(id)));
			dispatch(await getComments(Number(id)));
		};

		dispatchPostAndComments();
	}, [dispatch, id, isToggle]);

	const onVisibleComments = () => {
		setIsToggle(!isToggle);
	};

	return (
		<>
			<Container>
				<ToPage onClick={() => navigate('/')}>리스트로 가기</ToPage>
				<Summary>
					<Title>
						<DescriptionSpan>아이디: </DescriptionSpan>
						{detailPost.title}
					</Title>
					<Author>
						<DescriptionSpan>작성자: </DescriptionSpan> {detailPost.userId}
					</Author>
				</Summary>
				<PostContent>{detailPost.body}</PostContent>
				<Line />
				{isToggle ? (
					<TotalComment onClick={onVisibleComments}>댓글 접기</TotalComment>
				) : (
					<TotalComment onClick={onVisibleComments}>댓글 {comments.length}개 보기</TotalComment>
				)}
				{isToggle &&
					comments?.map(({ id, name, email, body }: IComments) => (
						<Comment key={id} name={name} email={email} body={body} />
					))}
			</Container>
		</>
	);
};

export default PostDetailComments;
