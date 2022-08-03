import styled from 'styled-components';

interface IProps {
	pageNumber: number;
}

const StyledButtons = styled.button`
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

const PageButton = ({ pageNumber }: IProps): JSX.Element => {
	return <StyledButtons>{pageNumber}</StyledButtons>;
};

export default PageButton;
