import React, { useReducer, useEffect } from "react";
import { LoaderContainer, StyledText } from "./style";
import { withRouter } from "react-router-dom";

import { getCustomLogo } from "../../assets/logos";
import { blinkAnimation } from "../../config/animation";
import Anime from "../animate-wrapper";

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

export default withRouter(WrapperLoader);
