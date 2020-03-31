import React, { useRef, useEffect, useState } from "react";
import { Container, TimelineFrame } from "./style";
import { animateSVG } from "./animation";

import useIntersectionApi from "../../../hooks/useIntersectionApi";

const TimelineSection = () => {
	const svgRef = useRef(null);
	const timelineContainer = useRef(null);
	const [isVisible, setVisible] = useState(false);

	useIntersectionApi(timelineContainer, () => setVisible(!isVisible));

	useEffect(() => {
		if (svgRef.current) {
			animateSVG(svgRef.current, isVisible);
		}
		return () => {};
	}, [isVisible]);

	return (
		<Container ref={timelineContainer}>
			<TimelineFrame ref={svgRef}></TimelineFrame>
		</Container>
	);
};

export default TimelineSection;
