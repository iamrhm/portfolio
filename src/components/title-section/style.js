import styled, { css } from "styled-components";
import { firstTextColor } from "../../config/style";

const IntroTextStyle = css`
	font-size: 38px;
	font-weight: bold;
	color: ${firstTextColor};
`;

export const Title = styled.div`
	width: 100%;
	height: 100%;
	font-weight: 800;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	position: relative;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: center;
	}

	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
`;

export const StyledPara = styled.h1`
	width: 100%;
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
