import { useAuth } from "react-oidc-context"
import SignOutButton from "../components/SignOutButton"

export default function Home() {
  const auth = useAuth()

  if (auth.isLoading) return <div>Loading...</div>
  if (!auth.isAuthenticated) return <div>Not authenticated</div>

  const user = auth.user?.profile

  return (
    <div>
      <h1>Welcome, {user?.given_name} {user?.family_name}</h1>
      <p>Email: {user?.email}</p>
      <SignOutButton />
    </div>
  )
}