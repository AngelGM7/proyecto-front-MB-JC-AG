import React from 'react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Button } from '../components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/ui/mode-toogle'
const queryClient = new QueryClient()

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				<NavigationMenu className="p-4 bg-sky-700 w-full max-w-full justify-between">
					<NavigationMenuItem
						className={
							'font-bold text-white list-none hover:text-opacity-50 p-4'
						}
					>
						<NavigationMenuLink asChild>
							<Link to="/" className="[&.active]:font-bold text-2xl">
								CIPHER MESSAGES
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuList className="flex  gap-x-4">
						<NavigationMenuItem>
							<ModeToggle />
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}
								asChild
							>
								<Link to="/login" className="[&.active]:font-bold">
									Login
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}
								asChild
							>
								<Link to="/register" className="[&.active]:font-bold">
									Register
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Outlet />
				<TanStackRouterDevtools />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ThemeProvider>
	),
})
