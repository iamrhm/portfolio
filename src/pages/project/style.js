import styled, { css, keyframes } from "styled-components";
import { primaryBackgroundColor, firstTextColor } from "../../config/style";

const BodyTextStyle = css`
	font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
	font-family: "Lato", sans-serif;
	color: ${firstTextColor};
`;

const show = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${primaryBackgroundColor};
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	overflow: hidden;
`;

export const Header = styled.div`
	width: 100%;
	height: 30%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Slider = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 6%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	overflow-y: auto;

	@media only screen and (min-device-width: 767px) {
		top: 120px;
		flex-direction: row;
		overflow-y: hidden;
		overflow-x: auto;
	}

	opacity: 0;
	animation: ${show} 1.2s ease-in-out 2.5s forwards;
`;

export const Item = styled.a`
	width: 90%;
	height: 236px;
	margin-bottom: 30px;
	background: #252525;
	position: relative;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	padding: 5% 4%;

	@media only screen and (min-device-width: 767px) {
		width: 360px;
		height: 45%;
		margin-right: 50px;
	}

	text-decoration: none;
`;

export const DummyItem = styled(Item)`
	height: 220px;
	background: transparent;
	display: flex;
	flex-shrink: 0;

	@media only screen and (min-device-width: 767px) {
		width: 320px;
		height: 55%;
		margin-right: 50px;
	}
`;

export const ItemText = styled.p`
	${BodyTextStyle};
	padding: 4% 0;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.span`
	${BodyTextStyle};
	font-weight: bold;
	padding: 4px;
	overflow: hidden;
`;

export const SubTitle = styled.span`
	${BodyTextStyle};
	padding: 4px 4px;
	font-style: italic;
	padding-left: 14px;
	opacity: 0.8;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	font-size: 14px;
	font-weight: 300;
`;

export const Avatar = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
`;

export const Footer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 6%;
	height: 34px;
	display: flex;
	align-items: flex-end;
`;
