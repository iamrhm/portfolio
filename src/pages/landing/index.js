import React, { useContext } from "react";

import {
	Container,
	TitleContainer,
	WrapperIntro,
	ScrollDown,
	Line,
	InfoSection,
	InfoContainer,
	StyledPara,
	StyledSpan
} from "./style";

import TitleSection from "../../components/title-section";
import Animate from "../../components/animate-wrapper";
import { PortfolioContext } from "../../context";
import { riseUp } from "../../config/animation";

const LandingPage = () => {
	const { home } = useContext(PortfolioContext);
	return (
		<Container>
			<WrapperIntro>
				<TitleContainer>
					<TitleSection />
				</TitleContainer>
				<InfoSection>
					<Animate animeProps={riseUp}>
						<InfoContainer>
							<StyledPara>
								{home.briefText.firstText}
								<StyledSpan>{home.briefText.secondText}</StyledSpan>
							</StyledPara>
						</InfoContainer>
					</Animate>
				</InfoSection>
			</WrapperIntro>
			<ScrollDown>
				<Line />
			</ScrollDown>
		</Container>
	);
};

export default LandingPage;
