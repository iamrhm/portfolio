import React from "react";

import { Title } from "./style";
import LandingSVG from "../../assets/logos/landing.svg";

const TitleSection = () => {
	return (
		<Title>
			<object type="image/svg+xml" data={LandingSVG}>
				svg-animation
			</object>
		</Title>
	);
};

export default TitleSection;
