import React, { useRef, useContext, useEffect } from "react";

import {
	Container,
	ScrollDown,
	Line,
	BackgroundScreenWrapper,
	StyledSVG,
	TitleSection,
	InfoWrapper,
	RubberLine,
	InfoContainer,
	StyledPara,
	StyledSpan,
	GrowingLine
} from "./style";

import { animateSVG, textAnimation } from "./animation";
import { PortfolioContext } from "../../context";

import FloatingScreen from "../../components/background-screen/floating-screen";
import AnimeWrapper from "../../components/anime-wrapper";

const LandingPage = () => {
	const svgRef = useRef(null);
	useEffect(() => {
		if (svgRef.current) {
			animateSVG(svgRef.current);
		}
		return () => {};
	});
	return (
		<>
			<BackgroundScreenWrapper>
				<FloatingScreen withShadow={true} />
			</BackgroundScreenWrapper>
			<Container>
				<TitleSection>
					<StyledSVG ref={svgRef}></StyledSVG>
					<InfoSection />
				</TitleSection>
				<ScrollDown>
					<Line />
				</ScrollDown>
			</Container>
		</>
	);
};

export default LandingPage;

const InfoSection = () => {
	const { home } = useContext(PortfolioContext);
	return (
		<InfoWrapper>
			<RubberLine>
				<GrowingLine />
			</RubberLine>
			<AnimeWrapper animeProps={textAnimation}>
				<InfoContainer>
					<StyledPara>
						{home.introText.firstText}
						<StyledSpan>{home.introText.secondText}</StyledSpan>
					</StyledPara>
				</InfoContainer>
			</AnimeWrapper>
		</InfoWrapper>
	);
};
