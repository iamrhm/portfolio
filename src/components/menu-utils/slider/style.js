import styled from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor,
	HoverMaskEffect
} from "../../../config/style";

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 62px;
	background: transparent;
	z-index: 4; /* Second Top level of the main page */
	top: 0;
	left: 0;
	padding: inherit;
	overflow: hidden;
	* {
		overflow: hidden;
	}
`;

export const SlideLineContainer = styled.div`
	width: 100%;
	height: 1px;
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 0 6%;
`;

export const BackgroundScreenWrapper = styled.div`
	width: 100%;
	height: 0%;
	background: ${primaryBackgroundColor};
	position: absolute;
	padding: inherit;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const Line = styled.div`
	width: 100%;
	height: 100%;
	background: ${firstTextColor};
	cursor: pointer;
	z-index: 2; /* One level above of the main page */
	${props => (props.applyMask ? HoverMaskEffect : "")}
	bottom: 0;
	right: 0;
`;

export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 1px solid ${firstTextColor};
`;
