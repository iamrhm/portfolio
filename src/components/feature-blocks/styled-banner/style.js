import styled, { css } from "styled-components";
import { primaryBackgroundColor } from "../../../config/style";

const BannerTextStyle = css`
	font-size: calc(14px + (18 - 14) * ((100vw - 200px) / (1600 - 200)));
	color: ${primaryBackgroundColor};
	letter-spacing: 2px;
	text-transform: uppercase;
	font-weight: bold;
	font-family: "Roboto Condense", sans-serif;
`;

export const Container = styled.div`
	position: relative;
	width: calc(100% + 2px);
	height: 100%;
	flex-shrink: 0;
	background: #fff;
	border-left: 1px solid #f2f2f2;
	border-bottom: 1px solid #f2f2f2;
	border-top: 1px solid #f2f2f2;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const IconBanner = styled.div`
	width: 48px;
	height: 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeaderText = styled.div`
	width: 100%;
	display: ${props => (props.isVisible ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	${BannerTextStyle};
	text-align: center;
	margin-top: 20px;
`;
