import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { theme } from '../utils';
import background from '../../assets/smak.jpg';

const Landing = () => {
	return (
		<Wrapper>
			<H1>Microgreens</H1>
			{/* 	<P>
				Her på siden, finder du alt information omkring mikrogrønt, dyrket af Microgreens
				Danmark.
			</P>
			<LinkS to='/microgreens'>Find ud af mere her!</LinkS> */}
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: calc(100vh - 67px);
	width: 100vw;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-image: url(${background});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.9;
`;

const H1 = styled.h1`
	padding: 7vh 6vw;
	font-family: 'Ubuntu';
	font-size: 44px;
	color: ${theme.green};
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.8);
	backdrop-filter: blur(5px);
`;

/* const P = styled.p`
	margin: 7rem 10vw;
	padding: 1.5rem 1rem;
	color: ${theme.white};
	line-height: 1.5;
	background: linear-gradient(148deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
	backdrop-filter: blur(5px);
	border-radius: 10px;$
`;

const LinkS = styled(Link)`
	padding: 1rem;
	background-color: ${theme.white};
	border-radius: 20px;
	font-size: 24px;
	text-decoration: none;
	color: ${theme.white};
	background-color: ${theme.darkgreen};
	opacity: 0.99;
`; */

export default Landing;
