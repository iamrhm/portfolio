export const firstTextColor = "#D3D3D3";
export const secondTextColor = "#A7A7A7";
export const thirdTextColor = "#FFF";

export const contactMeButton = "#131313";

export const primaryBackgroundColor = "#131313";
export const secondaryBackgroundColor = "#2E2E2E";

export const MenuTextColor = "rgb(0, 0, 0);";

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
