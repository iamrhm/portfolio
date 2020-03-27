import React, { useRef, useState } from "react";

import {
	Container,
	InfoContainer,
	SubTitle,
	Header,
	InfoHeader
} from "./style";

import useIntersectionApi from "../../hooks/useIntersectionApi";

import AnimeWrapper from "../anime-wrapper";
import { textAnimation } from "./animation";

import TexTAnimate from "../dummies/text-animate";

/* --- Templates --- */
import TimelineSection from "../feature-blocks/timeline";
import SkillBlock from "../feature-blocks/skill";
import Experience from "../feature-blocks/experience";

const InfoCard = ({ preTitle, title, subtitle, index }) => {
	const infoSectionRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);
	const intersectionRatio = index === 0 ? 0 : 0.4;
	useIntersectionApi(
		infoSectionRef,
		() => setVisibility(!isVisible),
		intersectionRatio
	);
	return (
		<>
			<Container ref={infoSectionRef}>
				<InfoHeader>
					<TexTAnimate TexTArray={preTitle} isVisible={isVisible} />
				</InfoHeader>
				<AnimeWrapper animeProps={isVisible ? textAnimation : {}}>
					<InfoContainer>
						<Header>{title}</Header>
						<SubTitle>{subtitle}</SubTitle>
					</InfoContainer>
				</AnimeWrapper>
			</Container>
			<Container>{addFeatureBlock(index)}</Container>
		</>
	);
};

export default InfoCard;

const addFeatureBlock = index => {
	index = index.toString();
	switch (index) {
		case "0":
			return <TimelineSection />;
		case "1":
			return <SkillBlock />;
		case "2":
			return <Experience />;
		default:
			break;
	}
};
