import React, { useReducer } from "react";

import {
	StyledInput,
	StyledTextArea,
	InputSection,
	StyledButton,
	RowContainer,
	ErrorMsg
} from "./style";

import AnimeWrapper from "../../anime-wrapper";
import { blinkAnimation } from "./animation";
import { validateEmail, sendEmail } from "./email";

function reducer(state, { type, payload }) {
	switch (type) {
		case "clear-data":
			return { ...state, ...payload };
		case "edit-form":
			let el = payload;
			return { ...state, [el.name]: el.value };
		case "handle-invalid-mail":
			return { ...state, isInvalidEmail: true };
		default:
			return state;
	}
}

const InitialState = {
	name: "",
	email: "",
	subject: "",
	message: "",
	isInvalidEmail: false,
	errorMessage: "Please check your email address"
};

const ContactForm = () => {
	const [state, dispatch] = useReducer(reducer, InitialState);
	function handleFormSubmit() {
		if (validateEmail(state.email)) {
			sendEmail(state);
			dispatch({ type: "clear-data", payload: InitialState });
		} else {
			dispatch({ type: "handle-invalid-mail", payload: null });
		}
	}
	return (
		<form>
			<AnimeWrapper animeProps={blinkAnimation}>
				<InputSection>
					<RowContainer>
						<StyledInput
							name="name"
							type="text"
							value={state.name}
							onChange={e => dispatch({ type: "edit-form", payload: e.target })}
							placeholder="Name"
							size="small"
						/>
						<StyledInput
							name="email"
							type="email"
							value={state.email}
							onChange={e => dispatch({ type: "edit-form", payload: e.target })}
							size="small"
							placeholder="Email"
						/>
					</RowContainer>
					<RowContainer>
						{state.isInvalidEmail ? (
							<ErrorMsg>{state.errorMessage}</ErrorMsg>
						) : (
							""
						)}
					</RowContainer>
					<StyledInput
						name="subject"
						type="text"
						value={state.subject}
						onChange={e => dispatch({ type: "edit-form", payload: e.target })}
						placeholder="Subject"
					/>
					<StyledTextArea
						name="message"
						type="text"
						value={state.message}
						onChange={e => dispatch({ type: "edit-form", payload: e.target })}
						placeholder="Message"
					/>
					<StyledButton
						onClick={e => {
							e.preventDefault();
							handleFormSubmit();
						}}
					>
						SEND
					</StyledButton>
				</InputSection>
			</AnimeWrapper>
		</form>
	);
};

export default ContactForm;
