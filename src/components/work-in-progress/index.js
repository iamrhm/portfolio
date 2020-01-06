import React from "react";
import {
	Container,
	Heading,
	InfoSection,
	StyledPara,
	HeaderText,
	Row,
	StyledTag
} from "./style";

import SocialInfoSection from "../social-info-section";
import Animate from "../animate-wrapper";
import { HEADERAnimation, bulbAnimation } from "../../config/animation";

function DefaultPage() {
	return (
		<React.Fragment>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>Work in Progress</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={bulbAnimation}>
					<InfoSection>
						<StyledPara>
							Thanks for your interest, come back once the page is ready.
							Meanwhile you can also get connected with me,
						</StyledPara>
					</InfoSection>
					<Row>
						<SocialInfoSection />
					</Row>
					<StyledPara>
						If you have ideas and looking for developer designer, send a note,{"        "}
						<StyledTag>rahulmitra980@gmail.com</StyledTag>
					</StyledPara>
					<StyledPara>
						This site is designed from different design ideas from dribble and a
						great thanks to{"        "}
						<StyledTag>
							<a href="https://jacekjeznach.com/">Jack</a>
						</StyledTag>
						{"       "}
						for inspiration and major design idea help.
					</StyledPara>
				</Animate>
			</Container>
		</React.Fragment>
	);
}

export default DefaultPage;
