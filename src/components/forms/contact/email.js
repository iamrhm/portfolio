import emailjs from "emailjs-com";

export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function sendEmail({ name, email, subject, message }) {
	const template_params = {
		userEmail: email,
		userSubject: subject,
		userMessage: message,
		userName: name
	};
	var service_id = "default_service";
	var template_id = "freelance_form";
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
