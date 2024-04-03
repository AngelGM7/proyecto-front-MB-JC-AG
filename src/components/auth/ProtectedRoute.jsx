import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from '@tanstack/react-router'

export function ProtectedRoute({ children, auth = false }) {
	const navigate = useNavigate()
	const { isLoggedIn } = useAuth()
	if (auth && isLoggedIn) {
		navigate({ to: '/' })
		return null
	}
	if (!isLoggedIn) {
		navigate({ to: '/login' })
		return null
	}

	return children
}
