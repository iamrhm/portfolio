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

function DefaultPage() {
	return (
		<React.Fragment>
			<Container>
				<Heading>
					<HeaderText>Work in Progress</HeaderText>
				</Heading>
				<InfoSection>
					<StyledPara>Thanks for your interest,</StyledPara>
					<StyledPara>
						Come back once the page is ready. Mean while you can also get
						connected with me,
					</StyledPara>
				</InfoSection>
				<Row>
					<SocialInfoSection />
				</Row>
				<StyledPara>
					If you have ideas and looking for developer designer, send a note,
				</StyledPara>
				<StyledTag>rahulmitra980@gmail.com</StyledTag>
				<StyledPara>
					This site is designed from different design ideas from dribble and a
					great thanks to{"        "}
					<StyledTag>
						<a href="https://jacekjeznach.com/">Jack</a>
					</StyledTag>
					{"       "}
					for inspiration and major design idea help.
				</StyledPara>
			</Container>
		</React.Fragment>
	);
}

export default DefaultPage;
