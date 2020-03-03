import styled, { css } from "styled-components";
import { primaryBackgroundColor } from "../../config/style";

import { NOTForCopy, HorizontalGrow } from "../../config/style";

const HeaderTextStyle = css`
	font-size: calc(24px + (54 - 24) * ((100vw - 300px) / (1600 - 300)));
	color: ${primaryBackgroundColor};
	letter-spacing: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
`;

const PreTitleTextStyle = css`
	font-size: 12px;
	letter-spacing: 2px;
	line-height: 14px;
	color: ${primaryBackgroundColor};
	text-transform: uppercase;
	font-weight: bold;
`;

const BodyTextStyle = css`
	font-size: calc(12px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
	color: ${primaryBackgroundColor};
	position: relative;
	font-family: "Roboto", sans-serif;
`;

/* ------- Card ------- */
export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 6%;
	margin-top: 20px;
	margin-bottom: 100px;
	* {
		${NOTForCopy};
		overflow: hidden;
	}
	@media only screen and (min-device-width: 767px) {
		width: 70%;
		padding: 0;
		margin: 0 15%;
		margin-top: 30px;
		margin-bottom: 100px;
	}
`;

export const InfoHeader = styled.div`
	position: relative;
	width: 50%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 20px;
	@media only screen and (min-device-width: 767px) {
		width: 35%;
		height: 90px;
		margin-bottom: 30px;
	}
`;

export const InfoContainer = styled.div`
	width: 100%;
	${BodyTextStyle};
`;

export const Header = styled.p`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	${HeaderTextStyle};
	justify-content: center;
	text-align: center;
	margin-bottom: 20px;
	@media only screen and (min-device-width: 767px) {
		margin-bottom: 30px;
	}
`;

export const SubTitle = styled.p`
	width: 100%;
	${BodyTextStyle};
	line-height: 20px;
`;

/* -------- List Styles -------- */

export const ListWrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4% 0;
`;

export const ListHeader = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
`;

export const ListPreTitle = styled.div`
	${PreTitleTextStyle};
	margin-bottom: 5px;
`;

export const ListRubberLine = styled.div`
	position: relative;
	width: 30px;
	height: 10px;
	background-color: transparent;
	pointer-events: visiblePainted;
	display: flex;
	align-items: center;
`;

export const ListLine = styled.div`
	width: 100%;
	top: 0;
	height: 1px;

	background-color: ${primaryBackgroundColor};

	transform: scaleX(0);
	transform-origin: 0% 50%;
	animation: ${HorizontalGrow} 1.2s ease-in-out 0.2s forwards;
`;

export const ListContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const ListSubTitle = styled.p`
	width: 70%;
	${BodyTextStyle};
	line-height: 22px;
`;
