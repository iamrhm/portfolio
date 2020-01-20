import styled from "styled-components";
import {
	thirdTextColor,
	firstTextColor,
	HoverMaskEffect
} from "../../config/style";

export const BannerContainer = styled.div`
	position: relative;
	width: 320px;
	height: 80px;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 990px) {
		width: 486px;
		height: 110px;
	}
`;

export const BannerSvg = styled.svg`
	width: 100%;
	height: 100%;
	text-align: left;

	display: flex;
	justify-content: center;
	* {
		fill: none;
	}
`;

export const MobileSvg = styled(BannerSvg)`
	@media screen and (min-width: 990px) {
		display: none;
	}
`;

export const DesktopSvg = styled(BannerSvg)`
	@media screen and (min-width: 990px) {
		display: flex;
		justify-content: center;
	}
`;

export const MobileBanner = styled(MobileSvg)`
	${props => (props.applyMask ? HoverMaskEffect : "")}
`;

export const MobileRLogo = styled(MobileSvg)`
	position: absolute;
	* {
		fill: ${thirdTextColor} !important;
		stroke: none !important;
	}
`;

export const DesktopBanner = styled(DesktopSvg)`
	${props => (props.applyMask ? HoverMaskEffect : "")}
`;

export const DesktopRLogo = styled(DesktopSvg)`
	position: absolute;
	* {
		fill: ${thirdTextColor} !important;
		stroke: none !important;
	}
`;

export const StyledPath = styled.path`
	stroke: ${firstTextColor};
	stroke-width: 1.5;
	stroke-linecap: round;
	stroke-miterlimit: 10;
`;
