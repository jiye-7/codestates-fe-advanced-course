import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from 'components/Comment/Comment';
import { getComments } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import styled from 'styled-components';

interface IProps {
	isToggle: boolean;
	id: number;
}

const Container = styled.div`
	margin-top: 0.5rem;
`;

const TotalComment = styled.h4`
	font-size: 1rem;
	text-align: right;
`;

const PostComments = ({ isToggle, id }: IProps): JSX.Element | null => {
	const dispatch = useDispatch();
	const { comments } = useSelector((state: { post: PostsState }) => state.post);

	useEffect(() => {
		const dispatchFunc = async () => {
			dispatch(await getComments(id));
		};
		if (isToggle) {
			dispatchFunc();
		}
	}, [dispatch, id, isToggle]);

	if (!isToggle) {
		return null;
	}

	return (
		<Container>
			<TotalComment>댓글 {comments.length}개</TotalComment>
			{comments?.map(({ id, name, email, body }: IComments) => (
				<Comment key={id} name={name} email={email} body={body} />
			))}
		</Container>
	);
};

export default PostComments;
