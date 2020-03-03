import React from "react";
import anime from "animejs";
import _ from "lodash";

class AnimeWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.targets = [];
		this.state = {};
	}
	componentDidUpdate(prevProps, prevState) {
		if (
			!isEqual(prevProps.animeProps, this.props.animeProps) ||
			(this.props.renderOnStateUpdate !== undefined &&
				this.props.renderOnStateUpdate)
		) {
			let animeProps = Array.isArray(this.props.animeProps)
				? this.props.animeProps
				: [this.props.animeProps];
			this.anime = anime.timeline({ loop: false });
			animeProps.forEach(animeProp => {
				this.anime.add(Object.assign({ targets: this.targets }, animeProp));
			});
		}
	}
	componentDidMount() {
		if (this.props.animeProps) {
			let animeProps = Array.isArray(this.props.animeProps)
				? this.props.animeProps
				: [this.props.animeProps];
			this.anime = anime.timeline({ loop: false });
			animeProps.forEach(animeProp => {
				this.anime.add(Object.assign({ targets: this.targets }, animeProp));
			});
		}
	}

	addTarget = newTarget => {
		this.targets = [...this.targets, newTarget];
	};

	render() {
		let children = [];
		if (this.props.children) {
			children = Array.isArray(this.props.children)
				? this.props.children
				: [this.props.children];
		}
		return (
			<>
				{children.map((child, i) =>
					React.cloneElement(child, { key: i, ref: this.addTarget })
				)}
			</>
		);
	}
}

export default AnimeWrapper;

function isEqual(obj1, obj2) {
	let arrayOfObj1 = Array.isArray(obj1) ? obj1 : [obj1];
	let arrayOfObj2 = Array.isArray(obj2) ? obj2 : [obj2];
	if (arrayOfObj1.length !== arrayOfObj2.length) return false;
	else {
		for (let i = 0; i < arrayOfObj1.length; i++) {
			if (!_.isEqual(arrayOfObj1[i], arrayOfObj2[i])) return false;
		}
		return true;
	}
}
