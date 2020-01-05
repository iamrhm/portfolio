import React from "react";
import {
	Container,
	Heading,
	SubSection,
	StyledPara,
	HeadingText,
	Header
} from "./style";

import ExperienceSection from "../../components/experience-section";
import SkillSection from "../../components/skill-section";

import Animate from "../../components/animate-wrapper";
import { HEADERAnimation, bulbAnimation } from "../../config/animation";

function SkillsAndExperience() {
	return (
		<Container>
			<Heading>
				<Animate animeProps={HEADERAnimation}>
					<HeadingText>Skills & Experience</HeadingText>
				</Animate>
			</Heading>
			<Animate animeProps={bulbAnimation}>
				<SubSection>
					<StyledPara>
						The main area of my expertise is front end development (client side
						of the web).
					</StyledPara>
					<StyledPara>
						HTML, CSS, JS (TypeScript), building small and medium web apps with
						React, redux, animations, and coding interactive layouts.
					</StyledPara>
				</SubSection>
				<SubSection>
					<Header>Skills</Header>
					<SkillSection />
				</SubSection>
				<SubSection>
					<Header>Experience</Header>
					<ExperienceSection />
				</SubSection>
			</Animate>
		</Container>
	);
}

export default SkillsAndExperience;
