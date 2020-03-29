import React, { useContext } from "react";
import {
	Container,
	Heading,
	StyledPara,
	FormContainer,
	BodyContainer,
	StyledTitle,
	Banner,
	ButtonContainer,
	StyledEmail,
	EmailAddress,
	HeadingText,
	TitleText
} from "./style";

import { PortfolioContext } from "../../context";
import ContactForm from "../../components/forms/contact";
import FloatingScreen from "../../components/dummies/background-screen/floating";
import ResumeButton from "../../components/resume-button";

function ContactPage() {
	const { contact } = useContext(PortfolioContext);
	return (
		<Container>
			<FloatingScreen />
			<FormContainer>
				<Heading>
					<HeadingText>{contact.header}</HeadingText>
				</Heading>
				<BodyContainer>
					<StyledPara>{contact.firstText}</StyledPara>
					<ContactBanner contact={contact} />
					<StyledPara>{contact.secondText}</StyledPara>
					<ContactForm />
				</BodyContainer>
			</FormContainer>
		</Container>
	);
}

export default ContactPage;

export const ContactBanner = ({ contact }) => {
	return (
		<Banner>
			<StyledTitle>
				<TitleText>{contact.titleText}</TitleText>
			</StyledTitle>
			<ButtonContainer>
				<ResumeButton />
			</ButtonContainer>
			<StyledEmail>
				Or You can drop me a mail on,
				<EmailAddress>{contact.email}</EmailAddress>
			</StyledEmail>
		</Banner>
	);
};
