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
import SocialInfoSection from "../social-info-section";
import Animate from "../animate-wrapper";
import { HEADERAnimation, bulbAnimation } from "../../config/animation";

function DefaultPage() {
	const { defaultPageData } = useContext(PortfolioContext);
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
						<StyledPara>{defaultPageData.firstText}</StyledPara>
					</InfoSection>
					<Row>
						<SocialInfoSection />
					</Row>
					<StyledPara>
						{defaultPageData.secondText}
						{"        "}
						<StyledTag>{defaultPageData.myEmail}</StyledTag>
					</StyledPara>
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
				</Animate>
			</Container>
		</React.Fragment>
	);
}

export default DefaultPage;
