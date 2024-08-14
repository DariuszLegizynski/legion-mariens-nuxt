import { useState } from "react"

import BaseButton from "@/components/base/BaseButton"
import Layout from "@/components/layout"

// export async function getServerSideProps({ req }) {
// 	const { token } = req.cookies

// 	// Check if user is logged in
// 	if (token) {
// 		const res = await fetch(`${process.env.API_URL}/users/me`, {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})

// 		if (res.ok) {
// 			return {
// 				props: { loggedIn: true }, // Pass a prop indicating the user is logged in
// 			}
// 		}
// 	}

// 	// If not logged in, continue to render the login page
// 	return {
// 		props: { loggedIn: false }, // Pass a prop indicating the user is not logged in
// 	}
// }

const login = ({ loggedIn = false }) => {
	const [identifier, setIdentifier] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	// // const [loading, setLoading] = useState(false)
	// console.log({ loggedIn })
	const handleLogin = async e => {
		e.preventDefault()

		// try {
		// 	const res = await fetch("/api/login", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({ identifier, password }),
		// 	})

		// 	if (res.ok) {
		// 		loggedIn = true
		// 	} else {
		// 		const data = await res.json()
		// 		setError(data.message || "Something went wrong")
		// 	}
		// } catch (error) {
		// 	setError("Failed to log in")
		// }
	}

	return (
		<Layout>
			<article className="my-20 mx-8">
				<div className={`text-left mb-8 ${loggedIn ? "h2" : "h3"}`}>{loggedIn ? "Legionsleben" : "Anmelden (Geschützte Seite)"}</div>
				{!loggedIn && (
					<section>
						<form onSubmit={handleLogin} className="flex flex-col items-center gap-y-4 w-full">
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
				{loggedIn ? (
					<p>Wählen Sie aus den Unterpunkten des Menü</p>
				) : (
					<section className="text-center mt-8">
						{/* {loading && <p style={{ color: "blue" }}>Loading: {loading}</p>} */}
						{error && <p style={{ color: "red" }}>{error}</p>}
						{/* {data && <p>Success!</p>} */}
					</section>
				)}
			</article>
		</Layout>
	)
}

export default login
