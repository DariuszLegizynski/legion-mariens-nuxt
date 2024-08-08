import Hero from "@/components/header/Hero"
import Header from "@/components/header/Header"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<article className="mt-4">
		<Hero />
		<Header />
		{children}
	</article>
)

export default Layout
