import React from "react";

import { StyledBody, ContactMeButton,StrongText } from "./style";

import Animate from "../animate-wrapper";
import { textAnimation } from "../../config/animation";

const InfoSection = () => {
	return (
		<Animate animeProps={textAnimation}>
			<StyledBody>
				Front End Developer, specialized in MERN stack. If your are looking for
				a front end developer or web designer, get in touch
			</StyledBody>
			<ContactMeButton> Contact Me </ContactMeButton>
			<StyledBody>
				<StrongText>iamRhM</StrongText> is my social alias. A web developer based in
				India. You can also find me on,
			</StyledBody>
		</Animate>
	);
};

export default InfoSection;
