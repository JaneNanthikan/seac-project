'use client'

import React from "react"

import { useRouter } from "next/navigation";
import { usePathname } from 'next-intl/client'

export default function NavBar({ locale }: { locale: string }) {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<nav className="bg-black flex justify-center px-4">
			<div className="max-w-content w-full flex justify-between my-2">
				<div>
					MY CinePlex
				</div>
				<select
					onChange={(e) => { router.replace(`/${e.target.value}${pathname}`) }}
					defaultValue={locale}
					className="bg-transparent">
					<option value="th">
						TH
					</option>
					<option value="en">
						EN
					</option>
				</select>
			</div>
		</nav>
	)
}