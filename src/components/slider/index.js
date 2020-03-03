import React from "react";

import {
	Container,
	SlideLineContainer,
	Line,
	BackgroundScreenWrapper
} from "./style";
import MenuOptions from "../menu-options";
import AnimeWrapper from "../anime-wrapper";

import FloatingScreen from "../background-screen/floating-screen";

function Slider({ isActive, currentAnimation, onClick, applyMask }) {
	return (
		<AnimeWrapper animeProps={currentAnimation.slider}>
			<Container>
				<SlideLineContainer>
					<AnimeWrapper animeProps={currentAnimation.bottomLine}>
						<Line onClick={onClick} applyMask={applyMask} />
					</AnimeWrapper>
				</SlideLineContainer>
				<AnimeWrapper animeProps={currentAnimation.backgroundScreen}>
					<BackgroundScreenWrapper>
						<FloatingScreen />
					</BackgroundScreenWrapper>
				</AnimeWrapper>
				<MenuOptions
					isActive={isActive}
					currentAnimation={currentAnimation}
					onClick={onClick}
				/>
			</Container>
		</AnimeWrapper>
	);
}

export default Slider;
