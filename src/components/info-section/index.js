import React, { useContext } from "react";

import { StyledBody, Container, RubberLine, Line } from "./style";
import { withRouter } from "react-router-dom";

import Animate from "../animate-wrapper";
import { textAnimation, delayRoute } from "../../config/animation";
import { PortfolioContext } from "../../context";

const InfoSection = ({ history }) => {
	const { home } = useContext(PortfolioContext);
	return (
		<Container>
			{/* <RubberLine /> */}
			<RubberLine>
				<Line />
			</RubberLine>
			<Animate animeProps={textAnimation}>
				<StyledBody>{home.briefText.firstText}</StyledBody>
			</Animate>
		</Container>
	);
};

export default withRouter(InfoSection);

{
	/* <ContactMeButton onClick={e => delayRoute(`/contact-me`, history, 200)}>
					{home.buttonText}
				</ContactMeButton> */
}
