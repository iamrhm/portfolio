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
	CrossIcon,
	ReloadIcon
} from "./style";

import AnimeWrapper from "../anime-wrapper";
import { buttonAnimation, inputAnimation, successAnimation } from "./animation";
import { validateEmail } from "./utils";

function reducer(state, action) {
	switch (action.type) {
		case "hide-resume-btn-and-show-input":
			return { ...state, showResumeButton: false, showInput: true, email: "" };
		case "hide-input-and-show-resume-btn":
			return { ...state, showResumeButton: true, showInput: false };
		case "hide-success-and-show-resume-btn":
			return { ...state, showResumeButton: true, isSuccess: false };
		case "update-firstRender":
			return { ...state, firstRender: false };
		case "handle-input":
			return { ...state, email: action.payload };
		case "show-success-and-hide-input":
			return { ...state, isSuccess: true, showInput: false };
		default:
			return state;
	}
}

const initialState = {
	showResumeButton: true,
	showInput: false,
	isSuccess: false,
	firstRender: true,
	email: ""
};

export default function() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClick = (e, source) => {
		if (source === "resume-btn") {
			if (state.firstRender) {
				dispatch({ type: "update-firstRender" });
			}
			dispatch({ type: "hide-resume-btn-and-show-input" });
		} else if (source === "submit-btn") {
			if (validateEmail(state.email)) {
				dispatch({ type: "show-success-and-hide-input" });
			} else {
				dispatch({ type: "hide-input-and-show-resume-btn" });
			}
		} else if (source === "success-btn") {
			dispatch({ type: "hide-success-and-show-resume-btn" });
		}
	};

	const handleInput = e => {
		let newEmail = e.target.value.trim();
		dispatch({ type: "handle-input", payload: newEmail });
	};

	return (
		<Wrapper>
			<ResumeButton state={state} handleClick={handleClick} />

			<EmailInput
				state={state}
				handleInput={handleInput}
				handleClick={handleClick}
			/>

			<SuccessMsg state={state} handleClick={handleClick} />
		</Wrapper>
	);
}

const ResumeButton = ({ state, handleClick }) => {
	const animeProps =
		state.showResumeButton &&
		!state.showInput &&
		!state.isSuccess &&
		!state.firstRender
			? buttonAnimation.in
			: !state.showResumeButton && state.showInput && !state.isSuccess
			? buttonAnimation.out
			: "";
	return (
		<AnimeWrapper animeProps={animeProps}>
			<ButtonWrapper>
				<StyledButton
					onClick={e => {
						handleClick(e, "resume-btn");
					}}
				>
					Ask for Resume
				</StyledButton>
			</ButtonWrapper>
		</AnimeWrapper>
	);
};

const EmailInput = ({ state, handleInput, handleClick }) => {
	const animeProps =
		!state.showResumeButton && state.showInput && !state.isSuccess
			? inputAnimation.in
			: !state.showInput &&
			  (state.showResumeButton || state.isSuccess) &&
			  !state.firstRender
			? inputAnimation.out
			: "";
	return (
		<AnimeWrapper animeProps={animeProps}>
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
						handleClick(e, "submit-btn");
					}}
				>
					<ButtonIcon email={state.email} />
				</IconButtonWrapper>
			</InputControl>
		</AnimeWrapper>
	);
};

const SuccessMsg = ({ state, handleClick }) => {
	const animeProps =
		!state.showResumeButton && !state.showInput && state.isSuccess
			? successAnimation.in
			: !state.showInput &&
			  !state.isSuccess &&
			  !state.firstRender &&
			  state.showResumeButton &&
			  validateEmail(state.email)
			? successAnimation.out
			: "";

	return (
		<AnimeWrapper animeProps={animeProps}>
			<SuccessLabel>
				Please check you mail box
				<IconButtonWrapper
					onClick={e => {
						handleClick(e, "success-btn");
					}}
				>
					<ReloadIcon />
				</IconButtonWrapper>
			</SuccessLabel>
		</AnimeWrapper>
	);
};

const ButtonIcon = ({ email }) => {
	if (validateEmail(email)) {
		return <CheckIcon />;
	} else {
		return <CrossIcon />;
	}
};
