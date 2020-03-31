import styled, { keyframes } from "styled-components";
import { firstTextColor } from "../../../config/style";

const grow = keyframes`
	0%{
		transform: scaleX(0);
	}
	100%{
		transform: scaleX(1);
	}
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: transparent;
	pointer-events: visiblePainted;
`;

export const Line = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 1px;
	:after,
	:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${firstTextColor};
		transform-origin: 100% 50%;
		transform: scaleX(0);
		animation: ${grow} ${props => (props.duration ? props.duration + "s" : "1.5s")}
			${props => (props.delay ? props.delay + "s" : "2s")} forwards;
	}
`;
