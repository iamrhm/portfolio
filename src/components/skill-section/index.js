import React from "react";
import { Container, Item, Title, LogoContainer } from "./style";
import { getLogo } from "../../assets/logos";

function SkillSection() {
	const Skills = [
		"JavaScript",
		"React",
		"Redux",
		"NodeJS",
		"MongoDB",
		"TypeScript",
		"HTML",
		"CSS"
	];
	return (
		<Container>
			{Skills.map((skill, index) => (
				<Item key={index}>
					<LogoContainer>{getLogo(skill)}</LogoContainer>
					<Title>{skill}</Title>
				</Item>
			))}
		</Container>
	);
}

export default SkillSection;
