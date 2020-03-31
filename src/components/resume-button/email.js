import emailjs from "emailjs-com";

export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function sendEmail(emailAddress) {
	const template_params = {
		userEmail: emailAddress,
		reply_to: emailAddress,
		to_name: emailAddress
	};

	const service_id = "gmail";
	const template_id = "template_Ki5JScQR";
	const user_id = "user_4NBF9wwRnpQFT89jylGjA";
	emailjs.send(service_id, template_id, template_params, user_id).then(
		response => {
			console.log("SUCCESS!", response.status, response.text);
		},
		err => {
			console.log("FAILED...", err);
		}
	);
}
