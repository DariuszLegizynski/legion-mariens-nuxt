import Hero from "@/components/layout/header/Hero"
import HeaderMobile from "@/components/layout/header/HeaderMobile"
import Footer from "./layout/Footer"
import HeaderDesktop from "./layout/header/HeaderDesktop"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<article className="mt-8">
		<HeaderMobile />
		<HeaderDesktop />
		<div className="max-container">
			<Hero />
			{children}
		</div>
		<Footer />
	</article>
)

export default Layout
