import styled from "styled-components";
import {
	thirdTextColor,
	firstTextColor,
	ButtonColor,
	InputBoxColor
} from "../../../config/style";

import { PressEffect } from "../../../config/style";

export const InputSection = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: inherit;
	min-height: 340px;
	align-items: center;
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
	color: ${thirdTextColor};
	padding: 0 20px;
	box-sizing: border-box;
	background-color: ${InputBoxColor};
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	border: 0;
	height: 50px;
	font-size: 16px;
	color: ${thirdTextColor};
	padding: 20px;
	box-sizing: border-box;
	min-height: 150px;
	resize: vertical;
	background-color: ${InputBoxColor};
`;

export const StyledButton = styled.button`
	background-color: ${ButtonColor};
	color: ${firstTextColor};
	width: 78px;
	font-size: 14px;
	padding: 8px 10px;
	border: 1px solid ${firstTextColor};
	float: left;
	border-radius: 4px;
	text-transform: uppercase;
	text-align: center;

	display: flex;
	align-self: flex-end;
	justify-content: center;
	cursor: pointer;

	margin-top: 6px;

	:active {
		${PressEffect}
	}
`;
