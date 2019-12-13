import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 90%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;
	z-index: 1;
	top: 50px;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: space-around;
	}
`;
export const IntroSection = styled.div`
	width: 100%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
	}
`;

export const BannerContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 50%;
		height: 100%;
		justify-content: flex-end;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 50%;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
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

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1000px) {
		width: 45%;
		height: 50%;
	}
	/* Special Case One */
	@media screen and (min-width: 500px) and (max-width: 833px) {
		height: 40%;
		width: 75%;
		display: flex;
		justify-content: center;
	}
	/*Special Case Two */
	@media screen and (min-width: 1001px) and (max-width: 1290px) {
		width: 35%;
	}
	/*Special Case Three */
	@media screen and (min-width: 1291px) and (max-width: 1600px) {
		width: 30%;
	}
`;

export const SocialInfoContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	position: relative;
	
	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		align-items: flex-end;
	}
`;

export const AuthorInfoContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	align-items: left;
	justify-content: flex-start;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
	}
`;
