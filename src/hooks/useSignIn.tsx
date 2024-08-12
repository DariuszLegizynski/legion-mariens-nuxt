import { useState } from "react"

const useSignIn = (identifier, password) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

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
				throw new Error(`HTTP error! Status: ${response.status}`)
			}

			const result = await response.json()
			setData(result)
			console.log("Well done!")
			console.log("User profile", result.user)
			console.log("User token", result.jwt)
		} catch (error) {
			setError(error.message)
			console.log("An error occurred:", error.message)
		} finally {
			setLoading(false)
		}
	}

	return { data, error, loading, postAuth }
}

export default useSignIn
