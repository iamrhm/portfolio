import React from "react";
import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";

import { GlobalStyle, WrapperContainer } from "./style";

function App() {
	return (
		<WrapperContainer>
			<GlobalStyle />
			<MenuPage />
			<LandingPage />
		</WrapperContainer>
	);
}

export default App;
