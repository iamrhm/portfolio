import React, { useContext } from "react";

import { PortfolioContext } from "../../context";

import { Container, Heading, HeaderText, StyledPara } from "./style";

import AnimeWrapper from "../../components/anime-wrapper";
import { HEADERAnimation, blinkAnimation } from "./animation";
import ContactForm from "../../components/forms/contact";

function ContactPage() {
	const { contact } = useContext(PortfolioContext);
	return (
		<Container>
			<Heading>
				<AnimeWrapper animeProps={HEADERAnimation}>
					<HeaderText>Contact me</HeaderText>
				</AnimeWrapper>
			</Heading>
			<AnimeWrapper animeProps={blinkAnimation}>
				<StyledPara>{contact.firstText}</StyledPara>
			</AnimeWrapper>
			<ContactForm />
		</Container>
	);
}

export default ContactPage;
