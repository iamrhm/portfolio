import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 90%;
	position: relative;
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
	height: 15%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		position: absolute;
		top: 10%;
		width: 100%;
		height: 15%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 100%;
		height: 15%;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 20%;
	padding: 5% 0%;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 100%;
		height: 30%;
		padding: 0%;
		padding-top: 0%;
	}

	/* iPad Screen */
	@media only screen and (max-width: 833px) and (min-width: 414px) {
		width: 100%;
		height: 20%;
		padding: 2% 0;

		display: flex;
		justify-content: center;
	}
`;

export const InfoContainer = styled.div`
	width: 95%;
	height: 40%;

	/* Laptop  screen  */
	@media screen and (min-width: 834px) and (max-width: 1600px) {
		width: 30%;
		height: 50%;
	}

	@media only screen and (max-width: 833px) and (min-width: 664px) {
		width: 45%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	@media only screen and (max-width: 664px) and (min-width: 546px) {
		width: 55%;
		height: 50%;
		display: flex;
		flex-direction: column;
	}

	/* iPad Screen */
	@media only screen and (max-width: 546px) and (min-width: 414px) {
		width: 70%;
		height: 45%;
		display: flex;
		flex-direction: column;
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
		height: 10%;
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
		height: 5%;
	}
`;
