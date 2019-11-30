import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fefefe;
	padding: 0 10%;


	position: absolute;

	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		justify-content: space-around;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		justify-content: space-around;
	}
`;

export const BannerContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		position: absolute;
		top: 10%;
		width: 80%;
		height: 15%;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 100%;
		height: 10%;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 20%;
	padding: 5% 0%;
	padding-top: 10%;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 100%;
		height: 30%;
		padding: 0%;
		padding-top: 0%;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px)  {
		width: 100%;
		height: 20%;
		padding: 2% 0;
	}
`;

export const InfoContainer = styled.div`
	width: 100%;
	height: 40%;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 40%;
		height: 40%;
		padding: 2% 0%;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 70%;
		height: 40%;
	}
`;

export const SocialInfoContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		height: 15%;
		align-items: flex-end;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		height: 10%;
		align-items: center;
	}
`;

export const AuthorInfoContainer = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	align-items: left;
	justify-content: flex-start;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 100%;
		height: 10%;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 100%;
		height: 10%;
	}
`;
