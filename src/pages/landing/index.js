import React from "react";

import {
	Container,
	BannerContainer,
	TitleContainer,
	InfoContainer,
	SocialInfoContainer,
	IntroContainer,
	FooterContainer
} from "./style";

import BannerLogo from "../../components/banner-logo";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";
import SocialInfoSection from "../../components/social-info-section";

const LandingPage = ({}) => {
	return (
		<React.Fragment>
			<Container>
				<IntroContainer>
					<BannerContainer>
						<BannerLogo />
					</BannerContainer>
					<TitleContainer>
						<TitleSection />
					</TitleContainer>
				</IntroContainer>
				<InfoContainer>
					<InfoSection />
				</InfoContainer>
				<SocialInfoContainer>
					<SocialInfoSection />
				</SocialInfoContainer>
			</Container>
			<FooterContainer />
		</React.Fragment>
	);
};

export default LandingPage;
