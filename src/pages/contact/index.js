import React, { useContext } from "react";

import { PortfolioContext } from "../../context";

import { Container, Heading, HeaderText, StyledPara } from "./style";

import Animate from "../../components/animate-wrapper";
import { HEADERAnimation, bulbAnimation } from "../../config/animation";
import ContactForm from "../../components/forms/contact-form";

function ContactPage() {
	const { contact } = useContext(PortfolioContext);
	return (
		<React.Fragment>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>Contact me</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={bulbAnimation}>
					<StyledPara>{contact.firstText}</StyledPara>
				</Animate>
				<ContactForm />
			</Container>
		</React.Fragment>
	);
}

export default ContactPage;
