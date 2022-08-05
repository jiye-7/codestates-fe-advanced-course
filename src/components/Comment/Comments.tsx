import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getComments } from 'redux/actions/postAction';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import Comment from './Comment';

interface IProps {
	isToggle: boolean;
	id: number;
}

const Comments = ({ isToggle, id }: IProps): JSX.Element => {
	const dispatch = useDispatch();
	const { comments } = useSelector((state: { post: PostsState }) => state.post);

	useEffect(() => {
		(async (): Promise<void> => {
			dispatch(await getComments(Number(id)));
		})();
	}, [dispatch, id]);

	return (
		<>
			{isToggle &&
				comments?.map(({ id, name, email, body: content }: IComments) => (
					<Comment key={id} name={name} email={email} content={content} />
				))}
		</>
	);
};

export default Comments;
