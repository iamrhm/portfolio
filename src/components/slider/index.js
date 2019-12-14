import React, { useReducer } from "react";

import { Container, SlideLineContainer, Line, MenuContainer } from "./style";
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
				{/* <MenuContainer /> */}
			</Container>
		</Animate>
	);
}

export default Slider;
