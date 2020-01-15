import styled, { createGlobalStyle } from "styled-components";
import { primaryBackgroundColor } from "./config/color-platte";

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
    outline:hidden;
    outline: 0;
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing:border-box;
    overflow-x: hidden;
    *:focus {
      outline: 0;
      outline: none;
      }

    ::-webkit-scrollbar
    {
      width: 2px;  /* for vertical scrollbars */
      height: 2px; /* for horizontal scrollbars */
    }

    ::-webkit-scrollbar-track
    {
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb
    {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const WrapperContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 0 6%;
	position: relative;
	overflow: hidden;
	z-index: 1; /* First Elevation From Background */
	background: ${primaryBackgroundColor};
`;

export const PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 80%;
	min-height: 480px;
	min-width: 340px;
	top: 72px;
`;
