import React, { useContext } from "react";

import { StyledBody, ContactMeButton, Container } from "./style";
import { withRouter } from "react-router-dom";

import Animate from "../animate-wrapper";
import { textAnimation, delayRoute } from "../../config/animation";
import { PortfolioContext } from "../../context";

const InfoSection = ({ history }) => {
	const { home } = useContext(PortfolioContext);
	return (
		<Container>
			<Animate animeProps={textAnimation}>
				<StyledBody>{home.briefText.firstText}</StyledBody>
				<ContactMeButton onClick={e => delayRoute(`/contact-me`, history, 200)}>
					{home.buttonText}
				</ContactMeButton>
			</Animate>
		</Container>
	);
};

export default withRouter(InfoSection);
