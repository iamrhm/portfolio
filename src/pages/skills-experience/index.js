import React, { useContext } from "react";

import { PortfolioContext } from "../../context";

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
import { HEADERAnimation, blinkAnimation } from "../../config/animation";
import WrapperLoader from "../../components/loader";

function SkillsAndExperience() {
	const { skill } = useContext(PortfolioContext);
	return (
		<WrapperLoader>
			<Container>
				<Heading>
					<Animate animeProps={HEADERAnimation}>
						<HeadingText>Skills & Experience</HeadingText>
					</Animate>
				</Heading>
				<Animate animeProps={blinkAnimation}>
					<SubSection>
						<StyledPara>{skill.firstText}</StyledPara>
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
		</WrapperLoader>
	);
}

export default SkillsAndExperience;
