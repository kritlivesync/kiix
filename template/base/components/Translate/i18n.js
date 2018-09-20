
export default function i18n(lang, str) {
  const translations = {
    en: require('../../locales/en.json'),
    th: require('../../locales/th.json')
  };
  console.log(translations.en,translations.en.label)

  if (!lang || typeof lang !== 'string') {
    return str;
  }else{
    if (lang.length > 2) {
      lang = lang.substring(0, 2);
    }
    return (translations[lang] && translations[lang][str])? translations[lang][str] : str;
  }
}