import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios' // Assuming you're using axios for HTTP requests

export const useAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const token = localStorage.getItem('token')
		const sessionValidity = sessionStorage.getItem('sessionValidity')

		if (token && sessionValidity) {
			// Token exists, check if session is still valid
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
		}
	}, [])
	const { data: sessionValid, isLoading } = useQuery({
		queryKey: ['validateSession'],
		queryFn: async () => {
			const token = localStorage.getItem('token')
			if (!token) return false

			try {
				const response = await axios.get('/api/validate-token', {
					headers: { Authorization: `Bearer ${token}` },
				})
				return response.data.valid
			} catch (error) {
				console.error('Failed to validate session', error)
				return false
			}
		},
	})

	useEffect(() => {
		if (sessionValid) {
			setIsLoggedIn(true)
			sessionStorage.setItem('sessionValidity', true)
		} else {
			setIsLoggedIn(false)
			sessionStorage.removeItem('sessionValidity')
		}
	}, [sessionValid])

	return { isLoggedIn }
}
