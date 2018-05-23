export default function checkAuthorization(state) {
    
    const user = state.user
    
    // Checks if access token is available in store
    if (user && user.token) {
        return true
    }

    const storedToken = localStorage.getItem('token')
    
    // Checks if valid token is available in localStorage
    if (storedToken) {
        const token = JSON.parse(storedToken)
        const nowDate = new Date()
        const now = Math.round(nowDate.getTime() / 1000)
        const ttl = token.expires_in
        const expiry = token.created_at + ttl

        if (now > expiry) {
            return false
        }

        return true
    }

    return false
}