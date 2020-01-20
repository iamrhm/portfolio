import styled, { css } from "styled-components";
import {
	thirdTextColor,
	firstTextColor,
	secondTextColor
} from "../../config/style"

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 26px;
	color: ${secondTextColor};
	font-weight: 300;
`;

const HeadingTextStyle = css`
	font-size: 53px;
	font-weight: bold;
	color: ${firstTextColor};
`;

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	* {
		flex-shrink: 0;
		overflow: hidden;
	}
`;

export const Heading = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 12px 0;
`;

export const HeadingText = styled.span`
	color: ${thirdTextColor};
	${HeadingTextStyle};
	word-wrap: break-word;
	width: 100%;
`;

export const SubSection = styled.div`
	position: relative;
	width: 60%;
	min-width: 320px;
	max-width: 420px;
	margin: 12px 0;
`;

export const StyledPara = styled.p`
	width: 100%;
	${BodyTextStyle};
	margin: 4% 0;
`;

export const Header = styled.span`
	${BodyTextStyle};
	font-size: 18px;
	color: ${thirdTextColor};
	text-transform: uppercase;
`;
