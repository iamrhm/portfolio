import styled from "styled-components";
import {
	firstTextColor,
	secondTextColor
} from "../../config/style";

export const Container = styled.div`
	width: 85%;
	min-width: 300px;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	padding: 4% 0%;
	padding-right: 4%;

	* {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-o-user-select: none;
	}
`;

export const Item = styled.div`
	width: 72px;
	height: 72px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 5px 0;
	margin-right: 10px;
	padding: 0 2%;
	* {
		overflow: hidden;
	}
`;

export const Title = styled.span`
	width: 100%;
	height: 18px;
	text-align: center;
	font-size: 12px;
	color: ${secondTextColor};
	padding: 3px 1px;
`;

export const LogoContainer = styled.span`
	width: 24px;
	height: 24px;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
