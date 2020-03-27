import React from "react";

import { IconWrapper, Line } from "./style";
import AnimeWrapper from "../../anime-wrapper";

function MenuButton({
	isActive,
	currentAnimation,
	onClick,
	toggleMask,
	applyMask
}) {
	return (
		<IconWrapper
			onClick={onClick}
			onMouseEnter={toggleMask}
			onMouseLeave={toggleMask}
			onTouchStart={toggleMask}
			onTouchEnd={toggleMask}
			applyMask={applyMask}
		>
			<AnimeWrapper animeProps={currentAnimation.topLine}>
				<Line />
			</AnimeWrapper>
			<AnimeWrapper animeProps={currentAnimation.middleLine}>
				<Line />
			</AnimeWrapper>
		</IconWrapper>
	);
}

export default MenuButton;
