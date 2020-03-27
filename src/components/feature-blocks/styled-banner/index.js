import React, { useRef, useEffect, useState } from "react";

import { Container, IconBanner, HeaderText } from "./style";
import { animateBanner } from "./animation";
import useIntersectionApi from "../../../hooks/useIntersectionApi";

export default function StyledBanner() {
	const bannerRef = useRef(null);
	const logoRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);

	useIntersectionApi(logoRef, () => setVisibility(!isVisible));

	useEffect(() => {
		if (logoRef.current) {
			animateBanner(logoRef.current, isVisible);
		}
	}, [isVisible]);

	return (
		<Container ref={bannerRef}>
			<IconBanner ref={logoRef} />
			<HeaderText isVisible={isVisible}>Dev-Stack</HeaderText>
		</Container>
	);
}
