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
import { HEADERAnimation, blinkAnimation } from "../../config/animation";
import WrapperLoader from "../loader";

function DefaultPage() {
	const { defaultPageData } = useContext(PortfolioContext);
	return (
		<WrapperLoader>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>Work in Progress</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={blinkAnimation}>
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
		</WrapperLoader>
	);
}

export default DefaultPage;
