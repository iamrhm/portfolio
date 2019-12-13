import styled from "styled-components";
import { primaryBackgroundColor } from "../../config/color-platte";

export const Container = styled.div`
	width: 100%;
	height: 42px;
	position: fixed;

	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	padding: 0 6%;
	background: ${primaryBackgroundColor};
`;

export const LogoContainer = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
`;

export const MenuButtonContainer = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
