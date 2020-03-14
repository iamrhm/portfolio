import React, { useContext } from "react";

import {
	Wrapper,
	Container,
	TitleContainer,
	InfoWrapper,
	InfoContainer,
	StyledPara,
	StyledSpan,
	LineContainer,
	SocialContainer
} from "./style";
import { textAnimation } from "./animation";

import { PortfolioContext } from "../../context";

import FloatingScreen from "../../components/background-screen/floating-screen";
import AnimeWrapper from "../../components/anime-wrapper";
import TitleSection from "../../components/title-section";
import Line from "../../components/growing-line";
import SocialInfoSection from "../../components/social-info-section";

const LandingPage = () => {
	return (
		<>
			<Wrapper>
				<FloatingScreen withShadow={true} shadowDelay={2.5}>
					<Container>
						<TitleContainer>
							<TitleSection />
							<InfoSection />
						</TitleContainer>
					</Container>
				</FloatingScreen>
			</Wrapper>
			<Container>
				<SocialContainer>
					<SocialInfoSection />
				</SocialContainer>
			</Container>
		</>
	);
};

export default LandingPage;

const InfoSection = () => {
	const { home } = useContext(PortfolioContext);
	return (
		<InfoWrapper>
			<LineContainer>
				<Line delay={1.5} duration={1.2} />
			</LineContainer>
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
