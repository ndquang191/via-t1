import { useState } from "react";

const SignUpForm = () => {
	const [info, setInfo] = useState({
		username: "",
		password: "",
		email: "",
	});

	function checkRegex(info) {
		let usernameRegx = /^[a-zA-Z0-9]{5,15}$/;

		let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\|]).{6,}$/;

		console.log(info);
		let err = {
			username: usernameRegx.test(info.username),
			password: passwordRegx.test(info.password),
			email: info.email.includes("@"),
			repeatpassword: info.password === info.repeatpassword,
		};

		return err;
	}

	function handleSubmit(e) {
		e.preventDefault();

		let info = {
			username: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value,
			repeatpassword: e.target.repeatpassword.value,
		};

		let err = checkRegex(info);


		// if( err.email == true)

		// xuwr ly loi

		let data = JSON.stringify({ username: e.target.username.value, password: e.target.password.value });

		sessionStorage.setItem("info", data);
	}
	return (
		<div className="flex justify-center items-center px-1 pb-6">
			<form action="" className="" onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="username" className="block font-medium">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					className="block border-solid border-2 border-grey-light mb-4 p-1"
					required
				/>

				<label htmlFor="email" className="block font-medium">
					Email
				</label>
				<input
					type="text"
					id="email"
					name="email"
					className="block border-solid border-2 border-grey-light mb-4 p-1"
					required
				/>

				<label htmlFor="password" className="block font-medium">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					className="block border-solid border-2 border-grey-light mb-4 p-1"
					required
				/>

				<label htmlFor="repeatpassword" className="block font-medium">
					Confirm Password
				</label>
				<input
					type="password"
					id="repeatpassword"
					name="repeatpassword"
					className="block border-solid border-2 border-grey-light mb-4 p-1"
					required
				/>

				<button
					type="submit"
					className=" border-solid border-2 border-gray-800 rounded-sm p-3 items-center ml-auto"
				>
					Sign Up{" "}
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
