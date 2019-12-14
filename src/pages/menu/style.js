import styled, { css } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor
} from "../../config/color-platte";

export const Slider = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: transparent;
	z-index: 999;
	top: 38px;
	right: 0;
	padding: inherit;
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid ${firstTextColor};
	background: ${primaryBackgroundColor};
`;
