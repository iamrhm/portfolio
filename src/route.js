import React from "react";
import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";
import SkillsAndExperience from "./pages/skills-experience";

import DefaultPage from "./components/work-in-progress";

import { HashRouter as Router, Route } from "react-router-dom";

import {
	GlobalStyle,
	WrapperContainer,
	Background,
	RoutesContainer
} from "./style";
import ScreenOne from "./components/background-screens/screen-one";

function App() {
	return (
		<React.Fragment>
			<Background>
				<ScreenOne />
			</Background>
			<WrapperContainer>
				<GlobalStyle />
				<Router>
					<MenuPage /> {/* Header all page visible*/}
					<RoutesContainer>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/skill" component={SkillsAndExperience} />
						<Route exact path="/work-on-progress" component={DefaultPage} />
					</RoutesContainer>
				</Router>
			</WrapperContainer>
		</React.Fragment>
	);
}

export default App;
