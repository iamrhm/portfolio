import React from "react";
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

function ExperienceSection() {
	const Experiences = [
		{
			clientDetails: "Norway based Insurance Project",
			company_timeline: "Cognizant 2018 March - 2019 Nov",
			project_details: "Worked on React, Redux, TypeScript"
		},
		{
			clientDetails: "USA based Retail Project",
			company_timeline: "Cognizant 2019 Dec - Working",
			project_details: "Worked on JS, GraphQl, JQuery"
		}
	];
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
