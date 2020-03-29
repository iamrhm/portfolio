import React, { useReducer } from "react";

import {
	StyledButton,
	Wrapper,
	StyledInput,
	ButtonWrapper,
	IconButtonWrapper,
	InputControl,
	SuccessLabel,
	CheckIcon,
	CrossIcon
} from "./style";

import AnimeWrapper from "../anime-wrapper";
import { buttonAnimation, inputAnimation, successAnimation } from "./animation";
import { validateEmail } from "./utils";

function reducer(state, action) {
	switch (action.type) {
		case "toggle-showInput":
			return {
				...state,
				showInput: !state.showInput
			};
		case "update-firstRender":
			return {
				...state,
				firstRender: false
			};
		case "handle-input":
			return { ...state, email: action.payload };
		case "toggle-submit-button":
			return { ...state, isValidEmail: action.payload };
		case "update-isSuccess":
			return { ...state, isSuccess: !state.isSuccess, showInput: false };
		default:
			return state;
	}
}

const initialState = {
	showInput: false,
	email: "",
	isSuccess: false,
	isValidEmail: false,
	firstRender: true
};

export default function() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClick = (e, source) => {
		if (source === "resume-button") {
			if (state.firstRender) {
				dispatch({ type: "update-firstRender" });
			}
			dispatch({ type: "toggle-showInput" });
		} else if (source === "submit-button") {
			if (validateEmail(state.email)) {
				dispatch({ type: "update-isSuccess" });
			} else {
				dispatch({ type: "toggle-showInput" });
			}
		} else if (source === "close-button") {
			dispatch({ type: "update-isSuccess" });
		}
	};

	const handleInput = e => {
		let newEmail = e.target.value.trim();
		dispatch({ type: "handle-input", payload: newEmail });
		handleIconChange(newEmail);
	};

	const handleIconChange = email => {
		if (validateEmail(email)) {
			dispatch({ type: "toggle-submit-button", payload: true });
		} else {
			dispatch({ type: "toggle-submit-button", payload: false });
		}
	};

	return (
		<Wrapper>
			<AnimeWrapper
				animeProps={
					state.showInput && !state.isSuccess
						? buttonAnimation.start
						: !state.showInput && !state.isSuccess
						? buttonAnimation.end
						: ""
				}
			>
				<ButtonWrapper>
					<StyledButton
						onClick={e => {
							handleClick(e, "resume-button");
						}}
					>
						Ask for Resume
					</StyledButton>
				</ButtonWrapper>
			</AnimeWrapper>

			<AnimeWrapper
				animeProps={
					state.showInput && !state.isSuccess
						? inputAnimation.start
						: !state.showInput && state.isSuccess
						? inputAnimation.end
						: ""
				}
			>
				<InputControl>
					<StyledInput
						name="email"
						type="email"
						value={state.email}
						placeholder="Enter your email address"
						onChange={e => handleInput(e)}
					/>
					<IconButtonWrapper
						onClick={e => {
							handleClick(e, "submit-button");
						}}
					>
						<ButtonIcon buttonState={state.isValidEmail} />
					</IconButtonWrapper>
				</InputControl>
			</AnimeWrapper>

			<AnimeWrapper
				animeProps={
					!state.showInput && state.isSuccess
						? successAnimation.start
						: !state.showInput && !state.isSuccess && !state.firstRender
						? successAnimation.end
						: ""
				}
			>
				<SuccessLabel>
					Please check you mail box
					<IconButtonWrapper
						onClick={e => {
							handleClick(e, "close-button");
						}}
					>
						<CrossIcon />
					</IconButtonWrapper>
				</SuccessLabel>
			</AnimeWrapper>
		</Wrapper>
	);
}

const ButtonIcon = ({ buttonState }) => {
	if (buttonState) {
		return <CheckIcon />;
	} else {
		return <CrossIcon />;
	}
};
