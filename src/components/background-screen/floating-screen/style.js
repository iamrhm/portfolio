import styled from "styled-components";

import { PopUpEffect } from "../../../config/style";

export const VLines = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	left: 0;
`;

export const OuterVerticalLines = styled(VLines)`
	width: 75%;
	left: 12.5%;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
`;

export const InnerVerticalLineContainer = styled(VLines)`
	width: 25%;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	display: flex;
	& :first-child {
		transform: rotate(180deg);
	}
`;

export const ShadowContainer = styled(InnerVerticalLineContainer)`
	width: 25%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	display: ${props => (props.withShadow ? "flex" : "none")};
	opacity: 0;
	${PopUpEffect};
	left: 49%;
	top: 0;
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	transform: translateX(-51%);
`;

export const InnerVerticalLines = styled.div`
	width: 90%;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
`;

export const StyledImage = styled.img`
	width: 0%;
	height: 100%;
	@media only screen and (min-device-width: 767px) {
		width: 5%;
	}
`;
