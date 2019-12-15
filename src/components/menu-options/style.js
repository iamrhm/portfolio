import styled from "styled-components";
import { firstTextColor } from "../../config/color-platte";

export const Container = styled.div`
	width: 100%;
	height: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	top: -50%;
	transform: translateY(50%);
`;

export const Item = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 24px;
`;

export const Title = styled.span`
	color: ${firstTextColor};
	font-size: 20px;
	opacity: 0;
`;
