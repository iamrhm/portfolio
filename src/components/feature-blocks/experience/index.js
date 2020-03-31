import React, { useContext, useState, useRef } from "react";
import { PortfolioContext } from "../../../context";
import useIntersectionApi from "../../../hooks/useIntersectionApi";

import AnimeWrapper from "../../anime-wrapper";
import { textAnimation } from "./animation";

import {
	Container,
	ListHeader,
	ListRubberLine,
	ListLine,
	ListContainer,
	ListSubTitle,
	ListWrapper,
	ListPreTitle
} from "./style";

const Experience = () => {
	const { experience } = useContext(PortfolioContext);
	return (
		<Container>
			{experience.map((data, index) => (
				<ExpList key={index} data={data} index={index} />
			))}
		</Container>
	);
};

export default Experience;

const ExpList = ({ data, index }) => {
	const listContainerRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);
	useIntersectionApi(listContainerRef, () => {
		setVisibility(!isVisible);
	});
	return (
		<ListWrapper ref={listContainerRef}>
			<AnimeWrapper animeProps={isVisible ? textAnimation : {}}>
				<ListHeader>
					<ListPreTitle>{data.preTitle}</ListPreTitle>
					<ListRubberLine>
						<ListLine />
					</ListRubberLine>
				</ListHeader>
			</AnimeWrapper>
			<AnimeWrapper animeProps={isVisible ? textAnimation : {}}>
				<ListContainer>
					<ListSubTitle>{data.title}</ListSubTitle>
				</ListContainer>
			</AnimeWrapper>
		</ListWrapper>
	);
};
