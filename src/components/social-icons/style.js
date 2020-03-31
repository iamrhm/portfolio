import styled from "styled-components";

export const IconContainer = styled.div`
	width: 64px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	flex-wrap: nowrap;
	* {
		flex-shrink: 0;
	}

	@media only screen and (min-device-width: 767px) {
		width: auto;
		height: 64px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		* {
			flex-shrink: 0;
		}
	}
`;

export const StyledIconButton = styled.span`
	width: 24px;
	height: 24px;
	margin: 0;
	margin-bottom: 18px;
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
	@media only screen and (min-device-width: 767px) {
		margin: 0;
		margin-left: 18px;
	}
`;

