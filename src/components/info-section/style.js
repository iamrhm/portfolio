import styled, { css } from "styled-components";
import { secondTextColor, firstTextColor } from "../../config/style";

import { PressEffect } from "../../config/style";

const BodyTextStyle = css`
	font-size: 12px;
	/* line-height: 20px; */
	color: ${firstTextColor};
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: normal;
	font-weight: bold;
`;

export const Container = styled.div`
	width: 274px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-self: flex-end;
	justify-content: flex-start;
	margin-top: 10px;
	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
	@media only screen and (min-device-width: 767px) {
		margin-top: 0px;
		width: 100%;
	}
`;

export const InfoContainer = styled.div`
	width: 65%;
	${BodyTextStyle};
	text-align: right;
`;

export const StyledPara = styled.p`
	white-space: normal;
	text-align: right;
`;
export const StyledSpan = styled.span`
	${BodyTextStyle};
	text-align: right;
	white-space: nowrap;
`;

export const RubberLine = styled.div`
	position: relative;
	width: 76px;
	height: 10px;
	background-color: transparent;
	pointer-events: visiblePainted;

	@media only screen and (min-device-width: 767px) {
		width: 110px;
	}
`;

export const Line = styled.div`
	position: absolute;
	top: 0;
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
	}
`;

export const ContactMeButton = styled.button`
	float: right;
	width: 112px;
	height: 42px;
	padding: 4% 0;
	margin-top: 12px;
	outline: none;
	border: none;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	${BodyTextStyle};
	background-color: transparent;
	color: ${firstTextColor};
	text-transform: uppercase;
	font-weight: 500;
	border: 1px solid ${secondTextColor};
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
