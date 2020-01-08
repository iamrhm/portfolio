import React, { useContext } from "react";

import { Title, StyledPara, StyledTextSpan, BlankSpan } from "./style";

import Animate from "../animate-wrapper";
import { letterAnimation } from "../../config/animation";
import { PortfolioContext } from "../../context";

const TitleSection = () => {
	const { home } = useContext(PortfolioContext);

	const textHi = Array.prototype.map.call(
		home.introText.firstText,
		(char, index) => (
			<StyledTextSpan key={index}>
				{char !== " " ? char : <BlankSpan />}
			</StyledTextSpan>
		)
	);

	const textImRahul = Array.prototype.map.call(
		home.introText.secondText,
		(char, index) => (
			<StyledTextSpan key={index}>
				{char !== " " ? char : <BlankSpan />}
			</StyledTextSpan>
		)
	);

	const textAWebDeveloper = Array.prototype.map.call(
		home.introText.thirdText,
		(char, index) => (
			<StyledTextSpan key={index}>
				{char !== " " ? char : <BlankSpan />}
			</StyledTextSpan>
		)
	);

	return (
		<Title>
			<StyledPara>
				<Animate animeProps={letterAnimation}>{textHi}</Animate>
			</StyledPara>
			<StyledPara>
				<Animate animeProps={letterAnimation}>{textImRahul}</Animate>
			</StyledPara>
			<StyledPara>
				<Animate animeProps={letterAnimation}>{textAWebDeveloper}</Animate>
			</StyledPara>
		</Title>
	);
};

export default TitleSection;
