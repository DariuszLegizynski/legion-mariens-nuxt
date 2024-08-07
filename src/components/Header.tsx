import { useState, useEffect } from "react"

interface HeaderProps {
	isActive?: boolean
	onContactClick?: () => void
}

const Header: React.FC<HeaderProps> = ({ isActive = false }) => {
	return (
		<header className={`${isActive ? "left-1/2 transform -translate-x-1/2 w-full sm:w-[60vw]" : "w-full bg-white-opacity"} fixed h-12 z-10 backdrop-blur-md`}>
			<section className="max-w-[72vw] grid grid-cols-[auto_auto] h-12 items-center justify-self-center mx-auto fadeInFromTop">Header</section>
		</header>
	)
}

export default Header
