import styled from "styled-components";
import { thirdTextColor, HoverMaskEffect } from "../../config/style";

export const IconWrapper = styled.div`
	width: 24px;
	height: 24px;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;

	padding: inherit;
	position: absolute;
	right: 0;
	cursor: pointer;

	:focus {
		outline: none;
		outline: 0;
		border: 0;
	}
	:active {
		outline: none;
		outline: 0;
		border: 0;
	}

	${props => (props.applyMask ? HoverMaskEffect : "")}
`;

export const Line = styled.span`
	width: 22px;
	height: 1px;
	background: ${thirdTextColor};
	margin: 3px 0px;
	cursor: pointer;
`;
