import { useState } from "react";

const SignUpForm = ({ setTab }) => {
	const [info, setInfo] = useState({
		username: "",
		password: "",
		email: "",
		repeatpassword: "",
	});

	function checkRegex(info) {
		let usernameRegx = /^[a-zA-Z0-9]{5,15}$/;

		let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\|]).{6,}$/;

		let err = {
			username: usernameRegx.test(info.username) ? null : "5-15 kí tự, chỉ chứa số và chữ",
			password: passwordRegx.test(info.password) ? null : "Ít nhất 6 kí tự",
			email: info.email.includes("@") ? null : "Không phải email hợp lệ",
			repeatpassword: info.password === info.repeatpassword ? null : "Không trùng password cũ",
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

		if (err.username || err.email || err.password || err.repeatpassword) {
			setInfo(err);
			return;
		}

		// xuwr ly loi

		let data = JSON.stringify({ username: e.target.username.value, password: e.target.password.value });

		sessionStorage.setItem("info", data);
		setTab(true);
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
					className="block border-solid border-2 border-grey-light  p-1"
					required
				/>
				<div className="text-red-600 min-w-4 mb-4">{info.username}</div>

				<label htmlFor="email" className="block font-medium">
					Email
				</label>
				<input
					type="text"
					id="email"
					name="email"
					className="block border-solid border-2 border-grey-light p-1"
					required
				/>
				<div className="text-red-600 min-w-4 mb-4">{info.email}</div>

				<label htmlFor="password" className="block font-medium">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					className="block border-solid border-2 border-grey-light p-1"
					required
				/>
				<div className="text-red-600 min-w-4 mb-4">{info.password}</div>

				<label htmlFor="repeatpassword" className="block font-medium">
					Confirm Password
				</label>
				<input
					type="password"
					id="repeatpassword"
					name="repeatpassword"
					className="block border-solid border-2 border-grey-light p-1"
					required
				/>

				<div className="text-red-600 min-w-4 mb-4">{info.repeatpassword}</div>

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
