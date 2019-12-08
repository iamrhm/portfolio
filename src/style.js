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
    
    overflow: hidden;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const WrapperContainer = styled.div`
	width: 100vw;
	height: 100vh;
	min-height: 620px;
	background-color: #fefefe;
	padding: 0 6%;
	position: relative;
`;
