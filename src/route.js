import React from "react";
import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import { GlobalStyle, WrapperContainer, Background } from "./style";
import ScreenOne from "./components/background-screens/screen-one";
function App() {
	return (
		<React.Fragment>
			<Background>
				<ScreenOne />
			</Background>
			<WrapperContainer>
				<GlobalStyle />
				<MenuPage />
				<LandingPage />
			</WrapperContainer>
		</React.Fragment>
	);
}

export default App;
