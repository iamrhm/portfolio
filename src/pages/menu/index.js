import React, { useReducer, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/header";
import Slider from "../../components/slider";
import { menuOpen, menuClose, menuInitial } from "../../config/animation";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-menu":
			return {
				isActive: !state.isActive,
				activeAnimation: !state.isActive ? menuOpen : menuClose
			};
		case "load-menu":
			return {
				isActive: false,
				activeAnimation: menuInitial
			};
		default:
			return { isActive: false, activeAnimation: {} };
	}
}

const InitialState = {
	isActive: false,
	activeAnimation: {}
};

function MenuPage({ history }) {
	const [state, dispatch] = useReducer(reducer, InitialState);

	history.listen((location, action) => {
		dispatch({ type: "load-menu" });
	});

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

export default withRouter(MenuPage);
