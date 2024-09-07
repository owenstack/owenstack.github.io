"use client";

import { useEffect, useRef, useState } from "react";

interface FloatingGlassProps {
	width: number;
	height: number;
}

export function FloatingGlass({ width, height }: FloatingGlassProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [velocity, setVelocity] = useState({ x: 2, y: 2 });
	const glassRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const animateGlass = () => {
			if (!glassRef.current || !containerRef.current) return;

			const rect = glassRef.current.getBoundingClientRect();
			const containerRect = containerRef.current.getBoundingClientRect();

			let newX = position.x + velocity.x;
			let newY = position.y + velocity.y;
			let newVelocityX = velocity.x;
			let newVelocityY = velocity.y;

			if (newX <= 0 || newX + rect.width >= containerRect.width) {
				newVelocityX = -velocity.x;
				newX = Math.max(0, Math.min(newX, containerRect.width - rect.width));
			}

			if (newY <= 0 || newY + rect.height >= containerRect.height) {
				newVelocityY = -velocity.y;
				newY = Math.max(0, Math.min(newY, containerRect.height - rect.height));
			}

			setPosition({ x: newX, y: newY });
			setVelocity({ x: newVelocityX, y: newVelocityY });
		};

		const intervalId = setInterval(animateGlass, 16);

		return () => clearInterval(intervalId);
	}, [position, velocity]);

	return (
		<div ref={containerRef} className="absolute inset-0 overflow-hidden">
			<div
				ref={glassRef}
				className="absolute z-20 backdrop-blur-sm bg-primary/10 rounded-full shadow-lg"
				style={{
					width: `${width}px`,
					height: `${height}px`,
					transform: `translate(${position.x}px, ${position.y}px)`,
				}}
			/>
		</div>
	);
}
