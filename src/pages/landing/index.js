import React, { useRef, useEffect } from "react";

import {
	Container,
	ScrollDown,
	Line,
	BackgroundScreenWrapper,
	StyledSVG,
	TitleSection
} from "./style";

import InfoSection from "../../components/info-section";
import { animateSVG } from "../../config/animation/snap-animation";
import FloatingScreen from "../../components/background-screen/floating-screen";

const LandingPage = () => {
	const svgRef = useRef(null);
	useEffect(() => {
		if (svgRef.current) {
			animateSVG(svgRef.current);
		}
		return () => {};
	});
	return (
		<>
			<BackgroundScreenWrapper>
				<FloatingScreen withShadow={true} />
			</BackgroundScreenWrapper>
			<Container>
				<TitleSection>
					<StyledSVG ref={svgRef}></StyledSVG>
					<InfoSection />
				</TitleSection>
				<ScrollDown>
					<Line />
				</ScrollDown>
			</Container>
		</>
	);
};

export default LandingPage;
