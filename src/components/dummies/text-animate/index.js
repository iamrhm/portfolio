import React from "react";
import {
	StyledText,
	DisplayTextContainer,
	StyledAnimatePara,
	StyledLine
} from "./style";

import AnimeWrapper from "../../anime-wrapper";
import { TexTAnimation, MoveLine } from "./animation";

const TexTAnimate = ({ TexTArray, isVisible }) => {
	const YTranslate = window.innerWidth <= 767 ? "16px" : "24px";
	return (
		<DisplayTextContainer>
			<AnimeWrapper
				animeProps={
					isVisible
						? [
								{ ...MoveLine.first },
								{
									...MoveLine.second,
									translateY: `-${YTranslate}`
								}
						  ]
						: {}
				}
			>
				<StyledLine />
			</AnimeWrapper>
			{getAnimatedText(TexTArray, isVisible)}
			<AnimeWrapper
				animeProps={
					isVisible
						? [
								{ ...MoveLine.first },
								{
									...MoveLine.second,
									translateY: `${YTranslate}`
								}
						  ]
						: {}
				}
			>
				<StyledLine />
			</AnimeWrapper>
		</DisplayTextContainer>
	);
};

export default TexTAnimate;

function getAnimatedText(displayText, isVisible) {
	return (
		<StyledAnimatePara>
			{Array.prototype.map.call(displayText, (letter, index) => (
				<AnimeWrapper
					key={index}
					animeProps={
						isVisible
							? [
									{
										...TexTAnimation.in,
										translateY:
											index % 2 === 0 ? ["-200%", "0%"] : ["200%", "0%"],
										delay: index * 50 + 1200
									}
							  ]
							: {}
					}
				>
					<StyledText>{letter}</StyledText>
				</AnimeWrapper>
			))}
		</StyledAnimatePara>
	);
}
