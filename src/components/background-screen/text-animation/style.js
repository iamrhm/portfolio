import styled, { keyframes } from "styled-components";

import { firstTextColor } from "../../../config/color-platte";

const slideUp = keyframes`
from{
  transform:translateY(-100%)
}
to{
	transform:translateY(0%)
}
`;

const slideDown = keyframes`
from{
  transform:translateY(0%)
}
to{
	transform:translateY(100%)
}
`;

export const Container = styled.div`
	width: 324px;
	height: 78px;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	* {
		overflow: hidden;
	}
`;

export const DisplayTextContainer = styled.span`
	width: 100%;
	height: 32px;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledAnimatePara = styled.span`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledText = styled.span`
	font-size: 24px;
	padding: 0 1%;
	text-transform: lowercase;
	color: ${firstTextColor};
`;
