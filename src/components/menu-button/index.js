import React from "react";

import { IconWrapper, Line } from "./style";
import Animate from "../animate-wrapper";

function MenuButton({ isActive, currentAnimation, onClick, toggleMask, applyMask }) {
	return (
		<IconWrapper
			onClick={onClick}
			onMouseEnter={toggleMask}
			onMouseLeave={toggleMask}
			onTouchStart={toggleMask}
			onTouchEnd={toggleMask}
			applyMask={applyMask}
		>
			<Animate animeProps={currentAnimation.topLine}>
				<Line />
			</Animate>
			<Animate animeProps={currentAnimation.middleLine}>
				<Line />
			</Animate>
		</IconWrapper>
	);
}

export default MenuButton;
