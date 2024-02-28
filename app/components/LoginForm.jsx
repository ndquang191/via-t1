import { redirect } from "next/navigation";

const LoginForm = () => {
	function handleSubmit(e) {
		e.preventDefault();
		let info = {};
		let rawData = sessionStorage.getItem("info");
		if (rawData) {
			info = JSON.parse(rawData);
		}

		console.log({ username: e.target.username.value, password: e.target.password.value }, info);

		if (e.target.username.value === info.username && e.target.password.value === info.password) {
			console.log("TRUE");

			window.location.assign("https://viajsc.com/");
		}
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

				<button
					type="submit"
					className=" border-solid border-2 border-gray-800 rounded-sm p-3 items-center ml-auto"
				>
					Login{" "}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
