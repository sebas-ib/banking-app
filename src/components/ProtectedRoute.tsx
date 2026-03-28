import type { JSX } from "react"
import { useAuth } from "react-oidc-context"

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth()

  if (auth.isLoading) return <div>Loading...</div>

  if (!auth.isAuthenticated) {
    auth.signinRedirect()
    return null
  }

  return children
}