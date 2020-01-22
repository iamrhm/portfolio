import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import MenuPage from "./pages/menu";
import AboutPage from "./pages/about";
import SkillsAndExperience from "./pages/skills-experience";
import DefaultPage from "./components/work-in-progress";
import ContactPage from "./pages/contact";

import WrapperLoader from "./components/loader";

import { GlobalStyle, WrapperContainer, PageContainer } from "./style";

function App() {
	return (
		<React.Fragment>
			<WrapperContainer>
				<GlobalStyle />
				<Router>
					<WrapperLoader>
						<MenuPage /> {/* Header all page visible*/}
						<PageContainer>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/skill" component={SkillsAndExperience} />
							<Route exact path="/contact-me" component={ContactPage} />
							<Route exact path="/work-on-progress" component={DefaultPage} />
						</PageContainer>
					</WrapperLoader>
				</Router>
			</WrapperContainer>
		</React.Fragment>
	);
}

export default App;
