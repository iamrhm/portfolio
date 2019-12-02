import React from "react";

import {
	BackgroundScreen,
	BackgroundWrapper,
	MaskLayer
} from "./style";
import { MatrixBackground } from "../utils/background-shapes/matrix-screen";

function ScreenOne() {
	return (
		<BackgroundScreen>
			<BackgroundWrapper>
				<MatrixBackground />
				<MaskLayer />
			</BackgroundWrapper>
		</BackgroundScreen>
	);
}

export default ScreenOne;
