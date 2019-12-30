import styled from "styled-components";
import {
	firstTextColor,
	primaryBackgroundColor
} from "../../config/color-platte";


export const MenuContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 2px solid ${firstTextColor};
	background: ${primaryBackgroundColor};
`;
