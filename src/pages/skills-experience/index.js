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

function SkillsAndExperience() {
	return (
		<Container>
			<Heading>
				<HeadingText>Skills & Experience</HeadingText>
			</Heading>
			<SubSection>
				<StyledPara>
					The main area of my expertise is front end development (client side of
					the web).
				</StyledPara>
				<StyledPara>
					HTML, CSS, JS (TypeScript), building small and medium web apps with
					Angular 2+, custom plugins, features, animations, and coding
					interactive layouts.
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
		</Container>
	);
}

export default SkillsAndExperience;
