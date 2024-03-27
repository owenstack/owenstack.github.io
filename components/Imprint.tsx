'use client'
import { useLanguage } from "context/language-context";
import React from "react";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Avis de Chantier</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
