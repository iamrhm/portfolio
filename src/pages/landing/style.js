import styled, { css } from "styled-components";
import { firstTextColor, primaryBackgroundColor } from "../../config/style";

export const Wrapper = styled.div`
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

export const TitleContainer = styled.div`
	width: 100%;
	height: 35%;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 50%;
	transform: translateY(-50%);

	@media only screen and (min-device-width: 767px) {
		width: 55%;
		height: 50%;
		top: 0%;
		transform: translateY(50%);
		min-height: 300px;
	}
`;

export const SocialContainer = styled.div`
	position: absolute;
	width: auto;
	height: auto;
	bottom: 10px;
	right: 0;
	padding: 0 6%;
	@media only screen and (min-device-width: 767px) {
		bottom: 20px;
	}
`;

export const PortfolioBanner = styled.div`
	position: absolute;
	width: auto;
	height: auto;
	bottom: 10px;
	left: 0;
	padding: 0 6%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	@media only screen and (min-device-width: 767px) {
		bottom: 20px;
	}
`;

export const PortfolioText = styled.p`
	font-size: 14px;
	color: ${firstTextColor};
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: bold;
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
	@media only screen and (min-device-width: 767px) {
		width: 100%;
	}
`;

export const InfoContainer = styled.div`
	width: 65%;
	${BodyTextStyle};
	text-align: right;
	margin-top: 10px;
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

export const LineContainer = styled.div`
	position: relative;
	width: 80px;
	height: 8px;
	background-color: transparent;
	pointer-events: visiblePainted;

	@media only screen and (min-device-width: 767px) {
		width: 110px;
	}
`;
