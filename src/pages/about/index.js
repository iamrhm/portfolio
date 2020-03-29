import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import { Container, Header, InfoSection, Wrapper } from "./style";

import Card from "../../components/info-cards";

import AnimeWrapper from "../../components/anime-wrapper";
import {
	AboutMeLandingAnimation,
	blinkAnimation,
	HeaderAnimations
} from "./animation";

import aboutMeSVG from "../../assets/svg/about-me/about-me.svg";
import { maskAboutMeSVG } from "./animation";
import FloatingScreen from "../../components/dummies/background-screen/floating";
import RepeatingScreen from "../../components/dummies/background-screen/repeating";

function AboutPage() {
	return (
		<Wrapper>
			<AnimeWrapper animeProps={HeaderAnimations}>
				<Header>
					<FloatingScreen withShadow={true}>
						<RepeatingScreen
							svgLayer={aboutMeSVG}
							getMaskLayer={maskAboutMeSVG}
						/>
					</FloatingScreen>
				</Header>
			</AnimeWrapper>
			<AnimeWrapper animeProps={AboutMeLandingAnimation}>
				<Container>
					<FloatingScreen withShadow={false} type={"secondary"} />
					<AnimeWrapper animeProps={blinkAnimation}>
						<InfoSection>
							<DisplayCard />
						</InfoSection>
					</AnimeWrapper>
				</Container>
			</AnimeWrapper>
		</Wrapper>
	);
}

export default AboutPage;

const DisplayCard = () => {
	const { about } = useContext(PortfolioContext);
	const List = about.map((data, index) => {
		return (
			<Card
				key={index}
				preTitle={data.preTitle}
				title={data.title}
				subtitle={data.subtitle}
				index={index}
			/>
		);
	});
	return List;
};
