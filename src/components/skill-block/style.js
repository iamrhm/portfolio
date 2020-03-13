import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 340px;
	position: relative;
	@media only screen and (min-device-width: 767px) {
		position: static;
		height: 480px;
		margin-bottom: 70px;
		margin-top: 40px;
	}
`;
export const Grid = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	@media only screen and (min-device-width: 767px) {
		height: 480px;
	}
`;
export const FirstSlot = styled.div`
	width: 22.5%;
	height: 100%;
	display: none;
	@media only screen and (min-device-width: 767px) {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
`;
export const MiddleSlot = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	& :nth-child(even) {
		border-left: 1px solid #f2f2f2;
		border-right: 1px solid transparent;
	}
	& :nth-child(odd) {
		border-right: 1px solid transparent;
		border-left: 1px solid #f2f2f2;
	}
	& :nth-child(5) {
		border-bottom: 1px solid #f2f2f2;
	}
	& :nth-child(6) {
		border-bottom: 1px solid #f2f2f2;
	}

	@media only screen and (min-device-width: 767px) {
		width: 25%;
		& :nth-child(odd) {
			border-left: 1px solid transparent !important;
		}
		& :nth-child(even) {
			border-right: 1px solid transparent !important;
		}
	}
`;
export const LastSlot = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	& :nth-child(even) {
		border-left: 1px solid #f2f2f2;
		border-right: 1px solid #f2f2f2;
	}
	& :nth-child(odd) {
		border-left: 1px solid #f2f2f2;
	}
	& :nth-child(5) {
		border-bottom: 1px solid #f2f2f2;
	}
	& :nth-child(6) {
		border-bottom: 1px solid #f2f2f2;
	}

	@media only screen and (min-device-width: 767px) {
		width: 22.5%;
		& :nth-child(odd) {
			border-left: 1px solid transparent !important;
		}
		& :nth-child(even) {
			border-right: 1px solid transparent !important;
		}
	}
`;
export const Banner = styled.div`
	top: calc(-100% + 1px);
	position: relative;
	width: calc(100% + 2px);
	height: calc(100% - 1px);
	flex-shrink: 0;
	background: #fff;
	border-left: 1px solid #f2f2f2;
	border-bottom: 1px solid #f2f2f2;
`;
export const Blocks = styled.div`
	position: relative;
	width: calc(50%);
	height: calc(33.3%);
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #f2f2f2;
	border-top: 1px solid #f2f2f2;
`;

export const CContainer = styled(Grid)`
	border: none !important;
	display: flex;
	align-items: center;
	z-index: 3;
	flex-wrap: nowrap;
	overflow-x: auto;
`;

export const Slider = styled(CContainer)`
	position: relative;
	width: 100%;
	display: flex;
	${props => props.calWidth}
`;

export const IconBlock = styled(Blocks)`
	border: none !important;
	width: calc(50%);
	height: calc(33.3%);
`;



export const IconContainer = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-device-width: 767px) {
		width: 48px;
		height: 48px;
	}
	border: none !important;
	* {
		border: none !important;
	}
`;