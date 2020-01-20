import styled, { css } from "styled-components";
import {
	ButtonColor,
	secondTextColor,
	firstTextColor
} from "../../config/style";

import { PressEffect } from "../../config/style";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${secondTextColor};
`;

export const Container = styled.div`
	width: 95%;
	max-width: 400px;

	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
`;

export const StyledBody = styled.span`
	width: 100%;
	${BodyTextStyle};
`;

export const ContactMeButton = styled.button`
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
	background-color: ${ButtonColor};
	color: ${firstTextColor};
	text-transform: uppercase;
	border: 1px solid ${firstTextColor};
	cursor: pointer;
	:focus :active {
		outline: none;
		cursor: pointer;
	}
	* {
		text-decoration: none;
		color: inherit;
	}
	:active {
		${PressEffect}
	}
`;
