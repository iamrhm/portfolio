import React from "react";
import { HeaderContainer } from "./style";
import MenuButton from "../../menu-utils/button";

const Header = props => {
	return (
		<HeaderContainer>
			<MenuButton {...props} />
		</HeaderContainer>
	);
};

export default Header;
