import { useEffect, useRef } from "react";

function useIntersectionApi(
	DOMRef,
	updateVisibility,
	intersectionRatio = 0.5,
	customOptions = {}
) {
	const defaultOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0
	};

	const observer = useRef(null);

	useEffect(() => {
		const options = { ...defaultOptions, ...customOptions };
		if (observer.current) observer.current.disconnect();
		observer.current = new window.IntersectionObserver(([entry]) => {
			if (entry.intersectionRatio >= intersectionRatio) {
				updateVisibility();
			}
		}, options);
		const { current: currentObserver } = observer;
		if (DOMRef.current) {
			currentObserver.observe(DOMRef.current);
		}
		return () => currentObserver.disconnect();
	}, [DOMRef]);
}

export default useIntersectionApi;
