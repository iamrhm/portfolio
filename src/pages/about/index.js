import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import { Container, Header, InfoSection, HeaderText, Wrapper } from "./style";

import AnimeWrapper from "../../components/anime-wrapper";
import {
	HEADERAnimation,
	AboutMeLandingAnimation,
	blinkAnimation,
	HeaderAnimations
} from "../../config/animation";

import FloatingScreen from "../../components/background-screen/floating-screen";
import Card from "../../components/info-section";
import RepeatingScreen from "../../components/background-screen/repeating-screen";
import aboutMeSVG from "../../assets/svg/about-me/about-me.svg";
import { maskAboutMeSVG } from "./animation";

function AboutPage() {
	return (		
		<Wrapper>
			<AnimeWrapper animeProps={HeaderAnimations}>
				<Header>
					<FloatingScreen withShadow={true}>
						{/* <AnimeWrapper animeProps={HEADERAnimation}>
							<HeaderText>About</HeaderText>
						</AnimeWrapper> */}
						<RepeatingScreen
							svgLayer={aboutMeSVG}
							getMaskLayer={maskAboutMeSVG}
						/>
						<RepeatingScreen />
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
