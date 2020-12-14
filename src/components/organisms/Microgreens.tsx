import styled from 'styled-components';
import { theme } from '../utils';

// Components
import Products from '../molecules/Products';
import productImg from '../../assets/product.png';

const Microgreens = () => {
	return (
		<Wrapper>
			<h2>Microgreens</h2>
			<ProductContainer>
				<Products title='Hvidløg' img={productImg} />
				<Products title='Hvidløg' img={productImg} />
				<Products title='Hvidløg' img={productImg} />
				<Products title='Tallerken-smækker' img={productImg} />
				<Products title='Hvidløg' img={productImg} />
				<Products title='Volcano-radise' img={productImg} />
				<Products title='Volcano-radise' img={productImg} />
				<Products title='Volcano-radise' img={productImg} />
				<Products title='Volcano-radise' img={productImg} />
			</ProductContainer>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	margin-bottom: 67px;
	padding: 0 6vw 67px 6vw;
	/* width: 100vw; */
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: ${theme.desktop}) {
		/* justify-content: center; */
	}
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export default Microgreens;
