import styled, { css } from "styled-components";
import { Menu } from "styled-icons/feather/Menu";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 22px;
	color: #2e2e2ec4;
`;

export const MenuIcon = styled(Menu)`
	width: 24px;
	height: 24px;
	text-align: left;
`;

export const ButtonContainer = styled.span`
	width: 42px;
	height: 42px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	position: absolute;
	z-index: 999;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	background: #ffff;
`;

export const TitleBar = styled.header`
	width: 100%;
	height: 10%;
	background: transparent;

	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
`;

export const Message = styled.div`
	width: 100%;
	height: 40%;
	margin: 40% auto;
	text-align: left;
	${BodyTextStyle};
`;

export const StyledLink = styled.span``;
