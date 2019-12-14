import React, { useReducer } from "react";

import Header from "../../components/header";
import Slider from "../../components/slider";

import { menuOpen, menuClose } from "../../config/animation";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-menu":
			return {
				isActive: !state.isActive,
				activeAnimation: !state.isActive ? menuOpen : menuClose
			};
		default:
			return { isActive: false, activeAnimation: {} };
	}
}

const InitialState = {
	isActive: false,
	activeAnimation: {}
};

function MenuPage({}) {
	const [state, dispatch] = useReducer(reducer, InitialState);
	return (
		<React.Fragment>
			<Header
				isActive={state.isActive}
				activeAnimation={state.activeAnimation}
				onClick={e => {
					e.preventDefault();
					dispatch({ type: "toggle-menu" });
				}}
			/>
			<Slider
				isActive={state.isActive}
				activeAnimation={state.activeAnimation}
				onClick={e => {
					e.preventDefault();
					dispatch({ type: "toggle-menu" });
				}}
			/>
		</React.Fragment>
	);
}

export default MenuPage;
