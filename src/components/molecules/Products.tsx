import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../utils';

// Types

type ProductProps = {
	title: string;
	img: string;
};

const Products = ({ title, img }: ProductProps) => {
	return (
		<Container to='/microgreen/1'>
			<Img src={img} />
			<P>{title}</P>
		</Container>
	);
};

const Container = styled(Link)`
	height: 35vw;
	width: 34vw;
	margin: 20vw 1rem 1rem 1rem;
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
`;

const Img = styled.img`
	height: 35vw;
	width: 35vw;
	position: absolute;
	top: -50%;
`;

const P = styled.p`
	margin-bottom: 10px;
	font-weight: 550;
	text-align: center;
	word-break: break-word;
`;

export default Products;
