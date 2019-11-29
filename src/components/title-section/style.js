import styled, { css } from "styled-components";

const IntroTextStyle = css`
	font-size: 24px;
	line-height: 24px;
	color: #2e2e2e;
`;

export const Title = styled.p`
	width: 100%;
	height: 100%;

	font-weight: 800;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledPara = styled.span`
	width: 100%;
	padding: 0.5% 0;
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
