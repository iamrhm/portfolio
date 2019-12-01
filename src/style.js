import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Ibarra+Real+Nova|Lora|Muli|Nanum+Gothic|Noto+Sans|Open+Sans|Roboto+Slab|Source+Sans+Pro&display=swap');
*{
    margin: 0;
    border:0;
    outline:none;
    box-sizing:border-box;
    margin: 0;
    border:0;
    padding:0;
    outline:none;
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing:border-box;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const WrapperContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fefefe;
	padding: 0 6%;
`;

export const BackgroundScreen = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
`;

export const BackgroundWrapper = styled.span`
	top: 32%;
	right: 6%;
	width: 180px;
	height: 180px;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		top: 10%;

		width: 220px;
		height: 220px;
	}
	@media only screen and (max-width: 833px) and (min-width: 414px) {
    top: 20%;
    width: 220px;
		height: 220px;
	}
`;

export const MaskLayer = styled.span`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
`;
