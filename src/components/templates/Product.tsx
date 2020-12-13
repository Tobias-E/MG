import styled from 'styled-components';
import { theme } from '../utils';
import productImg from '../../assets/product.png';

const Product = () => {
	return (
		<Wrapper>
			<Container>
				<Img src={productImg} />
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
	background: linear-gradient(148deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
	backdrop-filter: blur(5px);
	position: relative;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Img = styled.img`
	max-width: 80vw;
	position: absolute;
	top: -26%;
`;

const H2 = styled.h2`
	margin: 18vh 0 1.8rem 0;
`;

const H5 = styled.h5`
	margin: 0;
`;

const P = styled.p`
	color: ${theme.black};
`;

export default Product;
