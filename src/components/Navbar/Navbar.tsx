import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.nav`
	width: 100%;
	padding: 1rem 1rem;
	text-align: center;
	font-size: 2rem;
	color: white;
	background-color: #836fa9;
	border-radius: 3px;
`;

const Navbar: FC = (): JSX.Element => {
	return <Container>Post</Container>;
};

export default Navbar;
