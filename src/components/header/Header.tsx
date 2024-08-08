import { useState, useEffect } from "react"

// components
import Burger from "@/components/header/burger/Burger"

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const [headerData, setHeaderData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/header?populate=*`)
			const data = await response.json()
			setHeaderData(data.data.attributes.headerContent)
		}

		fetchData()
	}, [])

	console.log(headerData)

	return (
		<header className={`flex flex-col items-center mt-4 pt-4 pb-2 h-auto z-10 bg-white border-b-2 border-grey`}>
			<div onClick={() => setIsActive(!isActive)}>
				<Burger isActive={isActive} />
			</div>
			<nav className={`${isActive ? "" : "hidden"} max-w-[72vw] grid grid-cols-[auto_auto] h-12 items-center justify-self-center mx-auto fadeInFromTop`}>
				{headerData?.map(item => (
					<a key={item.id + item.linkName} href={item.url} className="text-white">
						{item.title}
					</a>
				))}
			</nav>
		</header>
	)
}

export default Header
