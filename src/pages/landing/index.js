import React from "react";

import Header from "../../components/header";

import {
	Container,
	BannerContainer,
	TitleContainer,
	InfoContainer,
	SocialInfoContainer,
	AuthorInfoContainer
} from "./style";

import BannerLogo from "../../components/banner-logo";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";
import SocialInfoSection from "../../components/social-info-section";

const LandingPage = ({}) => {
	return (
		<Container>
			<BannerContainer>
				<BannerLogo />
			</BannerContainer>
			<TitleContainer>
				<TitleSection />
			</TitleContainer>
			<InfoContainer>
				<InfoSection />
			</InfoContainer>
			<SocialInfoContainer>
				<SocialInfoSection />
			</SocialInfoContainer>
			<AuthorInfoContainer></AuthorInfoContainer>
		</Container>
	);
};

export default LandingPage;
