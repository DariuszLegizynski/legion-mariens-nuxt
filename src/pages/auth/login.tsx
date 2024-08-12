import { useState, useEffect } from "react"

import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/layout"

import useSignIn from "@/hooks/useSignIn"

const login = () => {
	const [identifier, setIdentifier] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const { data, error, loading, postAuth } = useSignIn(identifier, password)

	const onSignIn = e => {
		e.preventDefault()

		postAuth()
	}

	useEffect(() => {
		if (data) {
			sessionStorage.setItem("user", JSON.stringify(data?.user?.username))
			sessionStorage.setItem("token", data?.jwt)
		}
	}, [data])

	return (
		<Layout>
			<article className="my-20 mx-8">
				<div className="h3 text-left mb-8">Anmelden (Geschützte Seite)</div>
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
						<BaseButton isDisabled={!(identifier && password)} text="Anmelden" />
					</form>
				</section>
				<section className="text-center mt-8">
					{loading && <p style={{ color: "blue" }}>Loading: {loading}</p>}
					{error && <p style={{ color: "red" }}>{error}</p>}
					{data && <p>Success!</p>}
				</section>
			</article>
		</Layout>
	)
}

export default login
