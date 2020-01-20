import styled from "styled-components";

import { Linkedin } from "styled-icons/feather/Linkedin";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Github } from "styled-icons/feather/Github";

import { firstTextColor } from "../../config/style"
export const StyledIconButton = styled.span`
	width: 24px;
	height: 24px;
	margin-right: 18px;
	display: flex;
	align-items: center;
	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}

`;

export const GithubIcon = styled(Github)`
	width: 24px;
	height: 24px;
	color: ${firstTextColor};
`;

export const LinkedinIcon = styled(Linkedin)`
	width: 24px;
	height: 24px;
	color: ${firstTextColor};
`;

export const InstagramIcon = styled(Instagram)`
	width: 24px;
	height: 24px;
	color: ${firstTextColor};
`;

export const LogoContainer = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: flex-start;
	float: right;
`;
