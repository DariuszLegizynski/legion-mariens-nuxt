import { useState } from "react"

const useSignIn = (identifier = "", password = "") => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState<boolean>(false)

	const postAuth = async () => {
		setLoading(true)
		setError(null)

		try {
			const response = await fetch("http://localhost:1337/api/auth/local", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ identifier, password }),
			})

			if (!response.ok) {
				setData(null)
				throw new Error(`Status: ${response.status}, Benutzername oder Passwort falsch.`)
			}

			const result = await response.json()
			setData(result)
			sessionStorage.setItem("user", JSON.stringify(data?.user?.username))
			sessionStorage.setItem("token", data?.jwt)
		} catch (error) {
			setData(null)
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return { data, error, loading, postAuth }
}

export default useSignIn
