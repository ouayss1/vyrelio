"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { CALENDLY_URL } from "@/lib/utils";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
				<Link href="/" className="flex items-center font-semibold">
					<Image src="/vyrelio-logo.svg" alt="Vyrelio" width={40} height={40} priority className="h-14 w-auto md:h-14 lg:h-14" sizes="56px" />
					<span className="sr-only">Aller à l’accueil</span>
				</Link>

				<nav className="hidden md:block">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/#services" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										Services
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/#cases" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										Études de cas
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/blog" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										Blog
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/pricing" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										Nos prix
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/nous-rejoindre" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										Nous rejoindre
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/#apropos" legacyBehavior passHref>
									<NavigationMenuLink className="px-3 py-2 text-sm text-gray-700 hover:text-white">
										À propos
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				<div className="flex items-center gap-2">
					<Link href="/dashboard" aria-label="Accéder au dashboard" className="p-2 rounded-full text-gray-700 hover:bg-gray-100">
						<User className="size-5" />
					</Link>
					<Button asChild>
						<Link href="/#contact">Demander une démo</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}


