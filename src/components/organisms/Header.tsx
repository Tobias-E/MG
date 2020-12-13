import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaEnvira, FaInfoCircle } from 'react-icons/fa';

// Components
import Logo from '../../assets/mg-logo.svg';
import { theme } from '../utils';

const Header = () => {
	return (
		<Container>
			<LinkS to='/'>
				<Img src={Logo} alt='logo' />
			</LinkS>
			<Nav>
				<LinkS exact to='/'>
					<FaHome />
					<P> Home </P>
				</LinkS>
				<LinkS to='/microgreens'>
					<FaEnvira />
					<P>Microgreens</P>
				</LinkS>
				<LinkS to='/about'>
					<FaInfoCircle />
					<P>About</P>
				</LinkS>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 1rem 10vw;
	position: fixed;
	bottom: 0;
	background-color: ${theme.white};
	box-shadow: 0 -5px 50px ${theme.grey};
	@media screen and (min-width: ${theme.tablet}) {
	}
	@media screen and (min-width: ${theme.desktop}) {
		padding: 1rem 20vw;
	}
	@media screen and (min-width: ${theme.largeDesktop}) {
	}
`;

const Img = styled.img`
	display: none;
	width: 50px;
	height: 50px;
	@media screen and (min-width: ${theme.tablet}) {
	}
	@media screen and (min-width: ${theme.desktop}) {
	}
	@media screen and (min-width: ${theme.largeDesktop}) {
	}
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`;

const LinkS = styled(NavLink)`
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${theme.black};
	opacity: 0.8;

	&.active {
		color: ${theme.green};
	}
`;

const P = styled.p`
	margin: 0 0 0 0rem;
`;

export default Header;
