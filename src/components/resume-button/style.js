import styled, { keyframes, css } from "styled-components";
import { firstTextColor, primaryBackgroundColor } from "../../config/style";

import { Cross } from "@styled-icons/entypo/Cross";
import { Check } from "@styled-icons/boxicons-regular/Check";

const scaleUp = keyframes`
  0%{
    opacity:0;
    transform:scale(.9);
  }
  100%{
    opacity:0.9;
    transform:scale(1);
  }
`;

const BodyTextStyle = css`
	font-size: calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)));
	position: relative;
	font-family: "Roboto", sans-serif;
	opacity: 0.8;
	color: ${firstTextColor};
`;

export const Wrapper = styled.div`
	width: 80%;
	height: 80px;
	position: relative;
	@media only screen and (min-device-width: 767px) {
		width: 30%;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	align-self: center;
	justify-content: center;

	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledButton = styled.button`
	background-color: ${firstTextColor};
	color: ${primaryBackgroundColor};
	font-family: "Lato", sans-serif;
	font-size: 12px;
	padding: 10px 15px;
	border: 2px solid ${firstTextColor};
	border-radius: 20px;
	text-transform: uppercase;
	text-align: center;
	cursor: pointer;

	opacity: 0;
	transform: scale(0.9), rotateY(0deg);
	animation: ${scaleUp} 1.2s ease-in-out 1.2s forwards;
`;

export const InputSection = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: absolute;
	transform: rotateY(-90deg);
`;

export const InputControl = styled.div`
	width: 100%;
	height: 100%;
	display: ${props => (props.isVisible ? "none" : "flex")};
	align-self: center;
	justify-content: center;
	align-items: center;

	position: absolute;
	transform: rotateY(-90deg);
`;

export const StyledInput = styled.input`
	width: calc(100% - 32px);
	height: 50px;
	border: 0;
	font-size: 16px;
	color: ${firstTextColor};
	padding: 0 20px;

	background: #121212;
	border: 1px solid #fff;
	border-radius: 25px;

	::placeholder {
		${BodyTextStyle}
	}
`;

export const IconButtonWrapper = styled.div`
	width: 28px;
	height: 28px;
	margin: 0 8px;
	cursor: pointer;
`;

export const SuccessLabel = styled.div`
	${BodyTextStyle};
	width: 100%;
	height: 100%;
	padding: 6% 0;
	opacity: 1;
	font-family: "Lato", sans-serif;
	font-weight: bold;
	text-align: center;
	font-size: 14px;

	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	transform: rotateY(-90deg);
`;

export const CheckIcon = styled(Check)`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	border: 1px solid #fff;
	color: #fff;
`;

export const CrossIcon = styled(Cross)`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	border: 1px solid #fff;
	color: #fff;
`;
