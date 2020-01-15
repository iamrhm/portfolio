import React, { useContext } from "react";

import { PortfolioContext } from "../../context";
import {
	Container,
	Heading,
	InfoSection,
	StyledPara,
	HeaderText,
	TimelineSection,
	TimelineHeader,
	TimelineImageFrame,
	BackgroundScreen
} from "./style";

import TimelineImage from "../../assets/images/timeline.png";
import Animate from "../../components/animate-wrapper";
import { HEADERAnimation, blinkAnimation } from "../../config/animation";

import WrapperLoader from "../../components/loader";
import TexTAnimationScreen from "../../components/background-screen/text-animation";

function AboutPage() {
	const { about } = useContext(PortfolioContext);
	return (
		<WrapperLoader>
			<BackgroundScreen>
				<TexTAnimationScreen TexTArray={about.aboutMeArray}/>
			</BackgroundScreen>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>About me</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={blinkAnimation}>
					<InfoSection>
						<StyledPara>{about.firstText}</StyledPara>
						<StyledPara>{about.secondText}</StyledPara>
						<StyledPara>{about.thirdText} </StyledPara>
					</InfoSection>
					<TimelineSection>
						<TimelineHeader>Timeline</TimelineHeader>
						<TimelineImageFrame src={TimelineImage}></TimelineImageFrame>
					</TimelineSection>
				</Animate>
			</Container>
		</WrapperLoader>
	);
}

export default AboutPage;
