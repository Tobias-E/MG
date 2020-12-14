import styled from 'styled-components';
import { theme } from '../utils';
import productImg from '../../assets/product.png';

const Product = () => {
	return (
		<Wrapper>
			<Container>
				<Img src={productImg} alt={`Produkt billede`} />
				<H2>Hvidløg</H2>
				<H5>Undertitel</H5>
				<P>Hello this is the single page!</P>
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
	height: 60vh;
	width: 80vw;
	margin: 40vw 1rem 1rem 1rem;
	padding: 30vw 2.1rem 1.6rem 2.1rem;
	background: linear-gradient(148deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
	backdrop-filter: blur(5px);
	position: relative;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: ${theme.tablet}) {
		margin: 8rem 1rem 1rem 1rem;
		padding: 5rem 2.1rem 1.6rem 2.1rem;
		align-items: flex-start;
	}
	@media screen and (min-width: ${theme.desktop}) {
		overflow: hidden;
		margin: 10rem 1rem 1rem 1rem;
		padding: 6rem 7.1rem 4.6rem 7.1rem;
		align-items: flex-start;
	}
`;

const Img = styled.img`
	max-width: 90vw;
	position: absolute;
	top: -26%;
	background-color: transparent;
	@media screen and (min-width: ${theme.tablet}) {
		max-width: 25rem;
		top: 55%;
		right: -10%;
	}
	@media screen and (min-width: ${theme.desktop}) {
		top: 20%;
		right: 0%;
	}
`;

const H2 = styled.h2`
	margin: 2rem 0 1.8rem 0;
`;

const H5 = styled.h5`
	margin: 0;
`;

const P = styled.p`
	color: ${theme.black};
`;

export default Product;
