import styled from 'styled-components';

interface IProps {
	pageNumber: number;
	currentPage: number;
	handlePagination: (selectPage: number) => void;
}

const Button = styled.button`
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

	&:focus {
		color: white;
		background-color: #9fa8da;
	}
`;

const PageButton = ({ pageNumber, handlePagination }: IProps): JSX.Element => {
	return <Button onClick={() => handlePagination(pageNumber)}>{pageNumber}</Button>;
};

export default PageButton;
