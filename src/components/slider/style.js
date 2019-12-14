import styled, { css } from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor
} from "../../config/color-platte";

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 2px;
	background: ${primaryBackgroundColor};
	z-index: 999;
	top: 38px;
	right: 0;
	padding: inherit;
`;

export const SlideLineContainer = styled.div`
	width: 100%;
	height: 2px;
	background: transparent;
	position: absolute;
	padding: inherit;
	bottom: 0;
	right: 0;

	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const Line = styled.span`
	width: 16px;
	height: 2px;
	background: ${firstTextColor};
	cursor: pointer;
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid ${firstTextColor};
	/* background: ${primaryBackgroundColor}; */
`;
