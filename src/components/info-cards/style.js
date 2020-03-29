import styled, { css } from "styled-components";
import { primaryBackgroundColor, NOTForCopy } from "../../config/style";

const HeaderTextStyle = css`
	font-size: calc(20px + (54 - 20) * ((100vw - 300px) / (1600 - 300)));
	color: ${primaryBackgroundColor};
	letter-spacing: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Uni Sans Bold", sans-serif;
`;

const BodyTextStyle = css`
	font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
	color: ${primaryBackgroundColor};
	position: relative;
	font-family: "Roboto", sans-serif;
	opacity: 0.8;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 6%;
	margin-top: 20px;
	margin-bottom: 50px;
	* {
		${NOTForCopy};
		overflow: hidden;
	}
	@media only screen and (min-device-width: 767px) {
		width: 70%;
		padding: 0;
		margin: 0 15%;
		margin-top: 30px;
		margin-bottom: 80px;
	}
	overflow: hidden;
`;

export const InfoHeader = styled.div`
	position: relative;
	width: 50%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 30px;
	@media only screen and (min-device-width: 767px) {
		width: 35%;
		height: 90px;
		margin-bottom: 30px;
	}
`;

export const InfoContainer = styled.div`
	width: 100%;
	${BodyTextStyle};
	opacity: 0;
	text-align: left;
`;

export const Header = styled.p`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	${HeaderTextStyle};
	justify-content: center;
	text-align: center;
	margin-bottom: 30px;
	@media only screen and (min-device-width: 767px) {
		margin-bottom: 30px;
	}
`;

export const SubTitle = styled.div`
	width: 100%;
	${BodyTextStyle};
	line-height: 20px;
	text-align: justify;
	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
`;
