import styled from 'styled-components';

// Components
import { GlobalStyle } from './utils';
import { theme } from './utils';

function App() {
	return (
		<Wrapper className='App'>
			<GlobalStyle />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: ${theme.white};
`;

export default App;
