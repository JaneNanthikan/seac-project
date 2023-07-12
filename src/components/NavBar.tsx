import React from "react"

export default function NavBar() {
	return (
		<nav className="bg-black flex justify-center px-4">
			<div className="max-w-content w-full flex justify-between my-2">
				<div>
					MY CinePlex
				</div>
				<select className="bg-transparent">
					<option value="en">
						EN
					</option>
					<option value="th">
						TH
					</option>
				</select>
			</div>
		</nav>
	)
}