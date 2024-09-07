import Twitter from "@/assets/icons/twitter";
import GitHub from "@/assets/icons/github";
import config from "@/lib/config";
import Link from "next/link";
import Telegram from "@/assets/icons/telegram";
import Gmail from "@/assets/icons/mail";

export default function SocialList({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Link
				title="Twitter"
				href={`https://twitter.com/${config.twitter_account}`}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block mr-4"
			>
				<Twitter width={24} height={24} className="text-foreground" />
			</Link>
			<Link
				title="GitHub"
				href={`https://github.com/${config.github_account}`}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block mr-4"
			>
				<GitHub width={24} height={24} className="text-foreground" />
			</Link>
			<Link
				title="Gmail"
				href="mailto:jenukohaefobi@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block mr-4"
			>
				<Gmail width={24} height={24} className="text-foreground" />
			</Link>
			<Link
				title="Telegram"
				href="https://t.me/inone_me_bot/link?startapp=owenyourdev"
				rel="noopener noreferrer"
				className="inline-block"
			>
				<Telegram width={24} height={24} className="text-foreground" />
			</Link>
		</div>
	);
}
