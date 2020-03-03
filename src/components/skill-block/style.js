import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 420px;
`;
export const Grid = styled.div`
	width: 100%;
	height: 420px;
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	border-bottom: 1px solid #f2f2f2;
`;
export const FirstSlot = styled.div`
	width: 22.5%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
`;
export const MiddleSlot = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	& :nth-child(odd) {
		border-left: 1px solid transparent !important;
	}
`;
export const LastSlot = styled.div`
	width: 22.5%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	& :nth-child(odd) {
		border-left: 1px solid transparent !important;
	}
`;
export const Banner = styled.div`
	top: calc(-100% + 4px);
	position: relative;
	width: calc(100% + 2px);
	height: calc(100% + 2px);
	flex-shrink: 0;
	background: #fff;
	border-top: 1px solid #f2f2f2;
	border-left: 1px solid #f2f2f2;
	border-bottom: 1px solid #f2f2f2;
`;
export const Blocks = styled.div`
	position: relative;
	width: calc(50% - 1px);
	height: calc(33.3% - 1px);
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
`;

export const Slider = styled(CContainer)`
	position: relative;
	width: 100%;
	display: flex;
	${props => props.calWidth}
`;

export const IconBlock = styled(Blocks)`
	border: none !important;
`;
