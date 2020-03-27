import React, { useContext } from "react";
import {
	Container,
	Heading,
	InfoSection,
	StyledPara,
	HeaderText,
	Row,
	StyledTag
} from "./style";
import { PortfolioContext } from "../../context";
import SocialInfoSection from "../social-icons";
import AnimeWrapper from "../anime-wrapper";
import { HEADERAnimation, blinkAnimation } from "./animation";

function DefaultPage() {
	const { defaultPageData } = useContext(PortfolioContext);
	return (
		<Container>
			<Heading>
				<AnimeWrapper animeProps={HEADERAnimation}>
					<HeaderText>Work in Progress</HeaderText>
				</AnimeWrapper>
			</Heading>
			<AnimeWrapper animeProps={blinkAnimation}>
				<InfoSection>
					<StyledPara>{defaultPageData.firstText}</StyledPara>
				</InfoSection>
				<Row>
					<SocialInfoSection />
				</Row>
				<StyledPara>{defaultPageData.secondText}</StyledPara>
				<StyledTag>{defaultPageData.myEmail}</StyledTag>
				<StyledPara>{"     "}</StyledPara>
				<StyledPara>
					{defaultPageData.thirdText}
					{"        "}
					<StyledTag>
						<a href="https://jacekjeznach.com/">
							{defaultPageData.inspiration}
						</a>
					</StyledTag>
					{"       "}
					{defaultPageData.fourthText}
				</StyledPara>
			</AnimeWrapper>
		</Container>
	);
}

export default DefaultPage;
