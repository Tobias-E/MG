import { Suspense } from 'react';
import styled from 'styled-components';
import { theme } from '../utils';

// Components
import microgreens from '../../assets/products.json';
import Products from '../molecules/Products';

const Microgreens = () => {
	return (
		<Wrapper>
			<h2>Microgreens</h2>
			<ProductContainer>
				{Object.values(microgreens).map((e) => (
					<Suspense fallback={<h2>Loading...</h2>}>
						<Products title={e.navn} img={e.img} url={e.url} key={e.url} />
					</Suspense>
				))}
			</ProductContainer>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	margin-bottom: 67px;
	padding: 0 6vw 67px 6vw;
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
