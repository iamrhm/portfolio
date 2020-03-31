import styled, { css } from "styled-components";
import { primaryBackgroundColor, HorizontalGrow } from "../../../config/style";

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
	opacity: 0.8;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const ListWrapper = styled.div`
	position: relative;
	width: 90%;
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

	opacity: 0;
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

	opacity: 0;
`;

export const ListSubTitle = styled.p`
	width: 70%;
	${BodyTextStyle};
	line-height: 22px;
`;
