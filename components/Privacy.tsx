import { useLanguage } from "context/language-context";
import React from "react";

const Privacy = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "FR" ? (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Plitique de Confidentialité</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw] break-words">
          <h1>Privacy Policy</h1>
        </article>
      )}
    </React.Fragment>
  );
};

export default Privacy;
