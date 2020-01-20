import styled from "styled-components";
import { firstTextColor, secondTextColor } from "../../config/style"

export const Container = styled.div`
	width: 100%;

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: left;
	padding: 4% 0%;
`;

export const Card = styled.div`
	width: 240px;
	height: 124px;
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const FlowIcon = styled.span`
	width: 14px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding-top: 12px;
	align-items: center;
`;

export const Dot = styled.span`
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: ${secondTextColor};
	margin-top: 10px;
	margin-bottom: 8px;
`;

export const Line = styled.span`
	width: 1px;
	height: 90%;
	background: ${secondTextColor};
	opacity: 0.5;
`;

export const Details = styled.span`
	width: calc(100% - 14px);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	padding: 4% 5%;
`;

export const Title = styled.span`
	font-size: 16px;
	font-weight: bold;
	line-height: 20px;
	color: ${firstTextColor};
	padding-bottom: 8px;
`;

export const SubTitle = styled.span`
	font-size: 12px;
	line-height: 20px;
	color: ${secondTextColor};
`;
