import React from "react";

import { Container, SlideLineContainer, Line } from "./style";
import MenuOptions from "../menu-options";
import Animate from "../animate-wrapper";

function Slider({ isActive, activeAnimation, onClick }) {
	return (
		<Animate animeProps={activeAnimation.slider}>
			<Container>
				<SlideLineContainer>
					<Animate animeProps={activeAnimation.bottomLine}>
						<Line onClick={onClick} />
					</Animate>
				</SlideLineContainer>
				<MenuOptions
					isActive={isActive}
					activeAnimation={activeAnimation}
					onClick={onClick}
				/>
			</Container>
		</Animate>
	);
}

export default Slider;
