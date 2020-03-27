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
	SocialContainer,
	PortfolioBanner,
	PortfolioText
} from "./style";
import { textAnimation } from "./animation";

import { PortfolioContext } from "../../context";

import FloatingScreen from "../../components/dummies/background-screen/floating";
import AnimeWrapper from "../../components/anime-wrapper";
import TitleSection from "../../components/title-section";
import GrowLine from "../../components/dummies/grow-line";
import SocialInfoSection from "../../components/social-icons";

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
				<PortfolioBanner>
					<AnimeWrapper animeProps={textAnimation}>
						<PortfolioText>Portfolio</PortfolioText>
					</AnimeWrapper>
				</PortfolioBanner>
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
				<GrowLine delay={1.5} duration={1.2} />
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
