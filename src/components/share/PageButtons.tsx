import styled from 'styled-components';
import PageButton from './Button';

interface IProps {
	currentPage: number;
	pageLength: number;
	handlePagination: (selectPage: number) => void;
}

const Container = styled.div`
	text-align: center;
	padding-bottom: 1rem;
`;

const Button = styled.button`
	font-weight: bold;
	cursor: disable;
	width: 3rem;
	hight: 3rem;
	padding: 1rem;
	border-radius: 5px;
	margin-right: 0.5rem;
`;

const ButtonContainer = ({ pageLength, currentPage, handlePagination }: IProps) => {
	return (
		<Container>
			<Button>{'<'}</Button>
			{new Array(pageLength).fill(0).map((_item, idx) => (
				<PageButton key={idx} pageNumber={idx + 1} handlePagination={handlePagination} currentPage={currentPage} />
			))}
			<Button>{'>'}</Button>
		</Container>
	);
};

export default ButtonContainer;
