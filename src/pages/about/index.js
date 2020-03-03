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
import BackgroundLayer from "../../components/background-screen/background-layer";
import Card from "../../components/info-section";

function AboutPage() {
	return (
		<Wrapper>
			<AnimeWrapper animeProps={HeaderAnimations}>
				<Header>
					<AnimeWrapper animeProps={HEADERAnimation}>
						<HeaderText>About</HeaderText>
					</AnimeWrapper>
					<FloatingScreen withShadow={true} />
				</Header>
			</AnimeWrapper>

			<AnimeWrapper animeProps={AboutMeLandingAnimation}>
				<Container>
					<FloatingScreen withShadow={false} type={"secondary"} />
					<BackgroundLayer />
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
