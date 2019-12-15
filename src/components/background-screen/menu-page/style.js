import styled from "styled-components";

import { firstTextColor } from "../../../config/color-platte";

export const BackgroundWrapper = styled.span`
	height: 180px;
	z-index: -1;
	top: -50%;
	left: -50%;
	transform: translate(35%, 40%);

	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		transform: translate(15%, 50%);
	}
	@media only screen and (max-width: 833px) and (min-width: 414px) {
	}

	font-family: "Heebo", sans-serif;
`;

export const StyledTextSpan = styled.span`
	font-size: 62px;
	color: ${firstTextColor};
	opacity: 0;
	margin: 0 1%;
	font-weight: bold;
`;

export const BlankSpan = styled.span`
	width: 5px;
	opacity: 0;
`;
