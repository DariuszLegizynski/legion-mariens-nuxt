// export default async function handler(req, res) {
// 	if (req.method !== "POST") {
// 		return res.status(405).json({ message: "Method not allowed" })
// 	}

// 	const { identifier, password } = req.body

// 	try {
// 		const strapiRes = await fetch(`${process.env.API_URL}/api/auth/local`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ identifier, password }),
// 		})

// 		const data = await strapiRes.json()
// 		console.log({ data })

// 		if (!strapiRes.ok) {
// 			return res.status(strapiRes.status).json({ message: data.message[0].messages[0].message })
// 		}

// 		// Set HTTP-only cookie
// 		res.setHeader("Set-Cookie", `token=${data.jwt}; HttpOnly; Path=/; Max-Age=3600`)

// 		res.status(200).json({ user: data.user })
// 	} catch (error) {
// 		res.status(500).json({ message: "Something went wrong" })
// 	}
// }
