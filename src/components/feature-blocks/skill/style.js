import styled, { css } from "styled-components";
import { primaryBackgroundColor } from "../../../config/style";

const BodyTextStyle = css`
	font-size: calc(8px + (12 - 8) * ((100vw - 24px) / (1600 - 24)));
	color: ${primaryBackgroundColor};
	position: relative;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
`;

export const Container = styled.div`
	width: 100%;
	height: 340px;
	position: relative;
	@media only screen and (min-device-width: 767px) {
		position: static;
		height: 480px;
		margin-top: 40px;
		margin-bottom: 80px;
	}
`;
export const Grid = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	@media only screen and (min-device-width: 767px) {
		height: 480px;
	}
`;
export const FirstSlot = styled.div`
	width: 22.5%;
	height: 100%;
	display: none;
	@media only screen and (min-device-width: 767px) {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
`;
export const MiddleSlot = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	& :nth-child(even) {
		border-left: 1px solid #f2f2f2;
		border-right: 1px solid transparent;
	}
	& :nth-child(odd) {
		border-right: 1px solid transparent;
		border-left: 1px solid #f2f2f2;
	}
	& :nth-child(5) {
		border-bottom: 1px solid #f2f2f2;
	}
	& :nth-child(6) {
		border-bottom: 1px solid #f2f2f2;
	}

	@media only screen and (min-device-width: 767px) {
		width: 25%;
		& :nth-child(odd) {
			border-left: 1px solid transparent !important;
		}
		& :nth-child(even) {
			border-right: 1px solid transparent !important;
		}
	}
`;
export const LastSlot = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	& :nth-child(even) {
		border-left: 1px solid #f2f2f2;
		border-right: 1px solid #f2f2f2;
	}
	& :nth-child(odd) {
		border-left: 1px solid #f2f2f2;
	}
	& :nth-child(5) {
		border-bottom: 1px solid #f2f2f2;
	}
	& :nth-child(6) {
		border-bottom: 1px solid #f2f2f2;
	}

	@media only screen and (min-device-width: 767px) {
		width: 22.5%;
		& :nth-child(odd) {
			border-left: 1px solid transparent !important;
		}
		& :nth-child(even) {
			border-right: 1px solid transparent !important;
		}
	}
`;

export const Blocks = styled.div`
	position: relative;
	width: calc(50%);
	height: calc(33.3%);
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #f2f2f2;
	border-top: 1px solid #f2f2f2;
`;

export const SkillContainer = styled(Grid)`
	border: none !important;
	display: flex;
	align-items: center;
	z-index: 3;
	flex-wrap: nowrap;
	overflow-x: auto;
`;

export const Slider = styled(SkillContainer)`
	position: relative;
	width: 100%;
	display: flex;
`;

export const IconBlock = styled(Blocks)`
	border: none !important;
	width: calc(50%);
	height: calc(33.3%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

export const SkillName = styled.div`
	${BodyTextStyle};
	opacity: 0.7;
	margin-top: 20px;
`;

export const IconContainer = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 767px) {
		width: 32px;
		height: 32px;
	}
	border: none !important;
	* {
		border: none !important;
	}
`;
