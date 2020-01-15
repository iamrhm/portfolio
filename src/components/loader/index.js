import React, { useReducer, useEffect } from "react";
import { LoaderContainer, StyledText } from "./style";

import { getCustomLogo } from "../../assets/logos";
import { blinkAnimation } from "../../config/animation";
import Anime from "../animate-wrapper";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-loader":
			return { ...state, showLoader: !state.showLoader };
		default:
			return state;
	}
}

const InitialState = {
	showLoader: true
};

const WrapperLoader = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: "toggle-loader" });
		}, 3000);
		return () => {
			clearTimeout();
		};
	}, []);

	if (state.showLoader) {
		return (
			<LoaderContainer>
				{getCustomLogo("loader")}
				<br />
				<Anime animeProps={{ ...blinkAnimation, delay: 1000 }}>
					<StyledText>loading</StyledText>
				</Anime>
			</LoaderContainer>
		);
	} else {
		return children;
	}
};

export default WrapperLoader;
