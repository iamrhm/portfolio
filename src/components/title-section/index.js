import React from "react";

import { Title, StyledPara, StyledTextSpan, BlankSpan } from "./style";

import Animate from "../animate-wrapper";
import { letterAnimation } from "../../config/animation";
import { MatrixBackground } from "../../assets/background-shapes/matrix-screen";

const TitleSection = ({}) => {
	const textHi = Array.prototype.map.call(`Hi,`, (char, index) => (
		<StyledTextSpan key={index}>
			{char !== " " ? char : <BlankSpan />}
		</StyledTextSpan>
	));

	const textImRahul = Array.prototype.map.call(`I'm Rahul,`, (char, index) => (
		<StyledTextSpan key={index}>
			{char !== " " ? char : <BlankSpan />}
		</StyledTextSpan>
	));

	const textAWebDeveloper = Array.prototype.map.call(
		`a Web Developer.`,
		(char, index) => (
			<StyledTextSpan key={index}>
				{char !== " " ? char : <BlankSpan />}
			</StyledTextSpan>
		)
	);

	return (
		// <Animate animeProps={letterAnimation}>
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
		// </Animate>
	);
};

export default TitleSection;
