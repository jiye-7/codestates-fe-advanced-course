import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPostInterface } from 'types/PostInterface';
import { getPosts } from 'redux/actions/postAction';
import Post from 'components/Post/Post';
import ButtonContainer from 'components/Button/Button';

const Posts: FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState<IPostInterface[]>([]);
	const [pagePosts, setPagePosts] = useState<IPostInterface[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		const allPosts = async (): Promise<void> => {
			try {
				const data = dispatch(await getPosts());

				if (data.type === 'GET_POSTS') {
					setPosts(data.payload);
				}
			} catch (err) {
				console.log(err);
			}
		};
		allPosts();
	}, [dispatch]);

	useEffect(() => {
		const pagePosts = posts?.slice(currentPage * 10 - 10, currentPage * 10);
		setPagePosts(pagePosts);
	}, [posts, currentPage]);

	const handlePagePosts = (selectPage: number): void => {
		setCurrentPage(selectPage);
	};

	return (
		<>
			<div className="post-container">
				{pagePosts?.map(({ id, title, userId, body }: IPostInterface) => (
					<Post key={id} id={id} title={title} userId={userId} body={body} />
				))}
			</div>
			<ButtonContainer
				currentPage={currentPage}
				pageLength={Math.ceil(posts.length / 10)}
				handlePagination={handlePagePosts}
			/>
		</>
	);
};

export default Posts;
