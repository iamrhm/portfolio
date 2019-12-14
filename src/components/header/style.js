import styled from "styled-components";
import { primaryBackgroundColor } from "../../config/color-platte";

export const HeaderContainer = styled.div`
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 34px;
	top: 0;
	right: 0;
	padding: inherit;
	background: ${primaryBackgroundColor};
`;
