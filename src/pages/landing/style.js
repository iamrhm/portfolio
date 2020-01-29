import styled from "styled-components";
import { MaskTitleColor, firstTextColor } from "../../config/style";

export const BannerContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	top: 64px;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		width: 55%;
		justify-content: flex-end;
		align-items: flex-start;
		top: 142px;
		right: 0;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;

	* {
		overflow: hidden;
	}
`;

export const WrapperIntro = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	position: relative;
	top: 50%;
	transform: translateY(-30%);

	@media only screen and (min-device-width: 767px) {
		width: 512px;
		transform: translateY(-50%);
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 10px 0;
	position: relative;
`;

export const ScrollDown = styled.div`
	position: absolute;
	left: 50%;
	bottom: 20px;
	width: 10px;
	height: 50px;
	cursor: pointer;
	background-color: transparent;
	pointer-events: visiblePainted;
	transform-origin: 0 0;
	transform: translate3d(-50%, 0, 0) scaleY(1);
`;

export const Line = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	width: 1px;
	height: 100%;
	transform: translateX(-50%);
	:after,
	:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${firstTextColor};
	}
`;
