import React, { useReducer, useEffect } from "react";

import Header from "../../components/dummies/header";
import Slider from "../../components/menu-utils/slider";
import {
	menuOpen,
	menuClose,
	menuInitial
} from "../../components/menu-utils/animation";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-menu":
			return {
				isActive: !state.isActive,
				currentAnimation: !state.isActive ? menuOpen : menuClose,
				applyMask: state.isActive
			};
		case "load-menu":
			return {
				isActive: false,
				currentAnimation: menuInitial
			};
		case "toggle-mask":
			return { ...state, applyMask: !state.applyMask && !state.isActive };
		case "display-none":
			return { ...state, isActive: false };
		default:
			return { isActive: false, currentAnimation: {} };
	}
}

const InitialState = {
	isActive: false,
	currentAnimation: menuInitial,
	routeLocation: "",
	applyMask: false
};

function Menu() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		dispatch({ type: "load-menu" });
	}, []);

	return (
		<React.Fragment>
			<Header
				isActive={state.isActive}
				currentAnimation={state.currentAnimation}
				onClick={e => {
					e.preventDefault();
					dispatch({ type: "toggle-menu" });
				}}
				toggleMask={() => dispatch({ type: "toggle-mask" })}
				applyMask={state.applyMask}
			/>
			<Slider
				isActive={state.isActive}
				currentAnimation={state.currentAnimation}
				onClick={e => {
					e.preventDefault();
					dispatch({ type: "toggle-menu" });
				}}
				toggleMask={() => dispatch({ type: "toggle-mask" })}
				applyMask={state.applyMask}
			/>
		</React.Fragment>
	);
}

export default Menu;
