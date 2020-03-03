import React, { useEffect, useRef } from "react";
import { Container } from "./style";
import { addSVG } from "./animation";

function SVGIcon({ name }) {
	const svgRef = useRef(null);

	useEffect(() => {
		if(svgRef.current)
		addSVG(name, svgRef.current);
	}, [name]);

	return <Container ref={svgRef}></Container>;
}

export default SVGIcon;
