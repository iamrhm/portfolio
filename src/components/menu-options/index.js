import React from "react";

import {
	Container,
	Item,
	OptionItem,
	ListContainer,
	OptionIndex,
	OptionTitle,
	RubberLine
} from "./style";
import Animate from "../animate-wrapper";

import { getHarmonicDelay, getProgressiveDelay } from "../../config/animation";
import MenuTextScreen from "../background-screens/menu-text";

const MenuOptions = ({ isActive, activeAnimation, onClick }) => {
	const options = ["Home", "About", "My Work", "Skills", "Contact"];

	const list = options.map((title, index) => {
		let delay =
			activeAnimation === {}
				? () => {}
				: isActive
				? getHarmonicDelay(index, options.length, 300, 900)
				: getProgressiveDelay(index, 200);
		return (
			<Item key={index}>
				<Animate
					options={true}
					animeProps={{ ...activeAnimation.riseAnimation, delay: delay }}
				>
					<OptionItem>
						<OptionIndex>0{index}</OptionIndex>
						<RubberLine />
						<OptionTitle>{title}</OptionTitle>
					</OptionItem>
				</Animate>
			</Item>
		);
	});

	return (
		<Container>
			<MenuTextScreen isActive={isActive} activeAnimation={activeAnimation} />
			<ListContainer>{list}</ListContainer>
		</Container>
	);
};

export default MenuOptions;
