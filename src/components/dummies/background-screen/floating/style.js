import styled, { keyframes } from "styled-components";

const popUp = keyframes`
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
`;

const grow = keyframes`
	0%{
		height: 0%;
	}
	100%{
		height: 100%;
	}
`;

export const VLines = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	left: 0;
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
	animation: ${grow} 1.2s ease-in-out 0s forwards;
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
		animation: ${grow} 1.2s ease-in-out 0s forwards;
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
	animation: ${popUp} 2s ease-in-out
		${props => (props.delay ? props.delay + "s" : "2s")} forwards;
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
