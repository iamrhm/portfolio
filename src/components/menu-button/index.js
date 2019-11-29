import React, { useReducer } from "react";

import { StyledButton } from "./style";
import MenuPage from "../../pages/menu";

function reducer(state, action) {}

function init(initialState) {
	return Object.assign({}, initialState, { isActive: false });
}

function MenuButton({ initialState }) {
	const [state, dispatch] = useReducer(reducer, initialState, init);

	return (
		<React.Fragment>
			{state.isActive ? <StyledButton /> : <MenuPage />}
		</React.Fragment>
	);
}

export default MenuButton;

function StyledButton() {
	return <div></div>;
}
