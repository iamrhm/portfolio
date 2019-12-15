import React from "react";

import { BackgroundWrapper, StyledTextSpan, BlankSpan } from "./style";
import Animate from "../../animate-wrapper";

const MenuText = Array.prototype.map.call(`M E N U`, (char, index) => (
	<StyledTextSpan key={index}>
		{char !== " " ? char : <BlankSpan />}
	</StyledTextSpan>
));

function ScreenTwo({ isActive, activeAnimation }) {
	return (
		<BackgroundWrapper>
			<Animate animeProps={activeAnimation.menuBackground}>{MenuText}</Animate>
		</BackgroundWrapper>
	);
}

export default ScreenTwo;
