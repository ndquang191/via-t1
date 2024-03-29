"use client";

import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

export default function Home() {
	const [tab, setTab] = useState(true);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 h-150">
			<div className="container bg-white w-80 min-h-160 border-4 border-black  ">
				<div className="tab-container flex">
					<div
						className={
							"login-tab cursor-pointer w-[50%] text-center font-semibold hover:backdrop-brightness-90 py-3 " +
							(tab ? "backdrop-brightness-90" : "")
						}
						onClick={() => setTab(true)}
					>
						Login
					</div>
					<div
						className={
							"signup-tab cursor-pointer w-[50%] text-center font-semibold hover:backdrop-brightness-90 py-3 " +
							(tab == false ? "backdrop-brightness-90" : "")
						}
						onClick={() => setTab(false)}
					>
						Sign Up
					</div>
				</div>
				<div>{tab == true ? <LoginForm /> : <SignUpForm setTab={setTab} />}</div>
			</div>
		</main>
	);
}
