import React, {
	useContext,
	useReducer,
	useEffect,
	useRef,
	useState
} from "react";

import {
	Container,
	Grid,
	Blocks,
	FirstSlot,
	MiddleSlot,
	LastSlot,
	SkillContainer,
	Slider,
	IconBlock,
	SkillName,
	IconContainer
} from "./style";

import { PortfolioContext } from "../../../context";
import { addSVG } from "./animation";

import useIntersectionApi from "../../../hooks/useIntersectionApi";

import StyledBanner from "../styled-banner";

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
	return (
		<Container>
			<Grid>
				<FirstSlot>
					<StyledBanner />
				</FirstSlot>
				<MiddleSlot>{getSlots()}</MiddleSlot>
				<LastSlot>{getSlots()}</LastSlot>
			</Grid>
			<SkillSlider />
		</Container>
	);
}

function getSlots() {
	return [1, 2, 3, 4, 5, 6].map((data, index) => {
		return <Blocks key={index} />;
	});
}

function getSkills(array, start) {
	return array
		.filter((data, index) => index >= start && index < start + 6)
		.map((data, index) => {
			return (
				<IconBlock key={index}>
					<SkillIcon name={data} />
					<SkillName>{data}</SkillName>
				</IconBlock>
			);
		});
}

function SkillSlider() {
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
	return (
		<SkillContainer>
			{state.slides.map((slide, index) => {
				return (
					<Slider key={index}>
						<FirstSlot></FirstSlot>
						<MiddleSlot>{getSkills(slide, 0)}</MiddleSlot>
						<LastSlot>{getSkills(slide, 6)}</LastSlot>
					</Slider>
				);
			})}
		</SkillContainer>
	);
}

function SkillIcon({ name }) {
	const svgRef = useRef(null);
	const [isVisible, setVisible] = useState(false);

	useIntersectionApi(svgRef, () => {
		setVisible(!isVisible);
	});

	useEffect(() => {
		if (svgRef.current) addSVG(name, svgRef.current, isVisible);
	}, [name, isVisible]);
	return <IconContainer ref={svgRef}></IconContainer>;
}
