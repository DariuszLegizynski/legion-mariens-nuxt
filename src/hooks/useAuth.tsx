const useAuth = () => {
	let isAuthenticated = false

	if (typeof window !== "undefined") {
		isAuthenticated = sessionStorage.getItem("token") ? true : false
	}

	return { isAuthenticated }
}

export default useAuth
