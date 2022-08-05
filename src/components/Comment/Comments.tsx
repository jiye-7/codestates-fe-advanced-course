import { useSelector } from 'react-redux';
import { PostsState } from 'redux/reducers/postReducer';
import { IComments } from 'types/PostInterface';
import Comment from './Comment';

interface IProps {
	isToggle: boolean;
	id: number;
}

const Comments = ({ isToggle, id }: IProps): JSX.Element => {
	const { comments } = useSelector((state: { post: PostsState }) => state.post);

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
