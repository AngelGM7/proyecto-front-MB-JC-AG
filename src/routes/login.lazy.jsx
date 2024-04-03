import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Form } from '@/components/ui/form'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

export const Route = createLazyFileRoute('/login')({
	component: () => {
		const form = useForm()
		return (
			<ProtectedRoute auth={true}>
				<Form {...form}></Form>
			</ProtectedRoute>
		)
	},
})
