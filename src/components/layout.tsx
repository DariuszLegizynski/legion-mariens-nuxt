import Hero from "@/components/home/Hero"
import Header from "@/components/Header"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
	<article className="mt-4 mx-4">
		<Hero />
		<Header />
		{children}
	</article>
)

export default Layout
