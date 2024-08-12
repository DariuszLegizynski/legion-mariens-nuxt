import Hero from "@/components/layout/header/Hero"
import Header from "@/components/layout/header/Header"
import Footer from "./layout/Footer"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<article className="mt-4">
		<Hero />
		<Header />
		{children}
		<Footer />
	</article>
)

export default Layout
