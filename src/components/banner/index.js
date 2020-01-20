import React, { useReducer, useEffect } from "react";

import Animate from "../animate-wrapper";
import { svgAnimation, R_TEXT_Animation } from "../../config/animation";

import {
	BannerContainer,
	MobileBanner,
	MobileRLogo,
	DesktopBanner,
	DesktopRLogo,
	StyledPath
} from "./style";

function reducer(state, { type }) {
	switch (type) {
		case "toggle-mask":
			return { ...state, applyMask: !state.applyMask };
		case "resize-icon":
			return { ...state, switchToDeskTop: window.innerWidth >= 990 };
		default:
			return state;
	}
}
const InitialState = {
	applyMask: false,
	switchToDeskTop: false
};

const BannerLogo = () => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	function updateWindowWidth() {
		dispatch({ type: "resize-icon" });
	}

	useEffect(() => {
		updateWindowWidth();
		window.addEventListener("resize", updateWindowWidth);
		return () => {
			window.removeEventListener("resize", updateWindowWidth);
		};
	}, []);

	return (
		<BannerContainer
			onMouseEnter={() => dispatch({ type: "toggle-mask" })}
			onMouseLeave={() => dispatch({ type: "toggle-mask" })}
			onTouchStart={() => dispatch({ type: "toggle-mask" })}
			onTouchEnd={() => dispatch({ type: "toggle-mask" })}
		>
			{state.switchToDeskTop ? (
				<DesktopBannerLogo applyMask={state.applyMask} />
			) : (
				<MobileBannerLogo applyMask={state.applyMask} />
			)}
		</BannerContainer>
	);
};

export default BannerLogo;

const DesktopBannerLogo = ({ applyMask }) => {
	return (
		<React.Fragment>
			<DesktopBanner width="100%" height="100%" applyMask={applyMask}>
				<Animate animeProps={svgAnimation}>
					<StyledPath d="M13.8571 101.5H14.3571V101V30.996V30.496H13.8571H2H1.5V30.996V101V101.5H2H13.8571ZM13.2485 17.7755L13.2485 17.7755L13.2553 17.7697C14.7778 16.4552 15.5 14.5083 15.5 12.0259C15.5 9.5447 14.7781 7.61377 13.2485 6.34029C11.772 5.11109 10.0141 4.5 8 4.5C5.8992 4.5 4.11283 5.10629 2.67698 6.34287C1.19118 7.57879 0.5 9.51443 0.5 12.0259C0.5 14.5029 1.19508 16.448 2.66671 17.7639L2.66666 17.764L2.67349 17.7699C4.10993 19.0085 5.89749 19.6158 8 19.6158C10.0141 19.6158 11.772 19.0047 13.2485 17.7755Z" />
					<StyledPath d="M82.6976 99.8271L82.7884 100.213H83.1843H92H92.5V99.7125V51.5608C92.5 43.235 90.2049 37.0777 85.5098 33.2152C80.8882 29.374 73.8214 27.5 64.4061 27.5C59.7324 27.5 55.0598 28.041 50.3889 29.1222L50.3878 29.1225C45.7678 30.2031 41.5033 31.6956 37.5965 33.6018L37.1619 33.8138L37.3592 34.2552L41.0145 42.4307L41.2167 42.883L41.6709 42.6849C49.8963 39.0978 57.2329 37.3192 63.6894 37.3192C69.4579 37.3192 73.5268 38.6377 76.0197 41.1618L76.0196 41.1618L76.0258 41.1678C78.5676 43.6546 79.8891 47.5756 79.8891 53.0414V56.9331L67.0445 57.3053C67.0443 57.3053 67.0442 57.3053 67.044 57.3053C54.327 57.6495 44.7119 59.6925 38.2609 63.4897C31.7714 67.3096 28.5 72.899 28.5 80.2072C28.5 86.9806 30.7448 92.2626 35.2768 95.9792L35.2789 95.9809C39.8391 99.6804 46.0801 101.5 53.942 101.5C59.8113 101.5 64.7291 100.723 68.6768 99.1469L68.6793 99.1459C72.6281 97.5456 76.5443 94.5546 80.433 90.2117L82.6976 99.8271ZM73.398 86.3295L73.3959 86.3313C69.3085 89.8774 63.6332 91.6808 56.3072 91.6808C51.6914 91.6808 48.1584 90.6863 45.6475 88.7599C43.2121 86.8552 41.971 84.0746 41.971 80.336C41.971 77.9397 42.475 75.8882 43.4637 74.1633C44.4517 72.4394 45.9396 71.0143 47.95 69.8935L47.9512 69.8928C52.0462 67.5941 58.777 66.2652 68.2206 65.9654L68.2237 65.9653L79.6024 65.5343V71.388C79.6024 77.836 77.5204 82.7933 73.398 86.3295Z" />
					<StyledPath d="M204.605 101V101.5H205.105H217H217.5V101V55.5116C217.5 46.534 215.262 39.9011 210.674 35.7389C206.15 31.5494 199.366 29.5 190.415 29.5C184.667 29.5 179.528 30.5724 175.009 32.7298C170.59 34.8388 167.174 37.7015 164.783 41.3243C160.836 33.3906 152.629 29.5 140.399 29.5C135.271 29.5 130.612 30.4667 126.43 32.4094L126.428 32.4104C122.428 34.2902 119.278 36.8856 116.994 40.2002L115.164 31.1731L115.083 30.7724H114.674H105H104.5V31.2724V101V101.5H105H116.895H117.395V101V64.4185C117.395 55.4256 119.111 49.0871 122.431 45.2799C125.789 41.4402 131.095 39.4704 138.464 39.4704C144.076 39.4704 148.098 40.8526 150.642 43.5148L150.645 43.5176C153.196 46.1465 154.517 50.1548 154.517 55.6389V101V101.5H155.017H166.912H167.412V101V62.0645C167.412 54.281 169.167 48.6185 172.579 44.9744C175.985 41.3376 181.297 39.4704 188.624 39.4704C194.187 39.4704 198.186 40.8519 200.731 43.5148L200.733 43.5176C203.284 46.1465 204.605 50.1548 204.605 55.6389V101Z" />
					<StyledPath d="M342.721 101V101.5H343.221H355H355.5V101V55.0488C355.5 46.0554 353.088 39.3968 348.159 35.1967C343.3 30.9736 336.042 28.9062 326.474 28.9062C320.926 28.9062 315.957 29.9026 311.578 31.9075C307.436 33.783 304.178 36.346 301.823 39.603C302.128 37.3125 302.279 34.5332 302.279 31.2699V1V0.5H301.779H290H289.5V1V101V101.5H290H301.779H302.279V101V64.1748C302.279 55.0542 304.142 48.6119 307.751 44.7218C311.403 40.8356 317.226 38.8393 325.338 38.8393C331.424 38.8393 335.789 40.24 338.542 42.9381C341.297 45.6381 342.721 49.7703 342.721 55.4344V101Z" />
					<StyledPath d="M468.605 101V101.5H469.105H481H481.5V101V55.5116C481.5 46.534 479.262 39.9011 474.674 35.7389C470.15 31.5494 463.366 29.5 454.415 29.5C448.667 29.5 443.528 30.5724 439.009 32.7298C434.59 34.8388 431.174 37.7015 428.783 41.3243C424.836 33.3906 416.629 29.5 404.399 29.5C399.271 29.5 394.612 30.4667 390.43 32.4094L390.428 32.4104C386.428 34.2902 383.278 36.8856 380.994 40.2002L379.164 31.1731L379.083 30.7724H378.674H369H368.5V31.2724V101V101.5H369H380.895H381.395V101V64.4185C381.395 55.4256 383.111 49.0871 386.431 45.2799C389.789 41.4402 395.095 39.4704 402.464 39.4704C408.076 39.4704 412.098 40.8526 414.642 43.5148L414.645 43.5176C417.196 46.1465 418.517 50.1548 418.517 55.6389V101V101.5H419.017H430.912H431.412V101V62.0645C431.412 54.281 433.167 48.6185 436.579 44.9744C439.985 41.3376 445.297 39.4704 452.624 39.4704C458.187 39.4704 462.186 40.8519 464.731 43.5148L464.733 43.5176C467.284 46.1465 468.605 50.1548 468.605 55.6389V101Z" />
					<StyledPath d="M276.493 30.846L276.574 30.361L276.091 30.2717C273.297 29.7561 270.152 29.5 266.658 29.5C261.672 29.5 257.09 30.7535 252.921 33.2615C248.89 35.687 245.435 39.0997 242.554 43.4859L241.267 31.2202L241.22 30.7724H240.77H231H230.5V31.2724V101V101.5H231H242.838H243.338V101V63.5914C243.338 56.8841 245.528 51.3081 249.899 46.8277C254.323 42.3411 259.615 40.1066 265.802 40.1066C268.233 40.1066 271.052 40.4197 274.263 41.0515L274.768 41.1508L274.853 40.6435L276.493 30.846Z" />
				</Animate>
			</DesktopBanner>

			<DesktopRLogo width="100%" height="100%">
				<Animate animeProps={R_TEXT_Animation}>
					<StyledPath d="M280.493 25.8556L280.573 25.3728L280.092 25.2827C277.298 24.7598 274.152 24.5 270.658 24.5C265.671 24.5 261.088 25.7715 256.919 28.3151C252.888 30.7743 249.435 34.2337 246.555 38.6793L245.268 26.2389L245.221 25.7903H244.77H235H234.5V26.2903V97V97.5H235H246.838H247.338V97V59.0645C247.338 52.259 249.53 46.6018 253.901 42.0573C258.326 37.5069 263.618 35.2419 269.802 35.2419C272.233 35.2419 275.051 35.5593 278.262 36.2L278.769 36.3012L278.853 35.7911L280.493 25.8556Z" />
				</Animate>
			</DesktopRLogo>
		</React.Fragment>
	);
};

const MobileBannerLogo = ({ applyMask }) => (
	<React.Fragment>
		<MobileBanner width="100%" height="100%" applyMask={applyMask}>
			<Animate animeProps={svgAnimation}>
				<StyledPath d="M9.64384 71.5H10.1438V71V22.0402V21.5402H9.64384H2.21987H1.71987V22.0402V71V71.5H2.21987H9.64384ZM9.40294 12.8914L9.403 12.8914L9.40953 12.8851C10.4049 11.9252 10.8594 10.5223 10.8594 8.77282C10.8594 7.0248 10.4055 5.63127 9.40294 4.69895C8.44476 3.80788 7.29411 3.35897 5.97658 3.35897C4.60803 3.35897 3.43783 3.80247 2.50248 4.70174C1.5269 5.60896 1.09375 7.00673 1.09375 8.77282C1.09375 10.5178 1.53085 11.9183 2.49264 12.879L2.49258 12.879L2.49913 12.8853C3.43503 13.7868 4.60639 14.2313 5.97658 14.2313C7.29411 14.2313 8.44476 13.7824 9.40294 12.8914Z" />
				<StyledPath d="M52.2674 69.9273L52.3513 70.3237H52.7565H58.2574H58.7574V69.8237V36.4095C58.7574 30.6209 57.3244 26.3021 54.3472 23.5781C51.4137 20.8668 46.9434 19.5598 41.0392 19.5598C38.1037 19.5598 35.1698 19.9377 32.2383 20.6923L32.2371 20.6927C29.3386 21.4466 26.6618 22.4883 24.2086 23.8194L23.8169 24.0319L23.9831 24.4454L26.264 30.1187L26.4639 30.6159L26.9461 30.382C32.0618 27.9009 36.607 26.6798 40.592 26.6798C44.1551 26.6798 46.6267 27.5841 48.134 29.2814L48.134 29.2814L48.1398 29.2877C49.6881 30.9724 50.5124 33.6534 50.5124 37.4369V39.9904L42.6789 40.2428C42.6786 40.2428 42.6783 40.2429 42.6781 40.2429C34.7257 40.4823 28.6801 41.9032 24.6093 44.5681C20.5027 47.2563 18.4462 51.1851 18.4462 56.2882C18.4462 61.0081 19.8525 64.7156 22.7237 67.3341L22.7257 67.3359C25.6153 69.9429 29.5643 71.2171 34.5097 71.2171C38.1923 71.2171 41.2931 70.6749 43.7913 69.5659L43.7938 69.5648C46.2069 68.4772 48.5849 66.4864 50.9347 63.6346L52.2674 69.9273ZM46.508 60.4383L46.506 60.4402C43.9986 62.8593 40.5136 64.0971 35.9855 64.0971C33.1412 64.0971 30.9906 63.4165 29.4691 62.1186C27.9965 60.8373 27.2279 58.9521 27.2279 56.3776C27.2279 53.1007 28.4556 50.7576 30.8823 49.2531L30.8836 49.2523C33.3918 47.6864 37.5449 46.7659 43.4271 46.5582L43.4305 46.5581L50.3335 46.2673V50.1683C50.3335 54.6234 49.0397 58.0231 46.508 60.4383Z" />
				<StyledPath d="M128.822 70.866V71.366H129.322H136.746H137.246V70.866V38.926C137.246 32.6155 135.849 27.9175 132.945 24.953C130.076 21.9632 125.779 20.5128 120.154 20.5128C116.534 20.5128 113.29 21.273 110.436 22.8058C107.765 24.24 105.676 26.1653 104.18 28.5814C102.956 25.9837 101.122 24.0014 98.6827 22.6524C96.0833 21.2151 92.8255 20.5128 88.9372 20.5128C85.7037 20.5128 82.7609 21.199 80.1188 22.5798L80.1167 22.581C77.7442 23.8356 75.8461 25.5381 74.4314 27.6863L73.3738 21.8175L73.2997 21.4062H72.8817H66.8442H66.3442V21.9062V70.866V71.366H66.8442H74.2681H74.7681V70.866V45.18C74.7681 38.8687 75.8408 34.4524 77.8831 31.8172C79.9369 29.1757 83.1809 27.8114 87.7297 27.8114C91.1888 27.8114 93.6324 28.7674 95.1751 30.5834L95.1775 30.5863C96.7368 32.394 97.5606 35.1733 97.5606 39.0153V70.866V71.366H98.0606H105.485H105.985V70.866V43.5271C105.985 38.069 107.08 34.1277 109.178 31.6071C111.26 29.1063 114.509 27.8114 119.036 27.8114C122.463 27.8114 124.893 28.7665 126.436 30.5835L126.439 30.5863C127.998 32.394 128.822 35.1733 128.822 39.0153V70.866Z" />
				<StyledPath d="M176.715 22.61L176.784 22.1421L176.321 22.0464C174.552 21.6808 172.564 21.5 170.361 21.5C167.19 21.5 164.275 22.3938 161.629 24.1763C159.215 25.8029 157.133 28.0505 155.38 30.9041L154.625 22.8468L154.582 22.3934H154.127H148H147.5V22.8934V71.8532V72.3532H148H155.424H155.924V71.8532V45.5865C155.924 40.897 157.291 37.0131 160.004 33.8993C162.75 30.7816 166.016 29.2454 169.825 29.2454C171.329 29.2454 173.081 29.4624 175.084 29.9037L175.607 30.0189L175.686 29.4894L176.715 22.61Z" />
				<StyledPath d="M215.181 70.5086V71.0086H215.681H223.105H223.605V70.5086V38.5686C223.605 32.3061 222.084 27.6328 218.933 24.6705C215.823 21.6902 211.19 20.2447 205.127 20.2447C201.601 20.2447 198.437 20.9433 195.645 22.3528C193.245 23.5515 191.31 25.1505 189.851 27.151C189.993 25.6958 190.063 23.9913 190.063 22.0402V1V0.5H189.563H182.139H181.639V1V70.5086V71.0086H182.139H189.563H190.063V70.5086V44.9119C190.063 38.5784 191.238 34.1395 193.478 31.4762C195.735 28.8286 199.339 27.4541 204.411 27.4541C208.211 27.4541 210.898 28.4173 212.586 30.2419C214.286 32.0786 215.181 34.9114 215.181 38.8366V70.5086Z" />
				<StyledPath d="M293.67 70.866V71.366H294.17H301.594H302.094V70.866V38.926C302.094 32.6155 300.697 27.9175 297.793 24.953C294.924 21.9632 290.627 20.5128 285.002 20.5128C281.382 20.5128 278.138 21.273 275.284 22.8058C272.613 24.24 270.524 26.1653 269.028 28.5814C267.804 25.9837 265.97 24.0014 263.531 22.6524C260.931 21.2151 257.673 20.5128 253.785 20.5128C250.552 20.5128 247.609 21.199 244.967 22.5798L244.965 22.581C242.592 23.8356 240.694 25.5381 239.279 27.6863L238.222 21.8175L238.148 21.4062H237.73H231.692H231.192V21.9062V70.866V71.366H231.692H239.116H239.616V70.866V45.18C239.616 38.8687 240.689 34.4524 242.731 31.8172C244.785 29.1757 248.029 27.8114 252.578 27.8114C256.037 27.8114 258.48 28.7674 260.023 30.5834L260.026 30.5863C261.585 32.394 262.409 35.1733 262.409 39.0153V70.866V71.366H262.909H270.333H270.833V70.866V43.5271C270.833 38.069 271.928 34.1277 274.026 31.6071C276.108 29.1063 279.357 27.8114 283.884 27.8114C287.311 27.8114 289.741 28.7665 291.284 30.5835L291.287 30.5863C292.846 32.394 293.67 35.1733 293.67 39.0153V70.866Z" />
			</Animate>
		</MobileBanner>

		<MobileRLogo width="100%" height="100%">
			<Animate animeProps={R_TEXT_Animation}>
				<StyledPath
					d="M174.047 21.6228L174.117 21.1549L173.654 21.0592C171.885 20.6935 169.897 20.5128 167.694 20.5128C164.523 20.5128 161.608 21.4065 158.962 23.189C156.547 24.8157 154.466 27.0633 152.712 29.9168L151.957 21.8595L151.915 21.4062H151.46H145.333H144.833V21.9062V70.866V71.366H145.333H152.757H153.257V70.866V44.5992C153.257 39.9097 154.624 36.0258 157.337 32.9121C160.083 29.7944 163.348 28.2581 167.157 28.2581C168.662 28.2581 170.413 28.4751 172.416 28.9165L172.939 29.0317L173.018 28.5022L174.047 21.6228Z"
					fill="black"
				/>
			</Animate>
		</MobileRLogo>
	</React.Fragment>
);
