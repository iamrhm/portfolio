import styled from "styled-components";
import { PopUpEffect, GrowEffect } from "../../../config/style";

export const VLines = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	left: 0;
	${GrowEffect};
`;
export const OuterVerticalLines = styled(VLines)`
	width: 70%;
	left: 15%;
	@media only screen and (min-device-width: 767px) {
		${props =>
			props.type !== "secondary"
				? `
		border-left: 1px solid   rgba(0, 0, 0, 0.5);
		border-right: 1px solid   rgba(0, 0, 0, 0.5);
		`
				: `
		
		border-left: 1px solid   #f2f2f2;
		border-right: 1px solid  #f2f2f2;
		
		`}
	}
`;
export const InnerVerticalLineContainer = styled(VLines)`
	width: 25%;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	display: flex;
	@media only screen and (min-device-width: 767px) {
		${props =>
			props.type !== "secondary"
				? `
		border-left: 1px solid   rgba(0, 0, 0, 0.5);
		border-right: 1px solid   rgba(0, 0, 0, 0.5);
		`
				: `
		
		border-left: 1px solid   #f2f2f2;
		border-right: 1px solid   #f2f2f2;
		
		`}
	}
`;
export const ShadowLines = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	left: 0;
	& :first-child {
		position: absolute;
		left: calc(37.5% - 5% + 1.8px);
		transform: rotate(180deg);
	}
	& :last-child {
		position: absolute;
		left: calc(50% + 12.5% - 1.8px);
	}
	opacity: 0;
	${PopUpEffect};
`;
export const ShadowContainer = styled(ShadowLines)`
	width: 25%;
	height: 100%;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;
export const StyledImage = styled.img`
	width: 0%;
	height: 100%;
	@media only screen and (min-device-width: 767px) {
		width: 5%;
	}
`;
