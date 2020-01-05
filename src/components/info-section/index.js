import React from "react";

import { StyledBody, ContactMeButton, StrongText, Container } from "./style";

import Animate from "../animate-wrapper";
import { textAnimation } from "../../config/animation";

const InfoSection = () => {
	return (
		<Container>
			<Animate animeProps={textAnimation}>
				<StyledBody>
					Front End Developer, specialized in MERN stack. If your are looking
					for a front end developer or web designer, get in touch
				</StyledBody>
				<ContactMeButton> Contact Me </ContactMeButton>
			</Animate>
		</Container>
	);
};

export default InfoSection;
