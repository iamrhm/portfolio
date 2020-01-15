import React, { useContext } from "react";
import { Container, Item, Title, LogoContainer } from "./style";
import { getSkillLogo } from "../../assets/logos";
import { PortfolioContext } from "../../context";

function SkillSection() {
	const { skill } = useContext(PortfolioContext);
	const Skills = skill.knownTechnologies;
	return (
		<Container>
			{Skills.map((skill, index) => (
				<Item key={index}>
					<LogoContainer>{getSkillLogo(skill)}</LogoContainer>
					<Title>{skill}</Title>
				</Item>
			))}
		</Container>
	);
}

export default SkillSection;
