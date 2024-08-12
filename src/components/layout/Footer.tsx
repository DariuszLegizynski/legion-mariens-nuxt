import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className="flex flex-col items-center justify-center bg-gray-800 text-white py-4">
			<Link href="/" className="flex flex-col items-center justify-center">
				<Image src="/logo.svg" alt="Logo" width={64} height={64} />
				<p className="text-xs mt-2">© {currentYear} Legion-Mariens.at</p>
			</Link>
		</footer>
	)
}

export default Footer
