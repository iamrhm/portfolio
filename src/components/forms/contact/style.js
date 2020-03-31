import styled, { css } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor,
	InputBoxColor
} from "../../../config/style";

import { PressEffect } from "../../../config/style";

const BodyTextStyle = css`
	font-size: calc(12px + (14 - 12) * ((100vw - 300px) / (1600 - 300)));
	position: relative;
	font-family: "Roboto", sans-serif;
	opacity: 0.8;
	color: red;
`;

export const InputSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: inherit;
	align-items: center;
	overflow-y: hidden;
	margin: 30px 0;
`;

export const RowContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledInput = styled.input`
	width: ${props => (props.size && props.size === "small" ? " 48%" : "100%")};
	border: 0;
	height: 50px;
	font-size: 16px;
	color: ${firstTextColor};
	padding: 0 20px;
	margin: 10px 0;
	box-sizing: border-box;
	background-color: ${InputBoxColor};
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	border: 0;
	height: 50px;
	font-size: 16px;
	color: ${firstTextColor};
	padding: 20px;
	margin: 10px 0;
	box-sizing: border-box;
	min-height: 150px;
	resize: vertical;
	background-color: ${InputBoxColor};
`;

export const StyledButton = styled.button`
	background-color: ${firstTextColor};
	color: ${primaryBackgroundColor};
	font-family: "Lato", sans-serif;
	font-size: 12px;
	padding: 10px 24px;
	border: 2px solid ${firstTextColor};
	border-radius: 20px;
	text-transform: uppercase;
	text-align: center;
	cursor: pointer;

	margin-top: 6px;

	:active {
		${PressEffect}
	}
`;

export const ErrorMsg = styled.p`
	${BodyTextStyle};
	padding: 2px 0;
`;
