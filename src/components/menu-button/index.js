import React from "react";

import { IconWrapper, Line } from "./style";
import Animate from "../animate-wrapper";

function MenuButton({ isActive, activeAnimation, onClick }) {
	return (
		<IconWrapper onClick={onClick}>
			<Animate animeProps={activeAnimation.topLine}>
				<Line />
			</Animate>
			<Animate animeProps={activeAnimation.middleLine}>
				<Line />
			</Animate>
		</IconWrapper>
	);
}

export default MenuButton;
