import React from "react";
import anime from "animejs";

class Animate extends React.Component {
	constructor(props) {
		super(props);
		this.targets = [];
		this.state = {
			isReplay: false
		};
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

export default Animate;
