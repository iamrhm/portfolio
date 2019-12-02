import React from "react";
import { Container, LogoContainer, ButtonContainer, MenuIcon } from "./style";

import { BrandLogo } from "../utils/logo";
const Header = () => {
	return (
		<Container>
			<LogoContainer>
				<BrandLogo />
			</LogoContainer>
			<ButtonContainer>
				<MenuIcon />
			</ButtonContainer>
		</Container>
	);
};

export default Header;
