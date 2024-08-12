import { useState } from "react"

import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/layout"

// hooks
import useSignIn from "@/hooks/useSignIn"
import useAuth from "@/hooks/useAuth"

const login = () => {
	const [identifier, setIdentifier] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const { data, error, loading, postAuth } = useSignIn(identifier, password)

	const onSignIn = e => {
		e.preventDefault()

		postAuth()
	}

	const { isAuthenticated } = useAuth()

	return (
		<Layout>
			<article className="my-20 mx-8">
				<div className={`text-left mb-8 ${isAuthenticated ? "h2" : "h3"}`}>{isAuthenticated ? "Legionsleben" : "Anmelden (Geschützte Seite)"}</div>
				{!isAuthenticated && (
					<section>
						<form onSubmit={onSignIn} className="flex flex-col items-center gap-y-4 w-full">
							<div className="flex flex-col items-start gap-y-2 w-full">
								<label htmlFor="username">Benutzername:</label>
								<input id="user" value={identifier} name="username" onChange={e => setIdentifier(e.target.value)} required />
							</div>
							<div className="flex flex-col items-start gap-y-2 w-full">
								<label htmlFor="password">Passwort:</label>
								<input type="password" value={password} id="password" name="password" onChange={e => setPassword(e.target.value)} required />
							</div>
							<BaseButton isDisabled={!(identifier && password)} buttonType="submit" text="Anmelden" />
						</form>
					</section>
				)}
				{isAuthenticated ? (
					<p>Wählen Sie aus den Unterpunkten des Menü</p>
				) : (
					<section className="text-center mt-8">
						{loading && <p style={{ color: "blue" }}>Loading: {loading}</p>}
						{error && <p style={{ color: "red" }}>{error}</p>}
						{data && <p>Success!</p>}
					</section>
				)}
			</article>
		</Layout>
	)
}

export default login
