import styled, { css } from "styled-components";

import { Linkedin } from "styled-icons/feather/Linkedin";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Github } from "styled-icons/feather/Github";

import { CodeS as CodeStart } from "styled-icons/remix-fill/CodeS";
import { CodeSSlash as CodeEnd } from "styled-icons/remix-fill/CodeSSlash";

export const StyledIconButton = styled.span`
	width: 24px;
	height: 24px;
	margin-right: 5%;
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
`;

export const CodeStartIcon = styled(CodeStart)`
	width: 14px;
	height: 14px;
`;

export const CodeEndIcon = styled(CodeEnd)`
	width: 14px;
	height: 14px;
`;

export const LinkedinIcon = styled(Linkedin)`
	width: 24px;
	height: 24px;
`;

export const InstagramIcon = styled(Instagram)`
	width: 24px;
	height: 24px;
`;
