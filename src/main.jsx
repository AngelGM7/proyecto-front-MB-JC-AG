import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'
// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: 'intent',
})

const rootElement = document.getElementById('app')

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(<RouterProvider router={router} />)
}
