import React, { useReducer } from "react";

import {
	StyledInput,
	StyledTextArea,
	InputSection,
	StyledButton,
	RowContainer
} from "./style";

import AnimeWrapper from "../../anime-wrapper";
import { blinkAnimation } from "../../../config/animation";

function reducer(state, { type, payload }) {
	switch (type) {
		case "submit-data":
			console.log(state);
			return state;
		case "edit-form":
			let el = payload;
			return { ...state, [el.name]: el.value };
		default:
			return state;
	}
}

const InitialState = {
	name: "",
	email: "",
	subject: "",
	message: ""
};

const ContactForm = () => {
	const [state, dispatch] = useReducer(reducer, InitialState);
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
							dispatch({ type: "submit-data", payload: null });
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
