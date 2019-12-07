import React from "react";
import { Container, LogoContainer } from "./style";
import MenuButton from "../menu-button";

import { BrandLogo } from "../utils/logo";
const Header = props => {
	return (
		<Container>
			<LogoContainer>
				<BrandLogo />
			</LogoContainer>
			<MenuButton {...props} />
		</Container>
	);
};

export default Header;
