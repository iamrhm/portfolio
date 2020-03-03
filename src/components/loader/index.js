import React, { useReducer, useEffect } from "react";
import {
	LoaderContainer,
	StyledText,
	BannerContainer,
	StyledSvg,
	StyledPath
} from "./style";
import { withRouter } from "react-router-dom";

import { blinkAnimation, loaderAnimation } from "./animation";
import AnimeWrapper from "../anime-wrapper";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-loader":
			return { ...state, showLoader: !state.showLoader };
		case "show-loader":
			return { ...state, showLoader: true };
		case "close-loader":
			return { ...state, showLoader: false };
		default:
			return state;
	}
}

const InitialState = {
	showLoader: true
};

const WrapperLoader = ({ children, history }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		let interval = setTimeout(() => {
			dispatch({ type: "toggle-loader" });
		}, 3000);
		return () => {
			clearTimeout(interval);
		};
	}, []);

	history.listen((location, action) => {
		dispatch({ type: "show-loader" });
		setTimeout(() => {
			dispatch({ type: "close-loader" });
		}, 3000);
	});

	if (state.showLoader) {
		return (
			<LoaderContainer>
				<LoaderLogo />
				<br />
				<AnimeWrapper animeProps={{ ...blinkAnimation, delay: 1000 }}>
					<StyledText>loading</StyledText>
				</AnimeWrapper>
			</LoaderContainer>
		);
	} else {
		return children;
	}
};

export default withRouter(WrapperLoader);

const LoaderLogo = () => {
	return (
		<BannerContainer>
			<StyledSvg viewBox="0 0 34 55">
				<AnimeWrapper animeProps={loaderAnimation.letter}>
					<StyledPath d="M32.382 1.61L32.452 1.14214L31.9887 1.0464C30.2195 0.680783 28.2318 0.5 26.0288 0.5C22.8576 0.5 19.943 1.39375 17.2969 3.17625C14.8822 4.80292 12.8008 7.05054 11.0473 9.90408L10.2923 1.84678L10.2498 1.39343H9.79449H3.66748H3.16748V1.89343V50.8532V51.3532H3.66748H11.0915H11.5915V50.8532V24.5865C11.5915 19.897 12.9587 16.0131 15.6715 12.8993C18.4175 9.78163 21.6834 8.24537 25.4922 8.24537C26.9966 8.24537 28.7481 8.46236 30.7513 8.90373L31.2742 9.01895L31.3534 8.48938L32.382 1.61Z" />
				</AnimeWrapper>
				<AnimeWrapper animeProps={loaderAnimation.line}>
					<StyledPath d="M29.7145 4.62275L29.7845 4.1549L29.3212 4.05916C27.552 3.69354 25.5644 3.51276 23.3614 3.51276C20.1902 3.51276 17.2755 4.40651 14.6294 6.18901C12.2147 7.81567 10.1334 10.0633 8.37983 12.9168L7.62483 4.85954L7.58235 4.40618H7.12701H1H0.5V4.90618V53.866V54.366H1H8.42397H8.92397V53.866V27.5992C8.92397 22.9097 10.2912 19.0258 13.0041 15.9121C15.75 12.7944 19.0159 11.2581 22.8247 11.2581C24.3291 11.2581 26.0806 11.4751 28.0838 11.9165L28.6067 12.0317L28.6859 11.5021L29.7145 4.62275Z" />
				</AnimeWrapper>
			</StyledSvg>
		</BannerContainer>
	);
};
