import React from "react";

import {
	StyledIconButton,
	GithubIcon,
	LinkedinIcon,
	InstagramIcon
} from "./style";

import Animate from "../animate-wrapper";
import { iconAnimation } from "../../config/animation";

const SocialInfoSection = () => {
	return (
		<Animate animeProps={iconAnimation}>
			<StyledIconButton>
				<a href="https://github.com/iamrhm">
					<GithubIcon />
				</a>
			</StyledIconButton>
			<StyledIconButton>
				<a href="https://www.linkedin.com/in/rahul-mitra-44887a107/">
					<LinkedinIcon />
				</a>
			</StyledIconButton>
			<StyledIconButton>
				<a href="https://www.instagram.com/_iamrhm/">
					<InstagramIcon />
				</a>
			</StyledIconButton>
		</Animate>
	);
};

export default SocialInfoSection;
