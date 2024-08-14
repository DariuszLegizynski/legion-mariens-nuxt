import HeaderMobile from "@/components/layout/header/HeaderMobile"
import HeaderDesktop from "@/components/layout/header/HeaderDesktop"
import Footer from "@/components/layout/Footer"
interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<article className="mt-24">
		<HeaderMobile />
		<HeaderDesktop />
		{children}
		<Footer />
	</article>
)

export default Layout
