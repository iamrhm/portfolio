import styled, { css } from "styled-components";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 22px;
	color: #2e2e2ec4;
`;

export const Container = styled.div`
	position: absolute;
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 100%;
	padding: 0 6%;
	top: 10%;
	left: 0%;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	justify-content: center;

	background: red;
`;

export const Message = styled.div`
	width: 100%;
	height: 40%;
	text-align: left;
	${BodyTextStyle};
`;

export const StyledLink = styled.span``;
