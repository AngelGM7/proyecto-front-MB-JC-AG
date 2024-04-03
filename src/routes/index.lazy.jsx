import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
	component: () => (
		<ProtectedRoute>
			<div className="p-2">
				<h3>Welcome Home!</h3>
			</div>
		</ProtectedRoute>
	),
})
