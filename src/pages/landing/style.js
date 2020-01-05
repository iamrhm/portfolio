import styled from "styled-components";

export const BannerContainer = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	top: 64px;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		justify-content: flex-end;
		align-items: flex-start;
		top: 142px;
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
	top: 160px;
	* {
		overflow: hidden;
	}
	@media screen and (min-width: 834px) {
		top: 112px;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 2% 0;
`;
