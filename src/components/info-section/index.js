import React from "react";

import { StyledBody, ContactMeButton } from "./style";

import Animate from "../animate-wrapper";
import { textAnimation } from "../../config/animation";

const InfoSection = () => {
	return (
		<Animate animeProps={textAnimation}>
			<StyledBody>
				Front End Developer, specialized in MERN stack. If your are looking for
				a front end developer or web designer, get in touch
			</StyledBody>
			<StyledBody>
				<ContactMeButton> Contact Me </ContactMeButton>
			</StyledBody>
			<StyledBody>
				iamRhM is my social alias. Work is still in progress, in the mean
				time you can find more about me,
			</StyledBody>
		</Animate>
	);
};

export default InfoSection;
