import styled from "styled-components";
import { firstTextColor } from "../../../config/style";

export const Container = styled.div`
	width: 100%;
	top: 50px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	min-height: 500px;
	position: relative;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		align-items: center;
	}
	* {
		overflow: hidden;
	}
`;

export const ListContainer = styled.ul`
	top: 74px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	width: 300px;
	z-index: 3; /* One level above of the menu dropdown page */
	* {
		list-style-type: none;
	}
	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		top: 84px;
		left: 50%;
		transform: translateX(-40%);
	}
`;

export const Item = styled.li`
	width: 280px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	list-style: none;
	margin-bottom: 42px;
	transform: translateX(10px);
	:hover,
	:active {
		transform: translateX(-8px);
		transition: transform 0.35s;
	}
	* {
		color: inherit;
		text-decoration: none;
	}
`;

export const OptionItem = styled.div`
	opacity: 0;
	width: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;

	:hover,
	:active {
		& :nth-child(1) {
			:after {
				content: "";
				display: block;
				width: 5px;
				height: 5px;
				background: ${firstTextColor};
				top: 0;
				left: 0;
				transform: translate(-10px, 12px) rotate(45deg) scale(1);
			}
		}
		& :nth-child(2) {
			transform: translateX(-100%) translateY(-2px) scaleX(1);
			transition: transform 0.35s;
		}
	}
`;

export const OptionIndex = styled.div`
	color: ${firstTextColor};
	font-size: 14px;
	font-weight: bold;
	transform: rotate(-90deg);

	display: flex;
	justify-content: flex-end;
	align-items: center;

	width: 28px;
	height: 38px;

	:after {
		content: "";
		display: block;
		width: 5px;
		height: 5px;
		background: ${firstTextColor};
		top: 0;
		left: 0;

		transition: transform 0.35s;
		transform: translate(-10px, 12px) rotate(45deg) scale(0);
	}
`;

export const RubberLine = styled.span`
	background: ${firstTextColor};

	left: 104px;
	top: 50%;
	width: 76px;
	height: 1px;
	transform-origin: 100%;

	transform: translateX(-100%) translateY(-2px) scaleX(0);
	position: absolute;

	transition: transform 0.35s;
`;

export const OptionTitle = styled.div`
	color: ${firstTextColor};
	font-size: 28px;
	font-weight: bold;

	padding-left: 72px;
`;
