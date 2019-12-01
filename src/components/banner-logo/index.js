import React from "react";

import Animate from "../animate-wrapper";
import { svgAnimation } from "../../config/animation";

import { BannerContainer, StyledSvg, StyledPath } from "./style";

const BannerLogo = () => {
	return (
		<BannerContainer>
			<StyledSvg width="100%" height="100%" fill="none">
				<Animate animeProps={svgAnimation}>
					<StyledPath
						d="M117.293 24.3041C118.969 22.2416 119.813 19.7748 119.813 16.8811C119.813 13.1795 118.471 10.2302 115.794 7.99074C113.391 5.99926 109.42 4.95659 103.778 4.95659H96.624V46.2147H102.219V28.9692H104.066L116.343 46.2147H123.17L109.975 28.4101L110.644 28.2695C113.407 27.6893 115.615 26.3679 117.293 24.3041ZM117.293 24.3041L117.641 24.5761M7.19916 6.54788L7.20289 6.55146C7.91368 7.23194 8.26574 8.05562 8.26574 9.04974C8.26574 10.044 7.91336 10.8788 7.19916 11.5788L7.19548 11.5825C6.50122 12.2792 5.66093 12.6243 4.64679 12.6243C3.63242 12.6243 2.78077 12.2789 2.06658 11.5788C1.3539 10.8803 1 10.0371 1 9.02241C1 8.0688 1.34922 7.25097 2.06658 6.54788C2.78234 5.84628 3.62534 5.50233 4.61895 5.50233C5.63332 5.50233 6.48496 5.84776 7.19916 6.54788ZM27.3627 46.9787C23.737 46.9787 20.7596 45.7011 18.3972 43.1408C16.0478 40.5204 14.8634 37.2441 14.8634 33.2807C14.8634 29.3909 16.0471 26.1788 18.3962 23.6124C20.7425 21.0493 23.6655 19.7735 27.1956 19.7735C30.2119 19.7735 32.9309 20.9853 35.3656 23.4602L36.1317 24.2389V20.5103H41.5322V46.2147H36.1317V42.8619L35.382 43.5492C32.8682 45.8536 30.1983 46.9787 27.3627 46.9787ZM22.5697 39.7853L22.5718 39.7878C24.0848 41.502 26.0077 42.3673 28.3091 42.3673C30.7439 42.3673 32.7433 41.5404 34.2643 39.8752L34.2693 39.8696C35.7796 38.1585 36.5214 35.996 36.5214 33.4171C36.5214 30.8382 35.7796 28.6757 34.2693 26.9645L34.266 26.9608C32.747 25.2785 30.7666 24.4397 28.3649 24.4397C26.0826 24.4397 24.1616 25.295 22.6309 26.9879L22.6274 26.9918C21.1203 28.6993 20.3753 30.8054 20.3753 33.2807C20.3753 35.9085 21.0952 38.0897 22.5697 39.7853ZM55.7018 32.9259V46.2147H50.3291V20.5103H55.7018V23.6181L56.4691 22.8312C57.6638 21.6062 58.6532 20.8106 59.4418 20.4069C60.2703 19.9931 61.3363 19.7735 62.6614 19.7735C65.5661 19.7735 67.8526 21.0033 69.5565 23.5085L69.909 24.0268L70.2858 23.5252C72.1678 21.019 74.697 19.7735 77.9167 19.7735C80.8758 19.7735 83.0223 20.649 84.442 22.3366C85.8752 24.0404 86.6299 26.6443 86.6299 30.2245V46.2147H81.2293V31.889C81.2293 29.3319 80.917 27.4282 80.2217 26.2653L80.2205 26.2633C79.476 25.0333 78.2471 24.4397 76.636 24.4397C74.7796 24.4397 73.3615 25.136 72.4705 26.5578L72.4681 26.5617C71.6242 27.9404 71.2355 30.0868 71.2355 32.9259V46.2147H65.8348V31.9709C65.8348 29.5783 65.4854 27.7128 64.7314 26.4317C63.9559 25.1142 62.765 24.4397 61.2138 24.4397C59.3216 24.4397 57.8759 25.144 56.9657 26.5835L56.9633 26.5874C56.1007 27.9836 55.7018 30.1202 55.7018 32.9259ZM102.219 24.3032V10.0593H104.975C108.005 10.0593 110.358 10.6035 111.962 11.7611C113.592 12.9371 114.384 14.6976 114.384 16.9629C114.384 19.3676 113.575 21.2364 111.906 22.4876C110.258 23.7217 107.84 24.3032 104.724 24.3032H102.219ZM135.152 33.7991V46.2147H129.779V1H135.152V23.2643L135.895 22.6085C138.051 20.7071 140.406 19.7735 142.974 19.7735C145.93 19.7735 148.254 20.7076 149.995 22.5512C151.444 24.1257 152.216 26.6956 152.216 30.3609V46.2147H146.844V30.9339C146.844 28.7754 146.453 27.1153 145.578 26.0518C144.704 24.9468 143.315 24.4397 141.527 24.4397C139.245 24.4397 137.535 25.1366 136.534 26.6283L136.53 26.634C135.584 28.0925 135.152 30.5127 135.152 33.7991ZM184.013 47.5227L196.936 19.7219L201.257 46.2147H207L199.212 2.81265L184.112 35.164L169.53 2.80139L160.858 46.2147H166.653L171.465 19.7076L184.013 47.5227ZM7.31924 20.5103V46.2147H1.94649V20.5103H7.31924Z"
						stroke="black"
					/>
				</Animate>
			</StyledSvg>
		</BannerContainer>
	);
};

export default BannerLogo;
