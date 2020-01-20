import styled from "styled-components";
import { MaskTitleColor } from "../../config/style";

export const BannerContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	top: 64px;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		width: 55%;
		justify-content: flex-end;
		align-items: flex-start;
		top: 142px;
		right: 0;
	}
`;

export const Container = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;
	overflow: hidden;
	top: 164px;
	* {
		overflow: hidden;
	}
	@media screen and (min-width: 834px) {
		top: 112px;
		width: 45%;
	}
`;

export const TitleContainer = styled.div`
	width: 320px;
	display: flex;
	justify-content: flex-start;
	padding: 10px 0;
	position: relative;

	--maskX: 0;
	--maskY: 50;
`;

export const WrapperClone = styled.div`
	width: 100%;
	height: 100%;
	font-weight: 800;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	padding: 10px 0;

	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: center;
	}
	* > span {
		color: ${MaskTitleColor};
	}
	clip-path: polygon(
		0 0,
		calc((var(--maskX) * 1% + (var(--maskY)-50) * 0.4%)) 0,
		calc((var(--maskX) * 1% + (var(--maskY)-50) * 0.4%)) 100%,
		0 100%
	);
	/* clip-path: polygon(
		0 0,
		100% 0,
		calc((var(--maskX) * 1%)) calc((var(--maskY) * 1%)),
		0% 100%
	); */
`;
