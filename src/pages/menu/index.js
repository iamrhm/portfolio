import React, { useReducer } from "react";
import {
	HeaderContainer,
	MessageBox,
	Message,
	StyledLink,
	Slider,
	MenuContainer
} from "./style";

import Animate from "../../components/animate-wrapper";

import Header from "../../components/header";
import {menuOpen,menuClose} from '../../config/animation'

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
	console.log(state.activeAnimation.slider);
	return (
		<React.Fragment>
			<HeaderContainer>
				<Header
					isActive={state.isActive}
					onClick={e => {
						e.preventDefault();
						dispatch({ type: "toggle-menu" });
					}}
				/>
			</HeaderContainer>
			<Animate animeProps={state.activeAnimation.slider}>
				<Slider>
					<MenuContainer/>
				</Slider>
			</Animate>
		</React.Fragment>
	);
}

export default MenuPage;
