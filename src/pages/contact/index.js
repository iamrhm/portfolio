import React, { useContext } from "react";

import { PortfolioContext } from "../../context";

import { Container, Heading, HeaderText, StyledPara } from "./style";

import Animate from "../../components/animate-wrapper";
import { HEADERAnimation, blinkAnimation } from "../../config/animation";
import ContactForm from "../../components/forms/contact-form";

import WrapperLoader from "../../components/loader";

function ContactPage() {
	const { contact } = useContext(PortfolioContext);
	return (
		<WrapperLoader>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeaderText>Contact me</HeaderText>
					</Animate>
				</Heading>
				<Animate animeProps={blinkAnimation}>
					<StyledPara>{contact.firstText}</StyledPara>
				</Animate>
				<ContactForm />
			</Container>
		</WrapperLoader>
	);
}

export default ContactPage;
