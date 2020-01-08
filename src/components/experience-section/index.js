import React, { useContext } from "react";
import {
	Container,
	Card,
	FlowIcon,
	Dot,
	Line,
	Title,
	SubTitle,
	Details
} from "./style";

import { PortfolioContext } from "../../context";

function ExperienceSection() {
	const { skill } = useContext(PortfolioContext);
	const Experiences = skill.experience;
	return (
		<React.Fragment>
			<Container>
				{Experiences.map((experience, index) => {
					return (
						<Card key={index}>
							<FlowIcon>
								<Dot />
								<Line />
							</FlowIcon>
							<Details>
								<Title>{experience.clientDetails}</Title>
								<SubTitle>{experience.company_timeline}</SubTitle>
								<SubTitle>{experience.project_details}</SubTitle>
							</Details>
						</Card>
					);
				})}
			</Container>
			<Card />
		</React.Fragment>
	);
}

export default ExperienceSection;
