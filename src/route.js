import React from "react";
import LandingPage from "./pages/landing";
import Header from "./components/header";

import {
	GlobalStyle,
	WrapperContainer,
	BackgroundScreen,
	BackgroundWrapper,
	MaskLayer
} from "./style";
import { MatrixBackground } from "./assets/background-shapes/matrix-screen";

function App() {
	return (
		<WrapperContainer>
			<GlobalStyle />
			<Header />
			<BackgroundScreen>
				<BackgroundWrapper>
					<MatrixBackground />
					<MaskLayer />
				</BackgroundWrapper>
			</BackgroundScreen>
			<LandingPage />
		</WrapperContainer>
	);
}

export default App;
