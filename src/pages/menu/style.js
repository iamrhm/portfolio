import styled, { css } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor
} from "../../config/color-platte";

export const HeaderContainer = styled.div`
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 42px;
	top: 0;
	right: 0;

	overflow: scroll;
	/* background: red; */
`;

export const Slider = styled.div`
	position: absolute;
	width: 0%;
	height: 2px;
	background: transparent;
	z-index: 999;
	top: 38px;
	right: 0;
	padding: 0 6%;
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid ${firstTextColor};
	background: ${primaryBackgroundColor};
`;
