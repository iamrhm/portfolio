import React, { useReducer } from "react";
import { Container, MessageBox, Message, StyledLink } from "./style";

import Animate from "../../components/animate-wrapper";

const menuOpen = {
	translateX: ["100%", "0%"],
	duration: 1000,
	elasticity: 800
};

const menuClose = {
	translateX: ["100%"],
	duration: 500,
	elasticity: 800
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
	return (
		<Animate animeProps={state.activeAnimation}>
			<Container>
				<MessageBox>
					<Message>
						I am still working on this, mean while find more
						<StyledLink>About Me</StyledLink>
					</Message>
				</MessageBox>
			</Container>
		</Animate>
	);
}

export default MenuPage;
