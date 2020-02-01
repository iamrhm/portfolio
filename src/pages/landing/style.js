import styled, { css } from "styled-components";
import { firstTextColor, RiseUpEffect } from "../../config/style";

const BodyTextStyle = css`
	font-size: 12px;
	color: ${firstTextColor};
	text-transform: uppercase;
	letter-spacing: 1px;
	white-space: normal;
	font-weight: bold;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;

	* {
		overflow: hidden;
	}
`;

export const WrapperIntro = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	position: relative;
	top: 50%;
	transform: translateY(-30%);

	@media only screen and (min-device-width: 767px) {
		width: 600px;
		transform: translateY(-50%);
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	position: relative;
`;

export const InfoSection = styled.div`
	width: 184px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-self: flex-end;
	justify-content: flex-start;

	margin-top: 8px;

	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
	@media only screen and (min-device-width: 767px) {
		width: 100%;
		margin-right: 17px;
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

export const ScrollDown = styled.div`
	position: absolute;
	left: 50%;
	bottom: 20px;
	width: 10px;
	height: 50px;
	cursor: pointer;
	background-color: transparent;
	pointer-events: visiblePainted;
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
