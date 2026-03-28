import { useAuth } from "react-oidc-context"

export default function SignOutButton() {
  const auth = useAuth()

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID
    const logoutUri = import.meta.env.VITE_COGNITO_LOGOUT_URI
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN

    window.location.href =
      `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`
  }

  if (auth.isLoading) return null
  if (!auth.isAuthenticated) return null

  return (
    <button onClick={signOutRedirect}>
      Sign Out
    </button>
  )
}