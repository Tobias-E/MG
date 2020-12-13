import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import { GlobalStyle } from './utils';
import { theme } from './utils';
import Header from './organisms/Header';
import Landing from './organisms/Landing';
import Microgreens from './organisms/Microgreens';
import About from './organisms/About';
import logo from '../assets/mg-logo.svg';
// import products from '../assets/products.json'

function App() {
	return (
		<Wrapper className='App'>
			<Router>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/microgreens' component={Microgreens} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
			<Background />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	position: relative;
	/* background-color: ${theme.white}; */
`;

const Background = styled.div`
	height: 13rem;
	width: 13rem;
	position: fixed;
	z-index: -100;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	opacity: 0.5;
	background-image: url(${logo});
	background-position: center;
	background-repeat: no-repeat;
`;

export default App;
