import adobexdicon from "assets/icons/adobexdicon.svg";
import blogicon from 'assets/icons/blogicon.svg'
import bunicon from 'assets/icons/bunicon.svg'
import canvaicon from "assets/icons/canvaicon.svg";
import chessicon from 'assets/icons/chessicon.svg'
import cssicon from "assets/icons/cssicon.svg";
import expressicon from "assets/icons/expressicon.svg";
import figmaicon from "assets/icons/figmaicon.svg";
import ghosticon from 'assets/icons/ghosticon.svg'
import googlecloudicon from 'assets/icons/googlecloudicon.svg'
import htmlicon from "assets/icons/htmlicon.svg";
import ideaicon from 'assets/icons/ideaicon.svg'
import javascripticon from "assets/icons/javascripticon.svg";
import languageicon from 'assets/icons/languageicon.svg'
import mongodbicon from "assets/icons/mongoicon.svg";
import nextjsicon from "assets/icons/nextjsicon.svg";
import nodejsicon from "assets/icons/nodejsicon.svg";
import reacticon from "assets/icons/reacticon.svg";
import relaxicon from 'assets/icons/relaxicon.svg'
import sanityicon from 'assets/icons/sanityicon.svg'
import strapiicon from 'assets/icons/strapiicon.svg'
import supabaseicon from 'assets/icons/supabaseicon.svg'
import tailwindcssicon from "assets/icons/tailwindicon.svg";
import typescripticon from "assets/icons/typescripticon.svg";
import viteicon from 'assets/icons/viteicon.svg'
import headshot from 'assets/img/me2.webp'
import Imprint from 'components/Imprint'
import Privacy from 'components/Privacy'
import { FiGithub, FiLinkedin, FiMail,FiTwitter } from "react-icons/fi";
import { GoBookmark, GoHome, GoUnlink } from "react-icons/go";

export const headerIntroData = {
  title: {
    fr: 'Salut, je suis Owen',
    en: `Hi, I'm Owen`,
  },
  subtitle: 'FullStack Developer',
  description: {
    fr: `Je m'appelle Owen, un développeur fullstack dont la mission est de faire progresser ma carrière et de me lancer dans des projets passionnants. Ici, je présente mon travail et mon amour pour le développement Web. Collaborons pour élaborer des solutions numériques et façonner l'avenir!`,
    en: `I'm Jideofor Owen Enukoha-Efobi, a fullstack developer on a mission to level up my career and dive into exciting projects. Here, I showcase my work and my love for web development. Let's collaborate on crafting digital solutions and shaping the future!`,
  },
  buttons: [
    {
      name: 'Relax',
      label: {
        fr: 'Se détendre',
        en: 'Relax',
      },
      icon: 'btn-primary',
      color: relaxicon,
    },
    {
      name: 'Blog',
      label: {
        fr: 'Journal',
        en: 'Blog',
      },
      icon: 'btn-secondary',
      color: blogicon,
    },
  ],
  profilepicture: headshot,
} as const

export const skillsDataWeb = [
  {
    skillsTitle: 'WebDevelopment',
    skills: [
      {
        title: 'HTML',
        hash: '#html',
        icon: htmlicon,
        color: '#e44d26',
      },
      {
        title: 'CSS3',
        hash: '#CSS3',
        icon: cssicon,
        color: '#1572b6',
      },
      {
        title: 'JavaScript',
        hash: '#JavaScript',
        icon: javascripticon,
        color: '#f0db4f',
      },
      {
        title: 'TypeScript',
        hash: '#TypeScript',
        icon: typescripticon,
        color: '#007acc',
      },
      {
        title: 'React',
        hash: '#React',
        icon: reacticon,
        color: '#61dafb',
      },
      {
        title: 'NextJS',
        hash: '#NextJS',
        icon: nextjsicon,
        color: "#000000",
      },
      {
        title: 'NodeJS',
        hash: '#NodeJS',
        icon: nodejsicon,
        color: '#64b749',
      },
      {
        title: 'ViteJS',
        hash: '#ViteJS',
        icon: viteicon,
        color: '#41d1ff',
      },
      {
        title: 'Bun',
        hash: '#Bun',
        icon: bunicon,
        color: '#f6dece',
      },
      {
        title: 'TailwindCSS',
        hash: '#TailwindCSS',
        icon: tailwindcssicon,
        color: '#38bdf8',
      },
      {
        title: 'MongoDB',
        hash: '#MongoDB',
        icon: mongodbicon,
        color: '#46a037',
      },
      {
        title: 'Google Cloud Platform',
        hash: '#Google Cloud Platform',
        icon: googlecloudicon,
        color: '#557ebf',
      },
      {
        title: 'Supabase',
        hash: '#Supabase',
        icon: supabaseicon,
        color: '#3ecf8e',
      },
      {
        title: 'ExpressJS',
        hash: '#ExpressJS',
        icon: expressicon,
        color: "#000000",
      },
      
    ],
  },
] as const

export const skillsDataDesign = [
  {
    skillsTitle: 'Design',
    skills: [
      {
        title: 'Figma',
        hash: '#Figma',
        icon: figmaicon,
        color: '#1abcfe',
      },
      {
        title: 'Adobe XD',
        hash: '#Adobe XD',
        icon: adobexdicon,
        color: '#ff61f6',
      },
      {
        title: 'Canva',
        hash: '#Canva',
        icon: canvaicon,
        color: '#00c4cc',
      },
    ],
  },
] as const

export const skillsDataCMS = [
  {
    skillsTitle: 'CMS',
    skills: [
      {
        title: 'Sanity CMS',
        hash: '#Sanity CMS',
        icon: sanityicon,
        color: '#f03e2f',
      },
      {
        title: 'Ghost CMS',
        hash: '#Ghost CMS',
        icon: ghosticon,
        color: '#fff',
      },
      {
        title: 'Strapi CMS',
        hash: '#Strapi CMS',
        icon: strapiicon,
        color: '#4945ff',
      },
    ],
  },
] as const

export const navLinks = [
  {
    fr: `Page d'accueil`,
    en: 'Home',
    hash: '/',
    icon: GoHome,
  },
  {
    fr: 'Se détendre',
    en: 'Relax',
    hash: '/relax',
    icon: GoUnlink,
  },
  {
    fr: 'Journal',
    en: 'Blog',
    hash: '/blog',
    icon: GoBookmark,
  },
] as const

export const FooterLinks = [
  {
    fr: 'Marque',
    en: 'Imprint',
    hash: '#imprint',
    data: <Imprint />,
  },
  {
    fr: 'Confidentialité',
    en: 'Privacy',
    hash: '#privacy',
    data: <Privacy />,
  },
] as const

export const sideBarRightMail = {
  link: 'mailto:jenukohaefobi@gmail.com',
  text: 'jenukohaefobi@gmail.com',
} as const

export const sideBarLeftSocials = [
  {
    link: 'https://linkedin.com/in/j1d30f0r',
    icon: FiLinkedin,
    altimagename: 'linkedin',
  },
  {
    link: 'https://github.com/owenstack',
    icon: FiGithub,
    altimagename: 'github',
  },
  {
    link: 'https://twitter.com/oweneefobi',
    icon: FiTwitter,
    altimagename: 'twitter',
  },
] as const

export const quotesData = [
  {
    fr: `Aujourd'hui, la programmation est une course entre les ingénieurs logiciels qui s'efforcent de créer des programmes plus grands et meilleurs, à l'épreuve des idiots, et l'Univers qui tente de produire des idiots plus grands et meilleurs. Jusqu'à présent, l'Univers gagne`,
    en: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning',
    author: 'Rick Cook',
  },
  {
    fr: `Mesurer la progression de la programmation par lignes de code revient à mesurer la progression de la construction d’un avion en fonction du poids.`,
    en: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    author: 'Bill Gates',
  },
] as const

export const aboutMeData = {
  title: 'Sur Moi',
  title_EN: 'Abouţ Me',
  description: 'Quelques détails sur moi',
  description_EN: 'A few details about me',
  paragraphs_FR: [
    {
      title: 'Expert Multilingue',
      description: `Je suis plutôt polyglotte, je converse facilement en anglais, yoruba, français et igbo – classés par ordre de maîtrise. Mon cœur bat pour les expressions créatives, l’art et la photographie.`,
      icon: languageicon,
    },
    {
      title: 'Se détendre avec les échecs',
      description: `En dehors du codage et de la prise de photos, vous me trouverez engagé dans le monde complexe des échecs. C'est un favori personnel, offrant un terrain de jeu stratégique et un espace de contemplation`,
      icon: chessicon,
    },
    {
      title: 'Adopter la simplicité',
      description: `Je suis un fervent défenseur du principe KISS, qui prône la simplicité dans tout ce que je fais. Pour moi, KISS signifie « Keep It Simple, Stupid » – un rappel constant que les choses sont souvent plus simples qu'il n'y paraît.`,
      icon: ideaicon,
    },
  ],
  paragraphs_EN: [
    {
      title: 'Multilingual Maven',
      description: `I'm quite the polyglot, smoothly conversing in English, Yoruba, French, and Igbo – ranked in order of fluency. My heart beats for creative expressions, art, and photography.`,
      icon: languageicon,
    },
    {
      title: 'Unwinding with Chess',
      description: `Outside of coding and snapping photos, you'll find me engaged in the intricate world of chess. It's a personal favorite, offering a strategic playground and a space for contemplation`,
      icon: chessicon,
    },
    {
      title: 'Embracing Simplicity',
      description: `I'm a firm advocate of the KISS principle, urging simplicity in everything I do. For me, KISS stands for "Keep It Simple, Stupid" – a constant reminder that things are often simpler than they appear.`,
      icon: ideaicon,
    },
  ],
} as const

export const contactData = {
  title: {
    fr: 'Contact',
    en: 'Contact',
  },
  description: {
    fr: 'Écrivez-moi et je vous répondrai dès que possible',
    en: 'Write to me and i will get back to you as soon as I  can',
  },
  inputfields: [
    {
      name: 'name',
      placeholder: {
        fr: 'Votre nom',
        en: 'Your name',
      },
      type: 'text',
      validation: {
        fr: 'Veuillez saisir votre nom',
        en: 'Please input your name',
      },
      pattern: '{2}',
    },
    {
      name: 'email',
      placeholder: {
        fr: 'Votre Email',
        en: 'Your Email',
      },
      type: 'email',
      validation: {
        fr: 'Veuillez remplir votre email',
        en: 'Please fill in your email',
      },
      pattern: '[@]{4}',
    },
    {
      name: 'subject',
      placeholder: {
        fr: 'Votre Sujet',
        en: 'Your Subject',
      },
      type: 'text',
      validation: {
        fr: 'Le sujet de cet email est nécessaire',
        en: 'The subject of this email is necesary',
      },
      pattern: '{10}',
    },
  ],
  textarea: {
    placeholder: {
      fr: 'Votre Message',
      en: 'Your Message',
    },
    name: 'message',
    rows: 10,
    validation: {
      fr: 'Vous ne pouvez pas envoyer un message vide, allez',
      en: `You can't send an empty message, c'mon.`,
    },
    pattern: '{10}',
  },
  button: {
    value: {
      fr: 'Envoyer',
      en: 'Send',
    },
  },
  icon: FiMail,
  iconcolor: '#fff',
  colors: {
    main: 'btn-primary',
    second: 'btn-secondary',
    icon: 'white',
  },
  privacyOptIn: {
    checkbox: {
      fr: `Bien sûr, allez-y et laissez Owen avoir mon précieux nom et mon e-mail. Ce n’est pas comme si ma boîte de réception n’était pas déjà le salon VIP du spam, n’est-ce pas ?`,
      en: `Sure, go ahead and let Owen have my precious name and email. It's not like my inbox isn't already the VIP lounge for spam, right?`,
    },
    description: {
      fr: `En appuyant sur ce bouton d'envoi, vous faites essentiellement un clin d'œil à notre politique de confidentialité. C'est comme un signe de tête tacite entre amis, mais avec un jargon juridique. 🙄`,
      en: `By hitting that submit button, you're basically winking at our Privacy Policy. It's like the unspoken nod between friends, but with legal jargon. 🙄`,
    },
  },
} as const

export const toastMessages = {
  successEmailSent: {
    fr: `Je viens de recevoir votre email. Préparez-vous au suspense car je vous répondrai dès que possible – ou, vous savez, quand je décide d'honorer ma boîte de réception de ma présence.`,
    en: ` Just got your email. Brace yourself for the suspense because I'll hit you back ASAP – or, you know, when I decide to grace my inbox with my presence`,
  },
  failedEmailSent: {
    fr: `Désolé, votre e-mail n'a pas reçu le mémo expliquant comment l'envoyer. Donnez-lui une autre chance lorsqu'il aura terminé sa pause-café – peut-être qu'il coopérera alors. 😅☕️`,
    en: `Sorry, your email didn't get the memo on how to send itself. Give it another shot when it's done with its coffee break – maybe it'll cooperate then. 😅☕️`,
  },
  failedValidationName: {
    fr: `Votre nom. N'importe quel nom. Donnez-moi juste un nom.`,
    en: 'Your name. Any name. Just give me a name.',
  },
} as const

export const buttonLabels = {
  language: {
    fr: 'FR',
    en: 'EN',
  },
} as const

export const directionStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginRight: '4rem',
  },
  'outer-left-to-inner-right': {
    marginLeft: '4rem',
    transform: 'scaleX(-1)',
  },
  'inner-right-to-middle': {
    width: '100%',
    transform: 'scaleY(1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'inner-left-to-middle': {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  'middle-to-inner-right': {
    width: '100%',
    transform: 'scale(1,-1)',
  },
  'middle-to-inner-left': {
    width: '100%',
    transform: 'scale(-1,-1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '100%',
    transform: 'scaleX(-1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ['25rem', '15rem'],
  },
  middle: {
    heights: ['35rem', '25rem'],
  },
  large: {
    heights: ['45rem', '35rem'],
  },
  extraLarge: {
    heights: ['55rem', '45rem'],
  },
}

export const spaceStyles: Record<string, React.CSSProperties> = {
  'outer-right-to-inner-left': {
    marginTop: '-6rem',
    width: '100%',
  },
  'outer-left-to-inner-right': {
    marginTop: '-6rem',
    width: '100%',
  },
  'inner-right-to-middle': {
    marginTop: '-20rem',
    width: '50%',
    zIndex: '-10',
  },
  'inner-left-to-middle': {
    marginTop: '-10rem',
    width: '50%',
    zIndex: '-10',
  },
  'middle-to-inner-right': {
    width: '75%',
  },
  'middle-to-inner-left': {
    marginTop: '-2.5rem',
    width: '50%',
  },
  middle: {
    marginTop: '-2.5rem',
    width: '0%',
    display: 'none',
  },
}

export const widthStyles: Record<string, { widths: [string, string] }> = {
  'outer-right-to-inner-left': {
    widths: ['74.45%', '74.45%'],
  },
  'outer-left-to-inner-right': {
    widths: ['75%', '75%'],
  },
  'inner-right-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'inner-left-to-middle': {
    widths: ['50.1%', '49%'],
  },
  'middle-to-inner-right': {
    widths: ['33.4%', '50.03%'],
  },
  'middle-to-inner-left': {
    widths: ['50.1%', '49%'],
  },
  middle: {
    widths: ['0%', '0%'],
  },
}
