import styled, { css } from "styled-components";
import { secondTextColor, firstTextColor } from "../../config/style";
import { PressEffect, NOTForCopy } from "../../config/style";

import {
	primaryBackgroundColor,
	RiseUpEffect,
	HorizontalGrow
} from "../../config/style";

export const BackgroundScreenWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	background: ${primaryBackgroundColor};
`;

export const Container = styled.div`
	padding: 0 6%;
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;
	* {
		overflow: hidden;
	}
`;

export const TitleSection = styled.div`
	width: 100%;
	height: 32%;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 50%;
	transform: translateY(-50%);

	@media only screen and (min-device-width: 767px) {
		width: 55%;
		height: 50%;
		top: 0%;
		transform: translateY(60%);
		min-height: 300px;
	}
`;

export const StyledSVG = styled.div`
	width: 100%;
	height: 80%;
`;

export const ScrollDown = styled.div`
	position: absolute;
	left: 50%;
	bottom: 20px;
	width: 10px;
	height: 50px;
	cursor: pointer;
	background-color: transparent;
	pointer-events: visiblePainted;
	transform-origin: 0 0;
	transform: translate3d(-50%, 0, 0) scaleY(1);
`;

export const Line = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	width: 1px;
	height: 100%;
	transform: translateX(-50%);
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
		transform: scaleY(0);
		${RiseUpEffect}
	}
`;

/* -------------- Info Section -------------- */

const BodyTextStyle = css`
	font-size: 12px;
	color: ${firstTextColor};
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: normal;
	font-weight: bold;
`;

export const InfoWrapper = styled.div`
	width: 274px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-self: flex-end;
	justify-content: flex-start;
	margin-top: 10px;
	* {
		${NOTForCopy}
	}
	@media only screen and (min-device-width: 767px) {
		width: 100%;
		margin-top: 0px;
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
	height: 8px;
	background-color: transparent;
	pointer-events: visiblePainted;

	@media only screen and (min-device-width: 767px) {
		width: 110px;
	}
`;

export const GrowingLine = styled.div`
	width: 100%;
	top: 0;
	height: 1px;
	:after,
	:before {
		content: "";
		display: block;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		transform: scaleX(0);
		transform-origin: 100% 50%;
		background-color: ${firstTextColor};
		animation: ${HorizontalGrow} 1.2s ease-in-out 0.2s forwards;
	}
`;

/*
 *Contact Menu Button
 */

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
