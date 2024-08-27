"use client";

import { useLanguage } from "@/lib/providers";
import { buttonLabels } from "@/lib/data";
import { Button } from "./ui/button";
import { header } from "@/lib/constants";

const LanguageSwitch: React.FC = () => {
	const { language, toggleLanguage } = useLanguage();

	return (
		<>
			<Button
				variant="ghost"
				onClick={toggleLanguage}
				className={`${header.className}`}
			>
				{language === "EN"
					? buttonLabels.language.en
					: buttonLabels.language.fr}
			</Button>
		</>
	);
};

export default LanguageSwitch;
