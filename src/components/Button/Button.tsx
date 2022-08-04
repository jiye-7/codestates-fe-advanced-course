import styled from 'styled-components';
import PageButton from './PageButton';

interface IProps {
	currentPage: number;
	pageLength: number;
	handlePagination: (selectPage: number) => void;
}

const Container = styled.div`
	text-align: center;
	padding-bottom: 1rem;
`;

export const Button = styled.button`
	font-weight: bold;
	cursor: pointer;
	width: 3rem;
	hight: 3rem;
	padding: 1rem;
	border-radius: 5px;
	margin-right: 0.5rem;

	&:hover {
		color: white;
		background-color: #9fa8da;
	}
`;

const ButtonContainer = ({ pageLength, handlePagination }: IProps) => {
	return (
		<Container>
			<Button>{'<'}</Button>
			{new Array(pageLength).fill(0).map((_item, idx) => (
				<PageButton key={idx} pageNumber={idx + 1} handlePagination={handlePagination} />
			))}
			<Button>{'>'}</Button>
		</Container>
	);
};

export default ButtonContainer;
