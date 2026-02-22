'use client';
import React from 'react';

/**
 * Returns a 0→1 progress value based on scroll position.
 * At scrollY=0 → 0, at scrollY≥range → 1.
 * Drives scroll-linked animations directly — no CSS transitions needed.
 */
export function useScrollProgress(range = 80) {
	const [progress, setProgress] = React.useState(0);
	const rafRef = React.useRef<number>(0);

	React.useEffect(() => {
		const onScroll = () => {
			cancelAnimationFrame(rafRef.current);
			rafRef.current = requestAnimationFrame(() => {
				const p = Math.min(Math.max(window.scrollY / range, 0), 1);
				setProgress(p);
			});
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(rafRef.current);
		};
	}, [range]);

	return progress;
}
