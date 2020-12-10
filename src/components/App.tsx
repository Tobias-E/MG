import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { GlobalStyle } from './utils';
import { theme } from './utils';
import Header from './organisms/Header';
import Landing from './organisms/Landing';
import Products from './organisms/Products';
import Buy from './organisms/Buy';
import About from './organisms/About';
// import products from '../assets/products.json'

function App() {
	return (
		<Wrapper className='App'>
			<Router>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/products' component={Products} />
					<Route path='/buy' component={Buy} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	background-color: ${theme.white};
	position: relative;
`;

export default App;
