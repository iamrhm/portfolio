import React from "react";
import { Container, LogoContainer, ButtonContainer } from "./style";

import { BrandLogo } from "../../assets/logo";
import Menu from "../../pages/menu";

const Header = () => {
	return (
		<Container>
			<LogoContainer>
				<BrandLogo />
			</LogoContainer>
			<ButtonContainer>
				<Menu />
			</ButtonContainer>
		</Container>
	);
};

export default Header;
