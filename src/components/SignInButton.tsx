import { useAuth } from "react-oidc-context"

export default function SignInButton() {
  const auth = useAuth()
  console.log("Auth state:", auth)

  if (auth.isLoading) return <p>Loading...</p>

  return (
    <button
      onClick={() => auth.signinRedirect()}
    >
      Sign In
    </button>
  )
}