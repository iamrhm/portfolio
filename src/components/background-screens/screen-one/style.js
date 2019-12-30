import styled from "styled-components";

import {
	primaryBackgroundColor,
	MenuTextColor
} from "../../../config/color-platte";

export const BackgroundScreen = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background: ${primaryBackgroundColor};

	min-height: inherit;
	display: flex;
	justify-content: space-evenly;
`;

export const Line = styled.span`
	width: 1px;
	height: 100%;
	background: ${MenuTextColor};
`;
