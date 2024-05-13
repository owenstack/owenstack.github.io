"use client";

import {useLanguage} from "@/lib/providers";
import {buttonLabels} from "@/lib/data";
import {Button} from "./ui/button";

const LanguageSwitch: React.FC = () => {
  const {language, toggleLanguage} = useLanguage();

  return (
    <>
      <Button variant="ghost" onClick={toggleLanguage}>
        {language === "EN"
          ? buttonLabels.language.en
          : buttonLabels.language.fr}
      </Button>
    </>
  );
};

export default LanguageSwitch;
