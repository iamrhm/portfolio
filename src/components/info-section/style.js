import styled, { css } from "styled-components";
import {
	contactMeButton,
	secondTextColor,
	firstTextColor,
	thirdTextColor
} from "../../config/color-platte";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${secondTextColor};
`;

export const StyledBody = styled.span`
	width: 100%;
	${BodyTextStyle};

	/* Special case */
	@media screen and (min-width: 510px) and (max-width: 833px) {
		padding: 2% 0;
	}
`;

export const ContactMeButton = styled.span`
	width: 164px;
	height: 54px;
	padding: 4% 0;
	margin: 6% 0;
	outline: none;
	border: none;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	${BodyTextStyle};
	background-color: ${contactMeButton};
	color: ${firstTextColor};
	text-transform: uppercase;
	border: 1px solid ${firstTextColor};
	:focus :active {
		outline: none;
	}
`;

export const StrongText = styled.span`
	font-weight: bold;
	color:${thirdTextColor}
`;
