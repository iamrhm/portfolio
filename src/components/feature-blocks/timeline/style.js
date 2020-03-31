import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	margin: 25px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media only screen and (min-device-width: 767px) {
		margin-bottom: 80px;
	}
`;

export const TimelineFrame = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 767px) {
		width: 50%;
	}
`;
