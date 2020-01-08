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
	TimelineImageFrame
} from "./style";

import TimelineImage from "../../assets/images/timeline.png";
import Animate from "../../components/animate-wrapper";
import { HEADERAnimation, bulbAnimation } from "../../config/animation";

function AboutPage() {
	const { about } = useContext(PortfolioContext);
	return (
		<React.Fragment>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>About me</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={bulbAnimation}>
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
		</React.Fragment>
	);
}

export default AboutPage;
