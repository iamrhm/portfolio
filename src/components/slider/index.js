import React from "react";

import {
	Container,
	SlideLineContainer,
	Line,
	BackgroundScreenWrapper
} from "./style";
import MenuOptions from "../menu-options";
import Animate from "../animate-wrapper";

function Slider({ isActive, currentAnimation, onClick, applyMask }) {
	return (
		<Animate animeProps={currentAnimation.slider}>
			<Container>
				<SlideLineContainer>
					<Animate animeProps={currentAnimation.bottomLine}>
						<Line onClick={onClick} applyMask={applyMask} />
					</Animate>
				</SlideLineContainer>
				<Animate animeProps={currentAnimation.backgroundScreen}>
					<BackgroundScreenWrapper />
				</Animate>
				<MenuOptions
					isActive={isActive}
					currentAnimation={currentAnimation}
					onClick={onClick}
				/>
			</Container>
		</Animate>
	);
}

export default Slider;
