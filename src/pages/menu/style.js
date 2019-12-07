import styled, { css } from "styled-components";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 22px;
	color: #2e2e2ec4;
`;

export const HeaderContainer = styled.div`
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 42px;
	top: 0;
	left: 0;
	background: #ffffff4a;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;

	/* background: red; */
`;

export const Message = styled.div`
	width: 100%;
	height: 40%;
	text-align: left;
	${BodyTextStyle};
`;

export const StyledLink = styled.span``;

export const Slider = styled.div`
	position: absolute;
	width: 0%;
	height: 0%;
	background: #fff;
	z-index: 999;
	top: 42px;
	right: 0;
	padding: 0 6%;
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid #020202;
	background: #fff;
`;
