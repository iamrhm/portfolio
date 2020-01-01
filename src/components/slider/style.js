import styled from "styled-components";
import {
	thirdTextColor,
} from "../../config/color-platte";

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 1px;
	z-index: 2; /* One level above of the main page */
	top: 62px;
	right: 0;
	padding: inherit;
	overflow: hidden;
	* {
		overflow: hidden;
	}
`;

export const SlideLineContainer = styled.div`
	width: 100%;
	height: 1px;
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
	height: 1px;
	background: ${thirdTextColor};
	cursor: pointer;
	z-index: 2; /* One level above of the main page */
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 1px solid ${thirdTextColor};
`;
