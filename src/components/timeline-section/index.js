import React, { useRef, useEffect } from "react";
import {
	Container,
	TimelineHeader,
	TimelineFrame,
	HeaderText
} from "./style";
import { animateSVG } from "./animation";

const TimelineSection = () => {
	const svgRef = useRef(null);
	useEffect(() => {
		if (svgRef.current) {
			animateSVG(svgRef.current);
		}
		return () => {};
	});
	return (
		<Container>
			<TimelineHeader>
				<HeaderText>Timeline</HeaderText>
			</TimelineHeader>
			<TimelineFrame ref={svgRef}></TimelineFrame>
		</Container>
	);
};

export default TimelineSection;
