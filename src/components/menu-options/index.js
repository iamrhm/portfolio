import React from "react";

import { Container, Item, Title } from "./style";
import Animate from "../animate-wrapper";

import { getHarmonicDelay, getProgressiveDelay } from "../../config/animation";

const MenuOptions = ({ isActive, activeAnimation, onClick }) => {
	const options = ["About", "Projects", "Blogs"];

	const list = options.map((title, index) => {
		let delay =
			activeAnimation === {}
				? () => {}
				: isActive
				? getHarmonicDelay(index, options.length, 300, 700)
				: getProgressiveDelay(index, 200);
		return (
			<Item key={index}>
				<Animate
					options={true}
					animeProps={{ ...activeAnimation.riseAnimation, delay: delay }}
				>
					<Title>{title}</Title>
				</Animate>
			</Item>
		);
	});

	return <Container>{list}</Container>;
};

export default MenuOptions;
