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

import { Link } from "react-router-dom";

import { getHarmonicDelay, getProgressiveDelay } from "../../config/animation";
import MenuTextScreen from "../background-screens/menu-text";

const MenuOptions = ({ isActive, activeAnimation, onClick }) => {
	const options = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "My Work", path: "/work-on-progress" },
		{ name: "Skills", path: "/skill" },
		{ name: "Contact", path: "/work-on-progress" }
	];

	const list = options.map((option, index) => {
		let delay =
			activeAnimation === {}
				? () => {}
				: isActive
				? getHarmonicDelay(index, options.length, 300, 900)
				: getProgressiveDelay(index, 200);
		return (
			<Item key={index}>
				<Link to={{ pathname: `${option.path}` }}>
					<Animate
						options={true}
						animeProps={{ ...activeAnimation.riseAnimation, delay: delay }}
					>
						<OptionItem>
							<OptionIndex>0{index}</OptionIndex>
							<RubberLine />
							<OptionTitle>{option.name}</OptionTitle>
						</OptionItem>
					</Animate>
				</Link>
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
