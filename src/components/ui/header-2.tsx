'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScrollProgress } from '@/components/ui/use-scroll';
import { ButtonColorful } from '@/components/ui/button-colorful';
import { useTheme } from 'next-themes';
import SkyToggle from '@/components/ui/sky-toggle';

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);
	const [padStart, setPadStart] = React.useState(120);
	const t = useScrollProgress(80);
	const { resolvedTheme } = useTheme();

	React.useEffect(() => setMounted(true), []);

	React.useEffect(() => {
		const update = () => {
			const w = window.innerWidth;
			setPadStart(w < 640 ? 20 : w < 1024 ? 32 : w < 1280 ? 64 : 120);
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	const isDark = resolvedTheme === 'dark';

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Services', href: '/#services' },
		{ label: 'Work', href: '/work' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Theme-aware pill colors driven by scroll progress
	const pillBg = isDark
		? `rgba(0, 0, 0, ${t * 0.7})`
		: `rgba(255, 255, 255, ${t * 0.85})`;
	const pillBorder = isDark
		? `rgba(39, 39, 42, ${t})`
		: `rgba(229, 231, 235, ${t})`;
	const pillShadow = isDark
		? `0 ${t * 8}px ${t * 32}px rgba(0, 0, 0, ${t * 0.4})`
		: `0 ${t * 8}px ${t * 32}px rgba(0, 0, 0, ${t * 0.08})`;

	return (
		<header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
			{/* Outer wrapper — padding creates the pill-shrink effect */}
			<div
				className="pointer-events-auto mx-auto"
				style={{
					paddingLeft: `calc(${t} * (50% - 28rem))`,
					paddingRight: `calc(${t} * (50% - 28rem))`,
					paddingTop: `${t * 16}px`,
				}}
			>
				{/* Inner pill — visual styling driven by scroll progress */}
				<div
					style={{
						borderRadius: `${t * 16}px`,
						backgroundColor: pillBg,
						borderWidth: '1px',
						borderStyle: 'solid',
						borderColor: pillBorder,
						backdropFilter: `blur(${t * 20}px)`,
						WebkitBackdropFilter: `blur(${t * 20}px)`,
						boxShadow: pillShadow,
					}}
				>
					<nav
						aria-label="Main navigation"
						className="flex w-full items-center justify-between"
						style={{
							height: `${lerp(4.5, 3.5, t)}rem`,
							paddingLeft: `${lerp(padStart, Math.min(padStart, 24), t)}px`,
							paddingRight: `${lerp(padStart, Math.min(padStart, 24), t)}px`,
						}}
					>
						<Link href="/" className="relative block w-[130px] sm:w-[160px] lg:w-[200px]" style={{ aspectRatio: '200/36' }}>
							<Image
								src="/logo-white.svg"
								alt="Quessence"
								fill
								sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 200px"
								priority
								className="absolute inset-0 object-contain"
								style={{ opacity: mounted && !isDark ? 0 : 1 }}
							/>
							<Image
								src="/logo-black.svg"
								alt="Quessence"
								fill
								sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 200px"
								priority
								className="absolute inset-0 object-contain"
								style={{ opacity: mounted && !isDark ? 1 : 0 }}
							/>
						</Link>
						<div className="hidden items-center gap-1 md:flex">
							{links.map((link) => (
								<Link
									key={link.label}
									className={cn(
										buttonVariants({ variant: 'ghost' }),
										'text-[var(--q-nav-link-color)] hover:text-[var(--q-nav-link-hover)] hover:bg-[var(--q-nav-link-hover-bg)]'
									)}
									href={link.href}
								>
									{link.label}
								</Link>
							))}

							{/* Theme toggle */}
							<SkyToggle />

							<ButtonColorful href="/contact" label="Let's Talk" className="ml-2 h-9 px-5 text-sm" />
						</div>
						<div className="flex items-center gap-2 md:hidden">
							{/* Mobile theme toggle */}
							<SkyToggle />
							<Button
								size="icon"
								variant="outline"
								onClick={() => setOpen(!open)}
								aria-label={open ? 'Close menu' : 'Open menu'}
								aria-expanded={open}
								className="border-[var(--q-card-border)] text-[var(--q-nav-link-color)] hover:text-[var(--q-nav-link-hover)] hover:border-[var(--q-nav-link-hover)]"
							>
								<MenuToggleIcon open={open} className="size-5" duration={300} />
							</Button>
						</div>
					</nav>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				role="dialog"
				aria-modal="true"
				aria-label="Navigation menu"
				className={cn(
					'pointer-events-auto fixed top-[72px] right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
				style={{
					backgroundColor: 'var(--q-mobile-menu-bg)',
					borderColor: 'var(--q-mobile-menu-border)',
				}}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-6',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<Link
								key={link.label}
								className={cn(
									buttonVariants({ variant: 'ghost', className: 'justify-start' }),
									'text-[var(--q-nav-link-color)] hover:text-[var(--q-nav-link-hover)] hover:bg-[var(--q-nav-link-hover-bg)]'
								)}
								href={link.href}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-3">
						<ButtonColorful href="/contact" label="Let's Talk" className="w-full h-12 text-sm" />
					</div>
				</div>
			</div>
		</header>
	);
}
