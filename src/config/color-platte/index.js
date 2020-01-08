export const firstTextColor = "#D3D3D3";
export const secondTextColor = "#A7A7A7";
export const thirdTextColor = "#FFF";
export const ButtonColor = "#1d1d1d";
export const primaryBackgroundColor = "#1d1d1d";
export const secondaryBackgroundColor = "#2E2E2E";
export const DarkTextColor = "rgb(0, 0, 0);";
export const InputBoxColor = "#2b2b2b";

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
