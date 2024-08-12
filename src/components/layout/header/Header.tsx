import { useState, useEffect } from "react"
import Link from "next/link"

// components
import Burger from "@/components/layout/header/burger/Burger"

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const [headerData, setHeaderData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/header?populate=*`)
			const data = await response.json()
			setHeaderData(data.data.attributes.headerContent)
		}

		fetchData()
	}, [])

	return (
		<header className={`flex flex-col items-center mt-4 pt-4 pb-2 h-auto z-10 bg-white border-b-2 border-grey`}>
			<div onClick={() => setIsActive(!isActive)}>
				<Burger isActive={isActive} />
			</div>
			{isActive && (
				<nav className={`nav-transition text-center uppercase grid gap-y-4 max-w-[72vw] mx-auto my-8`}>
					{headerData?.map(item => (
						<Link key={item.id + item.linkName} href={`${item.linkPath}`}>
							<p className="text-primary">{item.linkName}</p>
						</Link>
					))}
				</nav>
			)}
		</header>
	)
}

export default Header
