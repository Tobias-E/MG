import styled /* , { keyframes } */ from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaEnvira, FaStore, FaInfoCircle } from 'react-icons/fa';

// Components
import Logo from '../../assets/mg-logo.svg';
import { theme } from '../utils';

const Header = () => {
	const location: String = useLocation().pathname;
	return (
		<Container>
			<LinkS to='/'>
				<Img src={Logo} alt='logo' />
			</LinkS>
			<Nav>
				<LinkS to='/'>
					<FaHome />
					<P> {location === '/' ? 'Home' : ''}</P>
				</LinkS>
				<LinkS to='/products'>
					<FaEnvira /> <P>{location === '/products' ? 'Microgreens' : ''}</P>
				</LinkS>
				<LinkS to='/buy'>
					<FaStore /> <P>{location === '/buy' ? 'Buy' : ''}</P>
				</LinkS>
				<LinkS to='/about'>
					<FaInfoCircle /> <P>{location === '/about' ? 'About' : ''}</P>
				</LinkS>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem 2rem;
	border-top: 1px solid ${theme.black};
	position: fixed;
	bottom: 0;
	@media screen and (min-width: ${theme.tablet}) {
	}
	@media screen and (min-width: ${theme.desktop}) {
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

const LinkS = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	/* 	color: ${theme.black};

	:focus {
		color: ${theme.black};
	} */
`;

/* const animation = keyframes`
    0% {width: 0}
    100% {width: 100%}
`; */

const P = styled.p`
	margin: 0 0 0 0.2rem;
`;

export default Header;
