import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getInitializationState, getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import Comments from 'components/Comment/Comments';
import styled from 'styled-components';
import { Summary, Title, Author, Line } from '../Post/Post';
import Loading from '../share/Loading';
import { IPostInterface } from 'types/PostInterface';

interface ILocationState {
	rememberPage: number;
}

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

const PostDetail = (): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = useParams();
	const { rememberPage } = location.state as ILocationState;
	const { detailPost, comments } = useSelector((state: { post: PostsState }) => state.post);
	const [detailPostData, setDetailPostData] = useState<IPostInterface>();
	const [isToggle, setIsToggle] = useState<boolean>(false);

	useEffect(() => {
		(async (): Promise<void> => {
			const data = dispatch(await getPost(Number(id)));
			if (data.type === 'GET_POST') {
				setDetailPostData(data.payload);
			}
		})();
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(getInitializationState());
	}, [dispatch]);

	const onVisibleComments = () => {
		setIsToggle(!isToggle);
	};

	return (
		<>
			{!detailPostData ? (
				<Loading />
			) : (
				<Container>
					<ToPage onClick={() => navigate('/', { state: { rememberPage } })}>리스트로 가기</ToPage>
					<Summary>
						<Title>
							<DescriptionSpan>제목: </DescriptionSpan>
							{detailPost.title}
						</Title>
						<Author>
							<DescriptionSpan>작성자: </DescriptionSpan> {detailPost.userId}
						</Author>
					</Summary>
					<DescriptionSpan>내용: </DescriptionSpan>
					<PostContent>{detailPost.body}</PostContent>
					<Line />
					<TotalComment onClick={onVisibleComments}>
						{isToggle ? '댓글 접기' : `댓글 ${comments.length}개 보기`}
					</TotalComment>
					<Comments isToggle={isToggle} id={Number(id)} />
				</Container>
			)}
		</>
	);
};

export default PostDetail;
