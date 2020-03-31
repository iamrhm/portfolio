import styled from "styled-components";
import { firstTextColor, HoverMaskEffect } from "../../../config/style";

export const IconWrapper = styled.div`
	width: 24px;
	height: 24px;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	padding: 0 6%;
	position: absolute;

	cursor: pointer;

	${props => (props.applyMask ? HoverMaskEffect : "")}
`;

export const Line = styled.span`
	width: 22px;
	height: 1px;
	background: ${firstTextColor};
	margin: 3px 0px;
	cursor: pointer;

	/* to stop initial menu show  */
	opacity: 0;
`;
