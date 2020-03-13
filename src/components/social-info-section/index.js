import React, { useContext, useRef, useEffect } from "react";

import { StyledIconButton, IconContainer } from "./style";

import { PortfolioContext } from "../../context";
import { loadIcon } from "./animation";

const SocialInfoSection = () => {
	const { social } = useContext(PortfolioContext);

	if (social && social.length) {
		return (
			<IconContainer>
				{social.map((data, index) => {
					return <SocialButton data={{ ...data, index: index }} key={index} />;
				})}
			</IconContainer>
		);
	} else return null;
};

export default SocialInfoSection;

function SocialButton({ data }) {
	const iconRef = useRef(null);
	useEffect(() => {
		if (iconRef.current) {
			loadIcon(iconRef.current, data.icon, data.index);
		}
	});
	return (
		<a href={data.url}>
			<StyledIconButton ref={iconRef}></StyledIconButton>
		</a>
	);
}
