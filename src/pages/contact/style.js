import styled, { css } from "styled-components";
import {
	thirdTextColor,
	firstTextColor,
	secondTextColor
} from "../../config/color-platte";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 20px;
	color: ${secondTextColor};
	font-weight: 300;
`;

const HeadingTextStyle = css`
	font-size: 53px;
	font-weight: bold;
	color: ${firstTextColor};
`;

export const Container = styled.div`
	width: 100%;

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	overflow-x: hidden;
	overflow-y: auto;
`;

export const Heading = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 12px 0;
`;

export const HeaderText = styled.span`
	color: ${thirdTextColor};
	${HeadingTextStyle};
`;

export const InfoSection = styled.div`
	position: relative;
	width: 60%;
	min-width: 320px;
	max-width: 420px;
	margin: 12px 0;
`;

export const StyledPara = styled.p`
	width: 95%;
	${BodyTextStyle};
	margin: 24px 0;
	max-width: 420px;
	min-height: 78px;
	text-align: left;
`;
