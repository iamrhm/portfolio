import React, { useContext } from "react";

import {
	StyledSpan,
	Container,
	RubberLine,
	Line,
	InfoContainer,
	StyledPara
} from "./style";
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
				<InfoContainer>
					<StyledPara>
						{home.briefText.firstText}
						<StyledSpan>{home.briefText.secondText}</StyledSpan>
					</StyledPara>
				</InfoContainer>
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
