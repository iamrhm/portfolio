import styled from "styled-components";
import {
	TileColor,
	secondTextColor,
	firstTextColor
} from "../../config/color-platte";

export const Container = styled.div`
	width: 75%;
	min-width: 300px;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	padding: 4% 0%;
	padding-right: 4%;
`;

export const Item = styled.div`
	width: 72px;
	height: 72px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	margin: 2% 0;
	margin-right: 10px;

	background: ${TileColor};
	padding: 0 2%;
	z-index: 1;
	* {
		overflow: hidden;
	}
`;

export const Title = styled.span`
	width: 100%;
	height: 18px;
	text-align: center;
	font-size: 12px;
	color: ${firstTextColor};
	padding: 4%;
`;

export const LogoContainer = styled.span`
	width: 24px;
	height: 24px;
	margin: 3px;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
