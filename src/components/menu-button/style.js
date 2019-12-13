import styled from "styled-components";
import { firstTextColor } from "../../config/color-platte";

export const IconWrapper = styled.span`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	cursor: pointer;
`;

export const Line = styled.span`
	width: 24px;
	height: 2px;
	background: ${firstTextColor};
	margin: 4px 0;
`;
