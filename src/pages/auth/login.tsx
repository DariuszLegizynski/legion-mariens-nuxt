import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/layout"

const login = () => {
	return (
		<Layout>
			<article className="my-20 mx-8">
				<div className="h3 text-left mb-8">Anmelden (Geschützte Seite)</div>
				<section>
					<form className="flex flex-col items-center gap-y-4 w-full">
						<div className="flex flex-col items-start gap-y-2 w-full">
							<label htmlFor="user">Benutzername:</label>
							<input type="user" id="user" name="user" required />
						</div>
						<div className="flex flex-col items-start gap-y-2 w-full">
							<label htmlFor="password">Passwort:</label>
							<input type="password" id="password" name="password" required />
						</div>
						<BaseButton buttonType="accent" text="Anmelden" />
					</form>
				</section>
			</article>
		</Layout>
	)
}

export default login
