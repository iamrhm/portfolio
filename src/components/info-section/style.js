import styled, { css } from "styled-components";
import {
	contactMeButton,
	secondTextColor,
	firstTextColor,
	thirdTextColor
} from "../../config/color-platte";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${secondTextColor};
`;

export const Container = styled.div`
	width: 95%;
	max-width: 400px;
	padding: 2% 0;
`;

export const StyledBody = styled.span`
	width: 100%;
	${BodyTextStyle};
`;

export const ContactMeButton = styled.span`
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
	background-color: ${contactMeButton};
	color: ${firstTextColor};
	text-transform: uppercase;
	border: 1px solid ${firstTextColor};
	:focus :active {
		outline: none;
	}
	* {
		text-decoration: none;
		color: inherit;
	};
`;

export const StrongText = styled.span`
	font-weight: bold;
	color: ${thirdTextColor};
`;
