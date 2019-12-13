import styled, { css } from "styled-components";
import { firstTextColor } from "../../config/color-platte";

const IntroTextStyle = css`
	font-size: 24px;
	line-height: 24px;
	color: ${firstTextColor};
`;

export const Title = styled.div`
	width: 100%;
	height: 100%;
	font-weight: 800;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: center;
	}
`;

export const StyledPara = styled.span`
	width: 100%;
	padding: 0.2em 0;
	${IntroTextStyle};
`;

export const StyledTextSpan = styled.span`
	display: inline-block;
	${IntroTextStyle};
`;

export const BlankSpan = styled.span`
	display: inline-block;
	${IntroTextStyle};
	width: 5px;
`;
