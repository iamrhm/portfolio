import React from "react";

import {
	Container,
	InfoContainer,
	SubTitle,
	Header,
	InfoHeader,
	ListHeader,
	ListRubberLine,
	ListLine,
	ListContainer,
	ListSubTitle,
	ListWrapper,
	ListPreTitle
} from "./style";

import AnimeWrapper from "../anime-wrapper";
import { textAnimation } from "./animation";
import TexTAnimate from "../background-screen/text-animation";

import TimelineSection from "../timeline-section";
import SkillBlock from "../skill-block";

const Card = ({ preTitle, title, subtitle, index }) => {
	return (
		<>
			<Container>
				<AnimeWrapper animeProps={textAnimation}>
					<InfoHeader>
						<TexTAnimate TexTArray={preTitle} />
					</InfoHeader>
					<InfoContainer>
						<Header>{title}</Header>
						{Array.isArray(subtitle) ? (
							<List arrayList={subtitle} />
						) : (
							<SubTitle>{subtitle}</SubTitle>
						)}
					</InfoContainer>
				</AnimeWrapper>
			</Container>
			<Container>{addCoolTemplates(index)} </Container>
		</>
	);
};

export default Card;

const List = ({ arrayList }) => {
	const list = arrayList.map((data, index) => (
		<ListWrapper key={index}>
			<ListHeader>
				<ListPreTitle>{data.preTitle}</ListPreTitle>
				<ListRubberLine>
					<ListLine />
				</ListRubberLine>
			</ListHeader>
			<ListContainer>
				<ListSubTitle>{data.title}</ListSubTitle>
			</ListContainer>
		</ListWrapper>
	));
	return list;
};

const addCoolTemplates = index => {
	index = index.toString();
	switch (index) {
		case "0":
			return <TimelineSection />;
		case "1":
			return <SkillBlock />;
		default:
			break;
	}
};
