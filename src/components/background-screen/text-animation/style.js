import styled from "styled-components";

import { secondTextColor } from "../../../config/style"

export const DisplayTextContainer = styled.span`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledAnimatePara = styled.span`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledText = styled.span`
	font-size: 28px;
	padding: 0 1%;
	text-transform: uppercase;
	color: ${secondTextColor};
`;

export const StyledLine = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	height: 1px;
	width: 100%;
	background-color: ${secondTextColor};
	transform-origin: 0.5 0;
`;
