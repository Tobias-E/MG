import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { theme } from '../utils';
import microgreens from '../../assets/products.json';

// Types
interface ParamTypes {
	id: string;
}

const Product = () => {
	let { id } = useParams<ParamTypes>();
	console.log(id);
	/* const test = Object.entries(microgreens);
	console.log(test); */
	// const mg = Object.values(microgreens).map((e) => (e.url === id ? e : ''));
	/* 	for (const key in microgreens) {
		console.log(`${key}: ${microgreens}`);
	} */

	let mg = Object.values(microgreens).filter((e) => e.url === id)[0];

	console.log('test::', mg);
	return (
		<Wrapper>
			<Container>
				<Img src={mg.img} alt={`Produkt billede`} />
				<H2>{mg.navn}</H2>
				<H5>Holdbarhed</H5>
				<P>
					{mg.holdbarhed} dage afhængig af håndtering og forhold. Håndtering: Mikro grønt
					er et levende produkt ved levering, det vil derfor gro videre til det høstes.
					Der gælder krav for at kvaliteten skal bibeholdes.
				</P>
				<H5>Opbevaring</H5>
				<P>{mg.opbevaring}</P>
				<H5>Smag</H5>
				<P>{mg.smag}</P>
				<H5>Dyrkningsproces</H5>
				<P>
					Datoen som findes på mærkatet, er dagen frøene er sat i spiringskammer, som de
					er i {mg.springskammer} dage. Når frøene er spiret bliver de klar til at komme
					under lys, hvor står i {mg.vækst} dage. <br />
					Fra frø til, at du står med produktet i hånden, er der totalt gået {mg.total}.
				</P>
				<H5>Generel information</H5>
				<P>
					Vores frø er fra en økologisk certificeret kilde, bakterietestet og følger Dansk
					og Europæisk fødevarelovgivning indenfor spirefrø.
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
	/* 	height: 60vh; */
	width: 80vw;
	margin: 40vw 1rem 20vw 1rem;
	padding: 35vw 2.1rem 1.6rem 2.1rem;
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
		margin: 10rem 1rem 1rem 1rem;
		padding: 6rem 7.1rem 4.6rem 7.1rem;
		align-items: flex-start;
	}
`;

const Img = styled.img`
	max-width: 80vw;
	max-height: 75vw;
	position: absolute;
	top: -12%;
	background-color: transparent;
	@media screen and (min-width: ${theme.tablet}) {
		max-width: 25rem;
		max-height: 15rem;
		top: -12%;
		right: 5%;
	}
	@media screen and (min-width: ${theme.desktop}) {
		max-height: 18rem;
		top: -12%;
		right: 10%;
	}
`;

const H2 = styled.h2`
	margin: 2rem 0 1rem 0;
`;

const H5 = styled.h5`
	margin: 1.4rem 0 0 0;
`;

const P = styled.p`
	/* max-width: 40vw; */
	color: ${theme.black};
`;

export default Product;
