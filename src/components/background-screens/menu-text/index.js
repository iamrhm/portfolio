import React from "react";

import { BackgroundWrapper, StyledTextSpan, BackgroundScreen } from "./style";
import Animate from "../../animate-wrapper";

const MenuText = Array.prototype.map.call(`MENU`, (char, index) => (
	<StyledTextSpan key={index}>{char !== " " ? char : null}</StyledTextSpan>
));

function MenuTextScreen({ isActive, activeAnimation }) {
	return (
		<BackgroundScreen>
			<BackgroundWrapper>
				<Animate animeProps={activeAnimation.menuBackground}>
					{MenuText}
				</Animate>
			</BackgroundWrapper>
		</BackgroundScreen>
	);
}

export default MenuTextScreen;
