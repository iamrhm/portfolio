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

const menuOpen = {
	slider: [
		{
			width: "100%",
			delay: 600,
			duration: 200,
			easing: "easeInCirc"
		},
		{
			height: [0, "calc(100% - 42px)"],
			delay: 200,
			duration: 300,
			easing: "easeInCirc"
		}
	]
};

const menuClose = {
	slider: [
		{
			height: ["calc(100% - 42px)", "70%", 0],
			delay: 200,
			duration: 500,
			easing: "easeOutSine"
		},
		{
			width: ["100%", 0],
			delay: 400,
			duration: 200,
			easing: "easeInCirc"
		}
	]
};

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
					{/* <Animate animeProps={state.activeAnimation.slider}> */}
					<MenuContainer></MenuContainer>
					{/* </Animate> */}
				</Slider>
			</Animate>
		</React.Fragment>
	);
}

export default MenuPage;
