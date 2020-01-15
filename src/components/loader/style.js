import styled, { keyframes, css } from "styled-components";

import { firstTextColor } from "../../config/color-platte";

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledText = styled.h1`
	font-size: 14px;
	text-transform: lowercase;
	color: ${firstTextColor};
	letter-spacing: 0.15em;
	line-height: 20px;
`;
