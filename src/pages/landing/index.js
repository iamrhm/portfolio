import React from "react";

import {
	Container,
	BannerContainer,
	TitleContainer,
	WrapperIntro,
	ScrollDown,
	Line
} from "./style";

import BannerLogo from "../../components/banner";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";

const LandingPage = () => {
	return (
		<React.Fragment>
			{/* <BannerContainer>
				<BannerLogo />
			</BannerContainer> */}
			<Container>
				<WrapperIntro>
					<TitleContainer>
						<TitleSection />
					</TitleContainer>
					<InfoSection />
				</WrapperIntro>
				<ScrollDown>
					<Line />
				</ScrollDown>
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;

{
	/* <BannerContainer>
				<BannerLogo />
			</BannerContainer> */
}
