import React from "react";
import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import Header from "./components/header";

import {
	GlobalStyle,
	WrapperContainer,
} from "./style";

import ScreenOne from "./components/background-screen";

function App() {
	return (
		<WrapperContainer>
			<GlobalStyle />
			<Header />
			<ScreenOne />
			<LandingPage />
			{/* <MenuPage /> */}
		</WrapperContainer>
	);
}

export default App;
