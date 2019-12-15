import styled from "styled-components";
import { firstTextColor } from "../../config/color-platte";

export const Container = styled.div`
	width: 100%;
	height: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	top: 50%;
	transform: translateY(-70%);
	position: relative;
`;

export const Item = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.span`
	color: ${firstTextColor};
	font-size: 24px;
	opacity: 0;
	font-weight: bold;
`;
