import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Container,
	Header,
	Slider,
	Item,
	DummyItem,
	ItemText,
	Title,
	SubTitle,
	Avatar,
	Footer
} from "./style";

import FloatingScreen from "../../components/dummies/background-screen/floating";
import RepeatingScreen from "../../components/dummies/background-screen/repeating";
import { maskProjectSVG } from "./animation";

import ProjectSVG from "../../assets/svg/project/project.svg";

function ProjectPage() {
	return (
		<Container>
			<FloatingScreen withShadow={true} shadowDelay={2.5} />
			<Header>
				<RepeatingScreen svgLayer={ProjectSVG} getMaskLayer={maskProjectSVG} />
			</Header>
			<ProjectCarousel />
		</Container>
	);
}

export default ProjectPage;

const ProjectCarousel = () => {
	const [repoList, setState] = useState([]);

	useEffect(() => {
		let isSubscribed = true;
		async function fetchRepose() {
			let reposeList = await axios.get(
				"https://api.github.com/users/iamrhm/repos"
			);
			reposeList = reposeList.data.map(repo => {
				let repoObj = {
					name: repo.name,
					url: repo.html_url,
					owner: repo.owner.login,
					profileImage: repo.owner.avatar_url,
					description: repo.description
				};
				return repoObj;
			});
			if (isSubscribed) setState(reposeList);
		}
		fetchRepose();
		return () => (isSubscribed = false);
	});
	return (
		<Slider>
			<DummyItem />
			{repoList.map((repo, index) => {
				return <RepoTiles repo={repo} key={index} />;
			})}
			<DummyItem />
		</Slider>
	);
};

const RepoTiles = ({ repo }) => {
	return (
		<Item href={repo.url}>
			<ItemText>
				<Title>Name:</Title>
				<SubTitle>{repo.name}</SubTitle>
			</ItemText>
			<ItemText>
				<Title>Description:</Title>
				<SubTitle>{repo.description}</SubTitle>
			</ItemText>
			<ItemText>
				<Title>Owner:</Title> <SubTitle>{repo.owner}</SubTitle>
			</ItemText>
			<Footer>
				<Avatar>
					<img src={repo.profileImage} alt="profile avatar" />
				</Avatar>
			</Footer>
		</Item>
	);
};
