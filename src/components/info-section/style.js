import styled, { css } from "styled-components";

const BodyTextStyle = css`
	font-size: 14px;
	line-height: 22px;
	color: #2e2e2ec4;
`;

export const StyledBody = styled.span`
	width: 100%;
	padding: 5% 0;
	${BodyTextStyle};
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: flex-start;

	/* Special case */
	@media screen and (min-width: 510px) and (max-width: 833px) {
		padding: 2% 0;
	}
`;

export const ContactMeButton = styled.span`
	width: 164px;
	height: 54px;
	padding: 4% 0;
	outline: none;
	border: none;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	${BodyTextStyle};
	background-color: #020202;
	color: #fefefe;
	text-transform: uppercase;
	:focus :active {
		outline: none;
		border: none;
	}
`;
