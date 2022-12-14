import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getComments, getInitializationState, getPost } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import Comments from 'components/Comment/Comments';
import styled from 'styled-components';
import { Summary, Title, Author, Line } from '../Post/Post';
import Loading from '../share/Loading';

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
	const [isToggle, setIsToggle] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async (): Promise<void> => {
			dispatch(await getPost(Number(id)));
			dispatch(await getComments(Number(id)));
			setIsLoading(false);
		})();
	}, [dispatch, id]);

	useEffect(() => {
		return () => {
			dispatch(getInitializationState());
		};
	}, [dispatch]);

	const onVisibleComments = () => {
		setIsToggle(!isToggle);
	};

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<Container>
					<ToPage onClick={() => navigate('/', { state: { rememberPage } })}>???????????? ??????</ToPage>
					<Summary>
						<Title>
							<DescriptionSpan>??????: </DescriptionSpan>
							{detailPost.title}
						</Title>
						<Author>
							<DescriptionSpan>?????????: </DescriptionSpan> {detailPost.userId}
						</Author>
					</Summary>
					<DescriptionSpan>??????: </DescriptionSpan>
					<PostContent>{detailPost.body}</PostContent>
					<Line />
					<TotalComment onClick={onVisibleComments}>
						{isToggle ? '?????? ??????' : `?????? ${comments.length}??? ??????`}
					</TotalComment>
					<Comments isToggle={isToggle} />
				</Container>
			)}
		</>
	);
};

export default PostDetail;
