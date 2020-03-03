import React, { useContext, useReducer, useEffect, useRef } from "react";

import { PortfolioContext } from "../../context";

import {
	Container,
	Grid,
	Blocks,
	Banner,
	FirstSlot,
	MiddleSlot,
	LastSlot,
	CContainer,
	Slider,
	IconBlock
} from "./style";

import SkillIcon from "../skill-icon";

const initialState = {
	slides: []
};

function reducer(state, action) {
	switch (action.type) {
		case "update-slides":
			return { ...state, slides: action.payload };
		default:
			return state;
	}
}

export default function SkillBlock() {
	function getSlots() {
		return [1, 2, 3, 4, 5, 6].map((data, index) => {
			return <Blocks key={index} />;
		});
	}

	return (
		<Container>
			<Grid>
				<FirstSlot>
					{getSlots()}
					<Banner />
				</FirstSlot>
				<MiddleSlot>{getSlots()}</MiddleSlot>
				<LastSlot>{getSlots()}</LastSlot>
			</Grid>
			<Carousel />
		</Container>
	);
}

function Carousel() {
	const { skills } = useContext(PortfolioContext);
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		let slides = [],
			chunk = 12;
		for (let i = 0, j = skills.length; i < j; i += chunk) {
			slides.push(skills.slice(i, i + chunk));
		}
		dispatch({ type: "update-slides", payload: slides });
		return () => {};
	}, []);

	const containerRef = useRef(null);

	function getSkills(array, start) {
		return array
			.filter((data, index) => index >= start && index < start + 6)
			.map((data, index) => {
				return (
					<IconBlock key={index}>
						<SkillIcon name={data} />
					</IconBlock>
				);
			});
	}

	return (
		<CContainer>
			{state.slides.map((slide, index) => {
				return (
					<Slider key={index} calWidth={containerRef}>
						<FirstSlot></FirstSlot>
						<MiddleSlot>{getSkills(slide, 0)}</MiddleSlot>
						<LastSlot>{getSkills(slide, 6)}</LastSlot>
					</Slider>
				);
			})}
		</CContainer>
	);
}
