import styled from "styled-components";
import { primaryBackgroundColor } from "../../config/style";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 590px;
	min-width: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	* {
		flex-shrink: 0;
	}
`;

export const Header = styled.div`
	position: relative;
	top: 0;
	left: 0%;
	width: 100%;
	display: flex;
	align-items: center;
	background-color: ${primaryBackgroundColor};
`;

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: left;
`;

export const InfoSection = styled.div`
	position: relative;
	width: 100%;
	margin: 12px 0;
`;
