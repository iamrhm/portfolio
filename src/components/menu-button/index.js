import React from "react";

import { IconWrapper, Line } from "./style";
import Animate from "../animate-wrapper";
import {menuOpen,menuClose} from '../../config/animation'

function MenuButton({ isActive, onClick }) {
	let topLineAnimation = isActive ? menuOpen.topLine : menuClose.topLine;
	let middleLineAnimation = isActive
		? menuOpen.middleLine
		: menuClose.middleLine;
	let bottomLineAnimation = isActive
		? menuOpen.bottomLine
		: menuClose.bottomLine;

	return (
		<IconWrapper onClick={onClick}>
			<Animate animeProps={topLineAnimation}>
				<Line />
			</Animate>
			<Animate animeProps={middleLineAnimation}>
				<Line />
			</Animate>
			<Animate animeProps={bottomLineAnimation}>
				<Line />
			</Animate>
		</IconWrapper>
	);
}

export default MenuButton;
