"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Burger from "./burger";

export default function Navigation() {
	const pathname = usePathname();
	const [active, setActive] = useState(false);
	return (
		<>
			<Burger active={active} onClick={() => setActive(!active)} />
			<div className="w-full">
				<ul
					className={cn(
						`
              opacity-0
              w-full
              h-16
              text-right
              m-0
              pr-6
              fixed
              top-0
              right-0
              bg-transparent
              flex
              flex-row
              justify-end
              place-items-end
              z-[1]
              -translate-y-full
              transition-all
              md:opacity-100
              md:translate-y-0
            `,
						active && "opacity-100 translate-y-0",
					)}
				>
					<li className="mx-4 text-lg">
						<Link
							className={cn(pathname === "/" && "underline font-bold")}
							href="/"
						>
							Home
						</Link>
					</li>
					<li className="mx-4 text-lg">
						<Link
							className={cn(
								pathname.startsWith("/posts") && "underline font-bold",
							)}
							href="/posts"
						>
							Blog
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
