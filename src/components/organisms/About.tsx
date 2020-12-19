import styled from 'styled-components';
import { theme } from '../utils';
import logo from '../../assets/logo.svg';

const About = () => {
	return (
		<Wrapper>
			<Container>
				<Img src={logo} alt='Microgreens Danmark logo' />
				<H2>About</H2>
				<H5>Hvem er vi?</H5>
				<P>
					Virksomhed som producere bæredygtig mikrogrønt til restauranter, catering &
					hoteller rundt i hele Danmark.
				</P>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const Container = styled.article`
	width: 80vw;
	margin: 30vw 1rem 20vw 1rem;
	padding: 50vw 2.1rem 1.6rem 2.1rem;
	background: linear-gradient(148deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
	backdrop-filter: blur(5px);
	position: relative;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: ${theme.tablet}) {
		margin: 20vw 1rem 20vw 1rem;
		padding: 42vw 2.1rem 1.6rem 2.1rem;
	}
	@media screen and (min-width: ${theme.desktop}) {
		margin: 10rem 1rem 10rem 1rem;
		padding: 17rem 2.1rem 1.6rem 2.1rem;
	}
`;

const Img = styled.img`
	max-width: 60vw;
	position: absolute;
	top: -12%;
	background-color: transparent;
	@media screen and (min-width: ${theme.tablet}) {
		max-width: 50vw;
		top: -22%;
	}
	@media screen and (min-width: ${theme.desktop}) {
		max-width: 20rem;
	}
`;

const H2 = styled.h2`
	margin: 0 0 1.8rem 0;
`;

const H5 = styled.h5`
	margin: 0;
`;

const P = styled.p`
	color: ${theme.black};
`;

export default About;
