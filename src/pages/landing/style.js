import styled from "styled-components";
import {
	primaryBackgroundColor,
	firstTextColor,
	RiseUpEffect
} from "../../config/style";

export const BackgroundScreenWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	background: ${primaryBackgroundColor};
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;
	z-index: 1; /*above background overlay*/
	* {
		overflow: hidden;
	}
`;

export const TitleSection = styled.div`
	width: 100%;
	height: 25%;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 25%;
	transform: translateY(50%);

	@media only screen and (min-device-width: 767px) {
		width: 60%;
		height: 50%;
		top: 0%;
		transform: translateY(60%);
	}
`;

export const StyledSVG = styled.div`
	width: 100%;
	height: 80%;
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
		transform: scaleY(0);
		${RiseUpEffect}
	}
`;
