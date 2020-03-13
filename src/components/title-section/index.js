import React from "react";
import { Container } from "./style";
import RepeatingScreen from "../background-screen/repeating-screen";
import landingSvg from "../../assets/svg/landing/landing.svg";
import { maskLandingSVG } from "./animation";

const TitleSection = () => {
	return (
		<Container>
			<RepeatingScreen svgLayer={landingSvg} getMaskLayer={maskLandingSVG} />
		</Container>
	);
};

export default TitleSection;
