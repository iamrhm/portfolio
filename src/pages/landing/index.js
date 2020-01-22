import React, { useReducer, useRef } from "react";

import {
	Container,
	BannerContainer,
	TitleContainer,
	WrapperClone
} from "./style";

import BannerLogo from "../../components/banner";
import TitleSection from "../../components/title-section";
import InfoSection from "../../components/info-section";

function reducer(state, { type, payload }) {
	switch (type) {
		case "update-coordinate":
			return { ...state, x: payload.offsetX, y: payload.offsetY };
		default:
			return state;
	}
}
const InitialState = {
	x: 0,
	y: 0
};

const LandingPage = () => {
	const inputEl = useRef(null);
	const [state, dispatch] = useReducer(reducer, InitialState);
	const { x, y } = state;
	const maskStyle = {
		"--maskX": x,
		"--maskY": y
	};
	function _onMouseMove(e) {
		e.preventDefault();
		const width = inputEl.current.clientWidth;
		const height = inputEl.current.clientHeight;

		const oX = Math.floor((e.nativeEvent.offsetX / width) * 100);
		const oY = Math.floor((e.nativeEvent.offsetY / height) * 100);

		dispatch({
			type: "update-coordinate",
			payload: { offsetX: oX, offsetY: oY }
		});
	}

	function _onTouchMove(e) {
		const width = inputEl.current.clientWidth;
		const height = inputEl.current.clientHeight;

		let oX = Math.floor((e.touches[0].clientX / width) * 100);
		let oY = Math.floor((e.touches[0].clientY / height) * 100);

		oY = oY > 100 ? oY % 70 : oY;

		dispatch({
			type: "update-coordinate",
			payload: { offsetX: oX, offsetY: oY }
		});
	}

	function _onMouseLeave(e) {
		dispatch({
			type: "update-coordinate",
			payload: { offsetX: 0, offsetY: 0 }
		});
	}

	return (
		<React.Fragment>
			<BannerContainer>
				<BannerLogo />
			</BannerContainer>
			<Container>
				<TitleContainer
					ref={inputEl}
					onMouseMove={e => _onMouseMove(e)}
					onTouchMove={e => _onTouchMove(e)}
					onMouseLeave={e => _onMouseLeave(e)}
					onTouchEnd={e => _onMouseLeave(e)}
					style={maskStyle}
				>
					<TitleSection />
					{addClone(<TitleSection />)}
				</TitleContainer>
				<InfoSection />
			</Container>
		</React.Fragment>
	);
};

export default LandingPage;

function addClone(children) {
	return <WrapperClone>{children}</WrapperClone>;
}
