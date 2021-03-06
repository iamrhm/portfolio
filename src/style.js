import styled, { createGlobalStyle, css } from "styled-components";
import { primaryBackgroundColor } from "./config/style";
import myFontURL from "./fonts/UniSansW01Bold.woff";

export const fontFaces = css`
	@font-face {
		font-family: "Uni Sans Bold";
		src: url(${myFontURL}) format("woff");
		font-weight: bold;
		font-style: normal;
	}
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,900|Roboto|Roboto+Condensed:400,700&display=swap');
  
  html, body, #root{
    height:100%;
    width:100%;
  }
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
    font-family: "Roboto Condensed", sans-serif;
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
      width: 0.1px;  /* for vertical scrollbars */
      height: 0.1px; /* for horizontal scrollbars */
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
  ${fontFaces};
`;

export const WrapperContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	/* background: ${primaryBackgroundColor}; */
`;

export const PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	/* min-height: 480px;
	min-width: 340px; */
`;
