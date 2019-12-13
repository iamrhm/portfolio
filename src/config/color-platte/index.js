export const firstTextColor = "#050505";
export const secondTextColor = "#838081";
export const thirdTextColor = "#AAAAAA";

export const contactMeButton = "#050505";

export const primaryBackgroundColor = "rgb(250, 250, 250)";
export const secondaryBackgroundColor = "#ffff";
export const backgroundScreenPrimary = {
	form: "rgb(250, 250, 250,1)",
	to: "rgb(250, 250, 250,0)"
};

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
