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
import AnimeWrapper from "../../anime-wrapper";

import { withRouter } from "react-router-dom";

import {
	getHarmonicDelay,
	getProgressiveDelay,
	delayRoute
} from "../animation";

const MenuOptions = ({ isActive, currentAnimation, onClick, history }) => {
	const options = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact-me" },
		{ name: "Projects", path: "/project" }
	];

	const list = options.map((option, index) => {
		let delay =
			currentAnimation === {}
				? () => {}
				: isActive
				? getHarmonicDelay(index, options.length, 300, 900)
				: getProgressiveDelay(index, 200);

		return (
			<Item
				key={index}
				onClick={e => delayRoute(`${option.path}`, history, 300)}
			>
				<AnimeWrapper
					options={true}
					animeProps={{ ...currentAnimation.riseAnimation, delay: delay }}
				>
					<OptionItem>
						<OptionIndex>0{index}</OptionIndex>
						<RubberLine />
						<OptionTitle>{option.name}</OptionTitle>
					</OptionItem>
				</AnimeWrapper>
			</Item>
		);
	});

	return (
		<Container>
			<ListContainer>{list}</ListContainer>
		</Container>
	);
};

export default withRouter(MenuOptions);
