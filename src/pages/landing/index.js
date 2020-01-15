import React from "react";

import { Container, BannerContainer, TitleContainer } from "./style";

import BannerLogo from "../../components/banner";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";

const LandingPage = () => {
	return (
		<React.Fragment>
			<BannerContainer>
				<BannerLogo />
			</BannerContainer>
			<Container>
				<TitleContainer>
					<TitleSection />
				</TitleContainer>
				<InfoSection />
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;
