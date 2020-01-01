import React from "react";
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
import AvatorScreen from "../../components/background-screens/avator-background";

import TimelineImage from "../../assets/images/timeline.png";

function AboutPage() {
	return (
		<React.Fragment>
			<AvatorScreen />
			<Container>
				<Heading>
					<HeaderText>About me</HeaderText>
				</Heading>
				<InfoSection>
					<StyledPara>
						Currently working as a full time front end developer in Cognizant
						Technology Solution.
					</StyledPara>
					<StyledPara>
						A design-based web developer who like to make Web a beautiful place. An
						ambitious guy, highly interested in Physics and also fan
						of TV series and ancient histories.
					</StyledPara>
					<StyledPara>
						Interested in the entire frontend spectrum and working on different
						projects.
					</StyledPara>
				</InfoSection>
				<TimelineSection>
					<TimelineHeader>Timeline</TimelineHeader>
					<TimelineImageFrame src={TimelineImage}></TimelineImageFrame>
				</TimelineSection>
			</Container>
		</React.Fragment>
	);
}

export default AboutPage;
