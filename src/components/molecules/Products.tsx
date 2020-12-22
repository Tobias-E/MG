import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../utils';

// Types

type ProductProps = {
	title: string;
	img: string;
	url: string;
};

const Products = ({ title, img, url }: ProductProps) => {
	return (
		<Container to={`/microgreens/${url}`}>
			<Img src={img} />
			<P>{title}</P>
		</Container>
	);
};

const Container = styled(Link)`
	height: 35vw;
	width: 34vw;
	margin: 20vw 1rem 1rem 1rem;
	padding: 0.5rem;
	background: linear-gradient(148deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
	backdrop-filter: blur(5px);
	position: relative;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	text-decoration: none;
	color: ${theme.black};
	@media screen and (min-width: ${theme.tablet}) {
		margin: 5rem 1rem 1rem 1rem;
		height: 17vw;
		width: 17vw;
	}
	@media screen and (min-width: ${theme.desktop}) {
		width: 12rem;
		height: 12rem;
		margin: 8rem 1rem 1rem 1rem;
	}
`;

const Img = styled.img`
	height: 34vw;
	width: 34vw;
	position: absolute;
	top: -50%;
	@media screen and (min-width: ${theme.tablet}) {
		height: 17vw;
		width: 17vw;
	}
	@media screen and (min-width: ${theme.desktop}) {
		height: 12rem;
		width: 12rem;
	}
`;

const P = styled.p`
	margin-bottom: 10px;
	font-weight: 550;
	text-align: center;
	word-break: break-word;
`;

export default Products;
