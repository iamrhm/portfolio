import React, { useReducer, useEffect } from "react";
import {
	Container,
	StyledText,
	DisplayTextContainer,
	StyledAnimatePara
} from "./style";

import Animate from "../../animate-wrapper";
import { TexTAnimation } from "../../../config/animation";

function getRandomTexT(displayTexTArray, currentTexT) {
	let randomIndex = Math.ceil(Math.random() * displayTexTArray.length - 1);

	return currentTexT !== displayTexTArray[randomIndex]
		? displayTexTArray[randomIndex]
		: displayTexTArray[(randomIndex + 1) % (displayTexTArray.length - 1)];
}

function reducer(state, action) {
	switch (action.type) {
		case "change-text":
			clearInterval();
			if (
				state.displayTexTArray !== undefined &&
				state.displayTexTArray.length > 0
			) {
				const { displayTexTArray, currentTexT } = state;
				return {
					...state,
					currentTexT: getRandomTexT(displayTexTArray, currentTexT),
					prevTexT: currentTexT
				};
			} else {
				return state;
			}
			break;
		default:
			return state;
			break;
	}
}

const DefaultText = "About Me";

const InitialState = {
	prevTexT: DefaultText,
	currentTexT: DefaultText
};

const TexTAnimationScreen = ({ TexTArray = [] }) => {
	const [state, dispatch] = useReducer(reducer, {
		...InitialState,
		displayTexTArray: TexTArray
	});

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: "change-text" });
		}, 3200);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<Container>
			<DisplayText {...state} />
		</Container>
	);
};

export default TexTAnimationScreen;

const DisplayText = ({ currentTexT }) => {
	return (
		<React.Fragment>
			<DisplayTextContainer>
				<StyledText>{`<`}</StyledText>
				{getAnimatedText(currentTexT)}
				<StyledText>{`>`}</StyledText>
			</DisplayTextContainer>
		</React.Fragment>
	);
};

function getAnimatedText(displayText) {
	return (
		<StyledAnimatePara>
			{Array.prototype.map.call(displayText, (letter, index) => (
				<Animate
					key={index}
					animeProps={[
						{
							...TexTAnimation.in,
							translateY: index % 2 === 0 ? ["-100%", "0%"] : ["100%", "0%"],
							delay: index * 50
						},
						{
							...TexTAnimation.out,
							translateY: index % 2 === 0 ? "100%" : "-100%",
							delay: 500 + index * 50
						}
					]}
				>
					<StyledText>{letter}</StyledText>
				</Animate>
			))}
		</StyledAnimatePara>
	);
}
