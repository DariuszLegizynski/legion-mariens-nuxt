import { useState, useEffect } from "react"
import Link from "next/link"

// components
import Burger from "@/components/layout/header/burger/Burger"

// hooks
import useAuth from "@/hooks/useAuth"

const Header = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const [isLoginActive, setIsLoginActive] = useState<boolean>(false)
	const [headerData, setHeaderData] = useState([])
	const { isAuthenticated } = useAuth()
	const [isClient, setIsClient] = useState<boolean>(false)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${process.env.API_URL}/api/header?populate=*`)
			const data = await response.json()
			setHeaderData(data.data.attributes.headerContent)
		}

		fetchData()
	}, [])

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null
	}

	return (
		<header className={`fixed top-0 left-0 items-center px-2 pt-4 pb-2 h-auto z-10 bg-white border-b-2 border-grey w-full`}>
			<section className={`flex ${isAuthenticated ? "justify-between" : "flex-col"}`}>
				<div
					onClick={() => {
						setIsActive(!isActive)
						setIsLoginActive(false)
					}}
				>
					<Burger isActive={isActive} />
				</div>
				<div
					onClick={() => {
						setIsLoginActive(!isLoginActive)
						setIsActive(false)
					}}
				>
					Avatar
				</div>
			</section>
			<section>
				{isActive && (
					<nav className={`nav-transition text-center uppercase grid gap-y-4 max-w-[72vw] mx-auto my-8`}>
						{headerData?.map(item => (
							<Link key={item.id + item.linkName} href={`${item.linkPath}`}>
								<p className="text-primary">{item.linkName}</p>
							</Link>
						))}
					</nav>
				)}
				{isAuthenticated && isLoginActive && (
					<nav className={`nav-transition text-center uppercase grid gap-y-4 max-w-[72vw] mx-auto my-8`}>
						<Link href="/cart">
							<p className="text-primary">Warenkorb</p>
						</Link>
						<Link href="/cart">
							<p className="text-primary">Abmelden</p>
						</Link>
					</nav>
				)}
			</section>
		</header>
	)
}

export default Header
