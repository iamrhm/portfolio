import { css, keyframes } from "styled-components";

export const firstTextColor = "#FFF";
export const secondTextColor = "#A7A7A7";
export const ButtonColor = "#1d1d1d";
export const primaryBackgroundColor = "#121212";
export const secondaryBackgroundColor = "#2E2E2E";
export const DarkTextColor = "rgb(0, 0, 0);";
export const InputBoxColor = "#2b2b2b";
export const AnimatingTexTColor = "#000000";
export const MaskTitleColor = "#848181";

const darkTheme = {};
const lightTheme = {};
export function getTheme(type) {
	switch (type) {
		case "dark":
			return darkTheme;
		case "light":
			return lightTheme;
		default:
			return lightTheme;
	}
}

const shine = keyframes`
  from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
`;

export const HoverMaskEffect = css`
	-webkit-mask-image: linear-gradient(
		-45deg,
		#000 20%,
		rgba(0, 0, 0, 0.4) 40%,
		#000 60%,
		rgba(0, 0, 0, 0.4) 80%,
		#000 100%
	);
	-webkit-mask-size: 200%;
	animation: ${shine} 1.5s infinite;
`;

const press = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(0.98);
  }
	100%{
		transform: scale(1)
	}
`;

export const PressEffect = css`
	animation: ${press} 1s forwards;
`;
