import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 64px);
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	overflow: hidden;

	min-height: 480px;
	max-height: 600px;
	* {
		overflow: hidden;
	}
	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: space-around;
	}
`;
export const IntroContainer = styled.div`
	width: 100%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	min-height: 220px;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
	}
`;

export const BannerContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		width: 50%;
		height: 100%;
		justify-content: flex-end;
		align-items: center;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: center;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
	}
`;

export const InfoContainer = styled.div`
	width: 95%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	min-height: 230px;
	max-width: 360px;
`;

export const SocialInfoContainer = styled.div`
	width: 100%;
	height: 10%;
	position: relative;
	min-height: 42px;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		align-items: center;
	}
	/* Special case */
	@media screen and (min-width: 500px) and (max-width: 833px) {
		align-items: center;
	}

	/* For small mobile case */
	@media screen and (max-height: 600px) {
		align-items: center;
	}
`;

export const FooterContainer = styled.div`
	width: 100%;
	height: 10%;
`;
