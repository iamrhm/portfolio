import React, { useContext } from "react";

import { StyledBody, ContactMeButton, Container } from "./style";
import { Link } from "react-router-dom";
import Animate from "../animate-wrapper";
import { textAnimation } from "../../config/animation";
import { PortfolioContext } from "../../context";

const InfoSection = () => {
	const { home } = useContext(PortfolioContext);
	return (
		<Container>
			<Animate animeProps={textAnimation}>
				<StyledBody>{home.briefText.firstText}</StyledBody>
				<ContactMeButton>
					<Link to={{ pathname: `/contact-me` }}>{home.buttonText}</Link>
				</ContactMeButton>
			</Animate>
		</Container>
	);
};

export default InfoSection;
