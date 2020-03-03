import React, { useContext } from "react";

import { Title, StyledPara, StyledTextSpan, BlankSpan } from "./style";

import AnimeWrapper from "../anime-wrapper";
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
				<AnimeWrapper animeProps={letterAnimation}>{textHi}</AnimeWrapper>
			</StyledPara>
			<StyledPara>
				<AnimeWrapper animeProps={letterAnimation}>{textImRahul}</AnimeWrapper>
			</StyledPara>
			<StyledPara>
				<AnimeWrapper animeProps={letterAnimation}>
					{textAWebDeveloper}
				</AnimeWrapper>
			</StyledPara>
		</Title>
	);
};

export default TitleSection;

// const TextAnimation = ({ message }) => {
//   const textArray = Array.prototype.map.call(message, function(char) {
//     if (char === "") return " ";
//     return char;
//   });

//   const randomIndex = Math.floor(Math.random() * (textArray.length - 2) + 1);

//   for (let i = 0; i < textArray.length; i++) {
//     if (randomIndex + i === randomIndex || randomIndex - i === randomIndex) {
//       textArray[randomIndex + i] = (
//         <AnimeWrapper animeProps={AnimationStyle.active} key={randomIndex}>
//           <StyledChar> {textArray[randomIndex + i]} </StyledChar>
//         </AnimeWrapper>
//       );
//     } else {
//       if (randomIndex + i < textArray.length) {
//         textArray[randomIndex + i] = (
//           <AnimeWrapper
//             animeProps={{
//               ...AnimationStyle.right,
//               delay: 800 + Math.abs(i) * 100
//             }}
//             key={randomIndex + i}
//           >
//             <StyledChar>{textArray[randomIndex + i]}</StyledChar>
//           </AnimeWrapper>
//         );
//       }
//       if (randomIndex - i > -1) {
//         textArray[randomIndex - i] = (
//           <AnimeWrapper
//             animeProps={{
//               ...AnimationStyle.left,
//               delay: 800 + Math.abs(i) * 100
//             }}
//             key={randomIndex - i}
//           >
//             <StyledChar>{textArray[randomIndex - i]}</StyledChar>
//           </AnimeWrapper>
//         );
//       }
//     }
//   }

//   return <CharContainer>{textArray}</CharContainer>;
// };
