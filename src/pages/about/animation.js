export function maskAboutMeSVG(aboutMeFragment) {
	let aboutMe = aboutMeFragment;
  let text = aboutMe.selectAll("text");
  text.attr({
    fill: "#ffff",
    "font-family": `"Roboto", sans-serif`,
    "font-weight": "bold",
    "font-size": "calc(48px + (148 - 48) * ((100vw - 300px) / (1600 - 300)))"
  });
	return aboutMe;
}

