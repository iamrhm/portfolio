import React from "react";
import LandingPage from "./pages/landing";
import { GlobalStyle } from "./style";

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<LandingPage />
		</React.Fragment>
	);
}

export default App;
