import React from "react";

import {
	Container,
	BannerContainer,
	TitleContainer,
	InfoContainer,
	SocialInfoContainer,
	AuthorInfoContainer,
	IntroSection
} from "./style";

import BannerLogo from "../../components/banner-logo";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";
import SocialInfoSection from "../../components/social-info-section";
import ScreenOne from "../../components/background-screen";

const LandingPage = ({}) => {
	return (
		<React.Fragment>
			<ScreenOne />
			<Container>
				<IntroSection>
					<BannerContainer>
						<BannerLogo />
					</BannerContainer>
					<TitleContainer>
						<TitleSection />
					</TitleContainer>
				</IntroSection>
				<InfoContainer>
					<InfoSection />
				</InfoContainer>
				<SocialInfoContainer>
					<SocialInfoSection />
				</SocialInfoContainer>
				<AuthorInfoContainer></AuthorInfoContainer>
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;
