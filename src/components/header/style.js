import styled from "styled-components";
import React from "react";

const Menu = () => (
	<svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M14.0174 28.0172L28.0112 14.0111"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M12.8858 22.1371L21.0299 14.047"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M19.9001 29.1227L28.033 21.0156"
			stroke="black"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const Container = styled.div`
	width: 100%;
	height: 10%;
	position: relative;
	top: 0;

	display: flex;
	justify-content: space-between;
	align-items: top;
`;

export const LogoContainer = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
`;

export const ButtonContainer = styled.span`
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const MenuIcon = styled(Menu)`
	width: 24px;
	height: 24px;
`;
