import styled from 'styled-components';
import PageButton from './PageButton';

interface IProps {
	pageLength?: number;
}

const Container = styled.div`
	text-align: center;
	padding-bottom: 1rem;
`;

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

const Button = ({ pageLength }: IProps): JSX.Element => {
	return (
		<Container>
			<StyledButtons>{'<'}</StyledButtons>
			{[...Array(pageLength)].map((num, idx) => (
				<PageButton key={idx} pageNumber={idx + 1} />
			))}
			<StyledButtons>{'>'}</StyledButtons>
		</Container>
	);
};

export default Button;
